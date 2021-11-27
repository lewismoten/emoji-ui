import React from 'react'

const UnicodeCode = ({ hex }) => {
  const isExtended = hex.length > 4
  if (isExtended) {
    return <span className='unicode'><span className='escape'>\u</span><span className='bracket'>{'{'}<span className='code'>{hex}</span>{'}'}</span></span>
  }
  return <span className='unicode'><span className='escape'>\u</span><span className='code'>{hex}</span></span>
}

const Hex = ({ hex }) => {
  return <span className="hex">{hex}</span>
}

const CodePoints = ({ value, format }) => {

  switch(format) {
    case "es6":
      return (
        <span className='string'>
          {value.map((hex, i) => <UnicodeCode key={i} hex={hex} />)}
        </span>
      );
    case "hex":
      return (
        <span className="list-delimited">
          {value.map((hex, i, a) => <Hex key={i} hex={hex} isLast={i === a.length - 1} />)}
        </span>
      );
    default:
      return <span>{JSON.stringify(value, null, '  ')}</span>
  }
}

export default CodePoints
