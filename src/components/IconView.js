import React from 'react'
import { FlexboxGrid } from 'rsuite'
import EmojiButton from './EmojiButton'

const IconView = ({ list, size }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton key={key} value={value} size={size} />
    ))}
  </FlexboxGrid>
)

export default IconView
