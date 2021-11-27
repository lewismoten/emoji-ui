import React from 'react'
import {
  Panel
} from 'rsuite'

const SelectedDetails = ({ isVisible, id, text }) => {
  if(!isVisible) return null;
  return (<div>{id}:{text}</div>)
}

export default SelectedDetails
