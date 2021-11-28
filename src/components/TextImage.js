import React, { useRef, useEffect, useCallback } from 'react';
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
    ctx.font = 'Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(text, 0, 0);
    frameRequest.current = requestAnimationFrame(onFrame);
  };

  const onFrameCallback = () => useCallback(onFrame, [onFrame, text]);

  useEffect(() => {
    frameRequest.current = requestAnimationFrame(onFrameCallback);
    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
  }, [onFrameCallback]);

  return <canvas refs={canvasRef} />;
};

TextImage.propTypes = {
  text: PropTypes.string,
};

export default TextImage;
