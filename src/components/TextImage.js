import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextImage = ({ text }) => {
  const canvasRef = useRef(null);
  const frameRequest = useRef();

  const onFrame = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const { offsetWidth: width, offsetHeight: height } = canvas;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    console.log({ width, height });

    ctx.font = `${height / 1.5}px sans-serif`;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2, width);
    frameRequest.current = requestAnimationFrame(onFrame);
  };

  useEffect(() => {
    frameRequest.current = requestAnimationFrame(onFrame);
    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
  }, [onFrame]);

  return (
    <div style={{ minWidth: '256px', minHeight: '256px' }}>
      <canvas ref={canvasRef} width="256" height="256" />
    </div>
  );
};

TextImage.propTypes = {
  text: PropTypes.string,
};

export default TextImage;
