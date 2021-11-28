import React from "react";
import PropTypes from "prop-types";
import { Button } from "rsuite";

const EmojiButton = ({ value, size, onClick, isSelected }) => {
  const appearance = isSelected ? "primary" : "subtle";
  return (
    <Button size={size} appearance={appearance} onClick={onClick}>
      {value}
    </Button>
  );
};

EmojiButton.propTypes = {
  value: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default EmojiButton;
