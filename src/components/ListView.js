import React from 'react'
import { FlexboxGrid } from 'rsuite'
import EmojiButton from './EmojiButton'

const ListView = ({ list, size }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton key={key} value={`${value} ${key}`} size={size} />
    ))}
  </FlexboxGrid>
)

export default ListView
