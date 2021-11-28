import React from 'react'
import { FlexboxGrid } from 'rsuite'
import EmojiButton from './EmojiButton'

const IconView = ({ list, size, onSelect }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton key={key} value={value} size={size} onClick={() => onSelect(key)} />
    ))}
  </FlexboxGrid>
)

export default IconView
