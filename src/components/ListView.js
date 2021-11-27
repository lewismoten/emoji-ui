import React from 'react'
import { FlexboxGrid } from 'rsuite'
import EmojiButton from './EmojiButton'

const ListView = ({ list, size, onSelect }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton key={key} value={`${value} ${key}`} size={size} onClick={e => onSelect(key, e)} />
    ))}
  </FlexboxGrid>
)

export default ListView
