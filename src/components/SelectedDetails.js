import React from 'react'
import {
  Panel,
  PanelGroup,
  Drawer
} from 'rsuite'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline'

const SelectedDetails = ({ isVisible, id, text, onClose, title }) => {
  return (
    <Drawer open={isVisible} onClose={onClose} size="xs" backdrop={false}>
      <PanelGroup>
        <Drawer.Header>
          <Drawer.Title>{title}</Drawer.Title>
        </Drawer.Header>
        <Panel>{id}</Panel>
        <Panel className="oversized-text">{text}</Panel>
      </PanelGroup>
    </Drawer>
  );
}

export default SelectedDetails
