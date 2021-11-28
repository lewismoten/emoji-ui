import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, FlexboxGrid } from 'rsuite';

const GROW = 3;
const SHRINK = 1;
const MAX_HEIGHT = 256;
const MAX_WIDTH = 256;

const TextImage = ({ text }) => {
  const canvasRef = useRef(null);
  const frameRequest = useRef();

  const [fontSize, setFontSize] = useState(MAX_HEIGHT * 0.75);

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
    const textHeight = size.fontBoundingBoxAscent + size.fontBoundingBoxDescent;

    const isTooBig = size.width > width || textHeight > height;
    const isTooSmall = size.width + GROW < width && textHeight + GROW < height;

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

  return (
    <FlexboxGrid justify="space-around">
      <FlexboxGrid.Item>
        <Container>
          <canvas ref={canvasRef} width={MAX_WIDTH} height={MAX_HEIGHT} />
        </Container>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

TextImage.propTypes = {
  text: PropTypes.string,
};

export default TextImage;
