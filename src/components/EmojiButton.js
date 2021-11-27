import React from 'react'
import { Button } from 'rsuite'

const EmojiButton = ({ value, size, onClick }) => (
  <Button size={size} appearance='subtle' onClick={onClick}>
    {value}
  </Button>)

export default EmojiButton
