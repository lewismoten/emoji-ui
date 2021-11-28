import React from 'react'
import { Button } from 'rsuite'

const EmojiButton = ({ value, size, onClick, isSelected }) =>{
  const appearance = isSelected ? 'primary' : 'subtle';
  return (
  <Button size={size} appearance={appearance} onClick={onClick}>
    {value}
  </Button>)
}

export default EmojiButton
