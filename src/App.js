import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CustomProvider,
  InputGroup,
  Input,
  Dropdown,
  Affix,
  IconButton,
  Panel
} from 'rsuite'
import ImageIcon from '@rsuite/icons/Image'
import ResizeIcon from '@rsuite/icons/Resize'
import * as actions from './state/search/actions'
import * as selectors from './state/search/selectors'
import * as constants from './utils/constants'
import View from './components/View'
import SelectedDetails from './components/SelectedDetails'

function App () {
  const dispatch = useDispatch()
  const list = useSelector(selectors.list)
  const selectedKey = useSelector(selectors.selectedKey)
  const isKeySelected = useSelector(selectors.isKeySelected)
  const [view, setView] = useState(constants.VIEW_ICONS)
  const themes = ['dark', 'high-contrast', 'light']
  const sizes = ['xs', 'sm', 'md', 'lg']
  const [theme, setTheme] = useState(themes[0])
  const [size, setSize] = useState(sizes[0])

  useEffect(() => {
    dispatch(actions.load())
    return () => dispatch(actions.unload())
  }, [])

  const onChange = value => {
    dispatch(actions.filterText(value))
  }

  const onSelectView = (value, e) => {
    setView(value)
  }

  const onClickTheme = (value, e) => {
    let index = themes.indexOf(theme)
    const next = ++index % themes.length
    setTheme(themes[next])
  }

  const onClickResize = (value, e) => {
    let index = sizes.indexOf(size)
    const next = ++index % sizes.length
    setSize(sizes[next])
  }

  const onSelect = (value) => {
    dispatch(actions.selectKey(value))
  };

  return (
    <CustomProvider theme={theme}>
      <div className='App'>
        <Affix>
          <InputGroup>
            <IconButton icon={<ImageIcon />} onClick={onClickTheme} />
            <IconButton icon={<ResizeIcon />} onClick={onClickResize} />
            <Input size='lg' onChange={onChange} />
            <Dropdown onSelect={onSelectView} title={view}>
              {constants.VIEWS.map(view => (
                <Dropdown.Item key={view} eventKey={view}>
                  {view}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </InputGroup>
          <SelectedDetails isVisible={isKeySelected} selectedKey={selectedKey} />
        </Affix>
        <View view={view} list={list} size={size} onSelect={onSelect} />
      </div>
    </CustomProvider>
  )
}

export default App
