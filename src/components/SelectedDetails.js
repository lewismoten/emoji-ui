import React from 'react'
import {
  Panel
} from 'rsuite'

const SelectedDetails = ({ isVisible, selectedKey }) => {
  if(!isVisible) return null;
  return (<div>{selectedKey}</div>)
}

export default SelectedDetails
