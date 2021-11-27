import React from 'react'
import {
  Panel,
  PanelGroup,
  Drawer
} from 'rsuite'

const SelectedDetails = ({ isVisible, id, text, onClose, title }) => {
  return (
    <Drawer open={isVisible} onClose={onClose} size="xs" backdrop={false}>
      <PanelGroup>
        <Panel>{title}</Panel>
        <Panel>{id}</Panel>
        <Panel className="oversized-text">{text}</Panel>
      </PanelGroup>
    </Drawer>
  );
}

export default SelectedDetails
