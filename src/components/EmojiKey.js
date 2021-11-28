import React from 'react';
import PropTypes from 'prop-types';

const EmojiKey = ({ id }) => (
  <span className="object">
    emoji<span className="delimiter">.</span>
    <span className="key">{id}</span>
  </span>
);

EmojiKey.propTypes = {
  id: PropTypes.string,
};

export default EmojiKey;
