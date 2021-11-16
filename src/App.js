import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputGroup, Input, Dropdown, Affix, IconButton } from "rsuite";
import ImageIcon from "@rsuite/icons/Image"
import * as actions from "./state/search/actions";
import * as selectors from "./state/search/selectors";
import * as constants from "./utils/constants";
import View from "./components/View";
import { CustomProvider } from 'rsuite'

function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectors.list);
  const [view, setView] = useState(constants.VIEW_ICONS);
  const themes = ["dark", "high-contrast", "light"];
  const [theme, setTheme] = useState(themes[0]);

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

  const onClickTheme = (value, e) => {
    let index = themes.indexOf(theme);
    const next = ++index % themes.length;
    setTheme(themes[next]);
  };

  return (
    <CustomProvider theme={theme}>
      <div className="App">
        <Affix>
          <InputGroup>
            <IconButton icon={<ImageIcon />} onClick={onClickTheme}/>
            <Input size="lg" onChange={onChange} />
            <Dropdown onSelect={onSelectView} title={view}>
              {constants.VIEWS.map(view => (
                <Dropdown.Item key={view} eventKey={view}>
                  {view}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </InputGroup>
        </Affix>
        <View view={view} list={list} />
      </div>
    </CustomProvider>
  );
}

export default App;
