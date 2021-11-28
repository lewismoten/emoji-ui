import React from 'react';
import PropTypes from 'prop-types';
import { FlexboxGrid } from 'rsuite';
import EmojiButton from './EmojiButton';

const IconView = ({ list, size, onSelect, selectedId }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton
        key={key}
        value={value}
        size={size}
        onClick={() => onSelect(key)}
        isSelected={key === selectedId}
      />
    ))}
  </FlexboxGrid>
);

IconView.propTypes = {
  list: PropTypes.array,
  size: PropTypes.string,
  onSelect: PropTypes.func,
  selectedId: PropTypes.string,
};

export default IconView;
