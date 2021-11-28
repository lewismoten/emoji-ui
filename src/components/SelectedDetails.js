import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PanelGroup, Drawer, List, FlexboxGrid, IconButton } from 'rsuite';
import PageEndIcon from '@rsuite/icons/PageEnd';
import PageTopIcon from '@rsuite/icons/PageTop';
import CodePoints from './CodePoints';
import TextImage from './TextImage';
import EmojiKey from './EmojiKey';
import EmojiButton from './EmojiButton';

const SelectedDetails = ({
  isVisible,
  id,
  text,
  onClose,
  title,
  codePoints,
  size,
}) => {
  const [position, setPosition] = useState('right');
  const isRight = position === 'right';
  const toggleIcon = isRight ? <PageEndIcon /> : <PageTopIcon />;

  const onTogglePosition = () => {
    setPosition(isRight ? 'left' : 'right');
  };

  const propCol = 6;
  const valueCol = 18;

  return (
    <Drawer
      open={isVisible}
      onClose={onClose}
      size="xs"
      backdrop={false}
      placement={position}
    >
      <PanelGroup>
        <Drawer.Header>
          <Drawer.Title>{title}</Drawer.Title>
          <Drawer.Actions>
            <IconButton icon={toggleIcon} onClick={onTogglePosition} />
          </Drawer.Actions>
        </Drawer.Header>
        <TextImage text={text} />
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={23}>
            <List hover bordered>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>Emoji</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <EmojiButton size={size} value={text} />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>Key</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <EmojiKey id={id} />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>Title</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    {title}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>
                    Code Points
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <CodePoints value={codePoints} format="decimal" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>Hex</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <CodePoints value={codePoints} format="hex" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>ES6</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <CodePoints value={codePoints} format="es6" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={propCol}>HTML</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={valueCol}>
                    <CodePoints value={codePoints} format="html" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            </List>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </PanelGroup>
    </Drawer>
  );
};

SelectedDetails.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
  codePoints: PropTypes.arrayOf(PropTypes.string),
};
export default SelectedDetails;
