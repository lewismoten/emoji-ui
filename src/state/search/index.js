import { handleActions } from "redux-actions";
import produce from "immer";
import * as actions from "./actions";

const initialState = {
  allIds: [],
  byId: {},
  isLoading: false,
  hasLoaded: false,
  hasError: false
};

const onLoadRequest = produce((draft, action) => {
  draft.isLoading = true;
});

const onLoadSuccess = produce((draft, action) => {
  draft.hasError = false;
  draft.allIds = action.payload.allIds;
  draft.byId = action.payload.byId;
  draft.hasLoaded = true;
});

const onLoadFailure = produce((draft, action) => {
  draft.hasError = true;
});

const onLoadFulfill = produce((draft, action) => {
  draft.isLoading = false;
});

export default handleActions(
  {
    [actions.load.REQUEST]: onLoadRequest,
    [actions.load.SUCCESS]: onLoadSuccess,
    [actions.load.FAILURE]: onLoadFailure,
    [actions.load.FULFILL]: onLoadFulfill
  },
  initialState
);
