import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./state/search/actions";
import * as selectors from "./state/search/selectors";

function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectors.list);

  useEffect(() => {
    dispatch(actions.load());
    return () => dispatch(actions.unload());
  }, []);

  return (
    <div className="App">
      This is an app.
      <xmp>{JSON.stringify(list, null, "  ")}</xmp>
    </div>
  );
}

export default App;
