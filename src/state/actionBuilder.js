import { createRoutine } from "redux-saga-routines";

const actionBuilder = (domain, emoji) => {
  const actionTypePrefix = action => `${domain} ${emoji} ${action}`;

  return action => createRoutine(actionTypePrefix(action));
};
export default actionBuilder;
