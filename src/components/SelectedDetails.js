import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PanelGroup, Drawer, List, FlexboxGrid, IconButton } from 'rsuite';
import PageEndIcon from '@rsuite/icons/PageEnd';
import PageTopIcon from '@rsuite/icons/PageTop';
import CodePoints from './CodePoints';
import TextImage from './TextImage';
import EmojiKey from './EmojiKey';

const SelectedDetails = ({
  isVisible,
  id,
  text,
  onClose,
  title,
  codePoints,
}) => {
  const [position, setPosition] = useState('right');
  const isRight = position === 'right';
  const toggleIcon = isRight ? <PageEndIcon /> : <PageTopIcon />;

  const onTogglePosition = () => {
    setPosition(isRight ? 'left' : 'right');
  };

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
                  <FlexboxGrid.Item colspan={3}>Emoji</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>{text}</FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={3}>Key</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>
                    <EmojiKey id={id} />
                  </FlexboxGrid.Item>
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
                  <FlexboxGrid.Item colspan={6}>
                    <CodePoints value={codePoints} format="decimal" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={3}>Hex</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>
                    <CodePoints value={codePoints} format="hex" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={3}>ES6</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>
                    <CodePoints value={codePoints} format="es6" />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
              <List.Item>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={3}>HTML</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>
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
  title: PropTypes.string,
  codePoints: PropTypes.arrayOf(PropTypes.string),
};
export default SelectedDetails;
