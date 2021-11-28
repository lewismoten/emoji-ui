import React from 'react';
import PropTypes from 'prop-types';
import { FlexboxGrid } from 'rsuite';
import EmojiButton from './EmojiButton';

const ListView = ({ list, size, onSelect, selectedId }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <EmojiButton
        key={key}
        value={`${value} ${key}`}
        size={size}
        onClick={() => onSelect(key)}
        isSelected={selectedId === key}
      />
    ))}
  </FlexboxGrid>
);

ListView.propTypes = {
  list: PropTypes.array,
  size: PropTypes.string,
  onSelect: PropTypes.func,
  selectedId: PropTypes.string,
};
export default ListView;
