import React from 'react';

const UnicodeCode = ({hex}) => {
  const isExtended = hex.length > 4;
  if(isExtended) {
    return <span className="unicode"><span className="escape">\u</span><span className="bracket">{`{`}<span className="code">{hex}</span>{`}`}</span></span>;
  }
  return <span className="unicode"><span className="escape">\u</span><span className="code">{hex}</span></span>;
}

export default UnicodeCode;
