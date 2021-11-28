import React from 'react'
import {
  List,
  FlexboxGrid
} from 'rsuite'
import CodePoints from './CodePoints'
import EmojiButton from './EmojiButton'

const DetailView = ({ list, size, onSelect, selectedId }) => (
  <List hover>
    {list.map(({ key, value, text, encodedValue, codePoints }) => {
      const onClick = () => onSelect(key);
      const isSelected = selectedId === key;

      return (
        <List.Item key={key} onClick={onClick}>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={1}>
              <EmojiButton
                value={value}
                size={size}
                onClick={onClick}
                isSelected={isSelected}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              <span className='object'>emoji<span className='delimiter'>.</span><span className='key'>{key}</span></span>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={9}>
              <CodePoints value={codePoints} format="es6" />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <span className='comment'>{text}</span>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
    )})}
  </List>
)

export default DetailView
