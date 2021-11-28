import React from "react";
import PropTypes from "prop-types";

const UnicodeCode = ({ hex }) => {
  const isExtended = hex.length > 4;
  if (isExtended) {
    return (
      <span className="unicode">
        <span className="escape">\u</span>
        <span className="bracket">
          {"{"}
          <span className="code">{hex}</span>
          {"}"}
        </span>
      </span>
    );
  }
  return (
    <span className="unicode">
      <span className="escape">\u</span>
      <span className="code">{hex}</span>
    </span>
  );
};

const Hex = ({ hex }) => {
  return <span className="hex">{hex}</span>;
};
const HtmlEntity = ({ hex }) => {
  return <span className="html-entity">{hex}</span>;
};
const Decimal = ({ hex }) => {
  return <span className="decimal">{parseInt(hex, 16)}</span>;
};

const CodePoints = ({ value, format }) => {
  switch (format) {
    case "es6":
      return (
        <span className="string">
          {value.map((hex, i) => (
            <UnicodeCode key={i} hex={hex} />
          ))}
        </span>
      );
    case "hex":
      return (
        <span className="list-delimited">
          {value.map((hex, i) => (
            <Hex key={i} hex={hex} />
          ))}
        </span>
      );
    case "html":
      return (
        <span className="list-delimited">
          {value.map((hex, i) => (
            <HtmlEntity key={i} hex={hex} />
          ))}
        </span>
      );
    case "decimal":
      return (
        <span className="list-delimited">
          {value.map((hex, i) => (
            <Decimal key={i} hex={hex} />
          ))}
        </span>
      );
    default:
      return <span>{JSON.stringify(value, null, "  ")}</span>;
  }
};

CodePoints.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  format: PropTypes.string,
};

Decimal.propTypes = {
  hex: PropTypes.string,
};
Hex.propTypes = {
  hex: PropTypes.string,
};
HtmlEntity.propTypes = {
  hex: PropTypes.string,
};
UnicodeCode.propTypes = {
  hex: PropTypes.string,
};
export default CodePoints;
