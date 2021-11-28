import React from 'react'
import { FlexboxGrid } from 'rsuite'
import EmojiButton from './EmojiButton'

const IconView = ({ list, size, onSelect, selectedId }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton key={key} value={value} size={size} onClick={() => onSelect(key)} isSelected={key === selectedId} />
    ))}
  </FlexboxGrid>
)

export default IconView
