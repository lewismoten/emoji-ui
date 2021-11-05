import { createSelector } from "reselect";
import emoji from "@lewismoten/emoji";

const slice = ({ search = {} } = {}) => search;
export const list = createSelector(slice, slice => {
  return Object.keys(emoji);
});
