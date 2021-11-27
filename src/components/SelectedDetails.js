import React from 'react'
import {
  Panel,
  PanelGroup,
  Drawer,
  List,
  FlexboxGrid
} from 'rsuite'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import CodePoints from './CodePoints';

const SelectedDetails = ({ isVisible, id, text, onClose, title, codePoints }) => {
  return (
    <Drawer open={isVisible} onClose={onClose} size="xs" backdrop={false}>
      <PanelGroup>
        <Drawer.Header>
          <Drawer.Title>{title}</Drawer.Title>
        </Drawer.Header>
        <Panel className="oversized-text">{text}</Panel>
        <List hover>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>Emoji</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}>{text}</FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>Key</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}>{id}</FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>Title</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}>{title}</FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>Code Points</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}><CodePoints value={codePoints} format="decimal" /></FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>Hex Code Points</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}><CodePoints value={codePoints} format="hex" /></FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={3}>ES6 Escape Sequences</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}><CodePoints value={codePoints} format="es6" /></FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        </List>
      </PanelGroup>
    </Drawer>
  );
}

export default SelectedDetails
