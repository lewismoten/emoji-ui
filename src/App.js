import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CustomProvider,
  InputGroup,
  Input,
  Dropdown,
  Affix,
  IconButton,
} from "rsuite";
import ImageIcon from "@rsuite/icons/Image";
import ResizeIcon from "@rsuite/icons/Resize";
import * as actions from "./state/search/actions";
import * as selectors from "./state/search/selectors";
import * as constants from "./utils/constants";
import View from "./components/View";
import SelectedDetails from "./components/SelectedDetails";

function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectors.list);
  const selectedId = useSelector(selectors.selectedId);
  const selectedText = useSelector(selectors.selectedText);
  const selectedTitle = useSelector(selectors.selectedTitle);
  const selectedCodePoints = useSelector(selectors.selectedCodePoints);
  const hasSelection = useSelector(selectors.hasSelection);
  const [view, setView] = useState(constants.VIEW_ICONS);
  const themes = ["dark", "high-contrast", "light"];
  const sizes = ["xs", "sm", "md", "lg"];
  const [theme, setTheme] = useState(themes[0]);
  const [size, setSize] = useState(sizes[0]);

  useEffect(() => {
    dispatch(actions.load());
    return () => dispatch(actions.unload());
  }, []);

  const onChange = (value) => {
    dispatch(actions.filterText(value));
  };

  const onSelectView = (value) => {
    setView(value);
  };

  const onClickTheme = () => {
    let index = themes.indexOf(theme);
    const next = ++index % themes.length;
    setTheme(themes[next]);
  };

  const onClickResize = () => {
    let index = sizes.indexOf(size);
    const next = ++index % sizes.length;
    setSize(sizes[next]);
  };

  const onSelect = (id) => {
    dispatch(actions.select(id));
  };
  const onDeselect = () => {
    dispatch(actions.deselect());
  };

  return (
    <CustomProvider theme={theme}>
      <div className="App">
        <Affix>
          <InputGroup>
            <IconButton icon={<ImageIcon />} onClick={onClickTheme} />
            <IconButton icon={<ResizeIcon />} onClick={onClickResize} />
            <Input size="lg" onChange={onChange} />
            <Dropdown onSelect={onSelectView} title={view}>
              {constants.VIEWS.map((view) => (
                <Dropdown.Item key={view} eventKey={view}>
                  {view}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </InputGroup>
        </Affix>
        <View
          view={view}
          list={list}
          size={size}
          onSelect={onSelect}
          selectedId={selectedId}
        />
        <SelectedDetails
          isVisible={hasSelection}
          id={selectedId}
          text={selectedText}
          onClose={onDeselect}
          title={selectedTitle}
          codePoints={selectedCodePoints}
        />
      </div>
    </CustomProvider>
  );
}

export default App;
