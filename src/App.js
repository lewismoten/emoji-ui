import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputGroup, Input, Dropdown } from "rsuite";
import * as actions from "./state/search/actions";
import * as selectors from "./state/search/selectors";
import * as constants from "./utils/constants";
import View from "./components/View";

function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectors.list);
  const [view, setView] = useState(constants.VIEW_ICONS);

  useEffect(() => {
    dispatch(actions.load());
    return () => dispatch(actions.unload());
  }, []);

  const onChange = value => {
    dispatch(actions.filterText(value));
  };

  const onSelectView = (value, e) => {
    setView(value);
  };

  return (
    <div className="App">
      <InputGroup>
        <Input size="lg" onChange={onChange} />
        <Dropdown onSelect={onSelectView} title={view}>
          {constants.VIEWS.map(view => (
            <Dropdown.Item key={view} eventKey={view}>
              {view}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </InputGroup>
      <View view={view} list={list} />
    </div>
  );
}

export default App;
