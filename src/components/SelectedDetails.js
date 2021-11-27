import React from 'react'
import {
  Panel,
  PanelGroup,
  Drawer
} from 'rsuite'

const SelectedDetails = ({ isVisible, id, text, onClose }) => {
  return (
    <Drawer open={isVisible} onClose={onClose} size="xs" backdrop={false}>
      <PanelGroup>
        <Panel>{id}</Panel>
        <Panel>{text}</Panel>
      </PanelGroup>
    </Drawer>
  );
}

export default SelectedDetails
