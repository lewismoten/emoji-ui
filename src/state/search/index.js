import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from './actions';

const initialState = {
  allIds: [],
  byId: {},
  isLoading: false,
  hasLoaded: false,
  hasError: false,
  text: '',
  selectedId: undefined,
};

const onFilterText = produce((draft, action) => {
  draft.text = action.payload;
});

const onSelect = produce((draft, action) => {
  draft.selectedId = action.payload;
});
const onDeselect = produce((draft) => {
  draft.selectedId = undefined;
});

const onLoadRequest = produce((draft) => {
  draft.isLoading = true;
});

const onLoadSuccess = produce((draft, action) => {
  draft.hasError = false;
  draft.allIds = action.payload.allIds;
  draft.byId = action.payload.byId;
  draft.hasLoaded = true;
});

const onLoadFailure = produce((draft) => {
  draft.hasError = true;
});

const onLoadFulfill = produce((draft) => {
  draft.isLoading = false;
});

export default handleActions(
  {
    [actions.load.REQUEST]: onLoadRequest,
    [actions.load.SUCCESS]: onLoadSuccess,
    [actions.load.FAILURE]: onLoadFailure,
    [actions.load.FULFILL]: onLoadFulfill,
    [actions.filterText.TRIGGER]: onFilterText,
    [actions.select.TRIGGER]: onSelect,
    [actions.deselect.TRIGGER]: onDeselect,
  },
  initialState
);
