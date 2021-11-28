import React from 'react'
import { Grid, Row, Col } from 'rsuite'
import CodePoints from './CodePoints'
import EmojiButton from './EmojiButton'

const DetailView = ({ list, size, onSelect, selectedId }) => (
  <Grid>
    {list.map(({ key, value, text, encodedValue, codePoints }) => {
      const onClick = () => onSelect(key);
      const isSelected = selectedId === key;
      return (
      <Row key={key} onClick={onClick}>
        <Col xs={1}>
          <EmojiButton value={value} size={size} onClick={onClick} isSelected={isSelected} />
        </Col>
        <Col xs={6}><span className='object'>emoji<span className='delimiter'>.</span><span className='key'>{key}</span></span></Col>
        <Col xs={9}><CodePoints value={codePoints} format="es6" /></Col>
        <Col xs={8}><span className='comment'>{text}</span></Col>
      </Row>
    )})}
  </Grid>
)

export default DetailView
