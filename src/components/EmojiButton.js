import React from 'react'
import { Button } from 'rsuite'

const EmojiButton = ({ value, size }) => (
  <Button size={size} appearance='subtle'>
    {value}
  </Button>)

export default EmojiButton
