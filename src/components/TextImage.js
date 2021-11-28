import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const GROW = 3;
const SHRINK = 1;

const TextImage = ({ text }) => {
  const canvasRef = useRef(null);
  const frameRequest = useRef();

  const [fontSize, setFontSize] = useState(128);

  const onFrame = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const { offsetWidth: width, offsetHeight: height } = canvas;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontSize}px sans-serif`;

    const size = ctx.measureText(text);
    const isTooBig = size.width > width;
    const isTooSmall = size.width + GROW < width;
    if (isTooBig) {
      setFontSize(fontSize - SHRINK);
    } else if (isTooSmall) {
      setFontSize(fontSize + GROW);
    }

    ctx.fillText(text, width / 2, height / 2);
    frameRequest.current = requestAnimationFrame(onFrame);
  };

  const onFrameCallback = useCallback(onFrame, [fontSize, onFrame]);
  useEffect(() => {
    frameRequest.current = requestAnimationFrame(onFrameCallback);
    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
  }, [onFrame]);

  useEffect(() => {
    console.log(text, fontSize);
  }, [fontSize, text]);

  return (
    <div style={{ minWidth: '256px', minHeight: '256px' }}>
      <canvas ref={canvasRef} width="256" height="300" />
    </div>
  );
};

TextImage.propTypes = {
  text: PropTypes.string,
};

export default TextImage;
