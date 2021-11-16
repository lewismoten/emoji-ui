import React from 'react'
import { Grid, Row, Col } from 'rsuite'
import UnicodeCode from './UnicodeCode'
import EmojiButton from './EmojiButton'

const DetailView = ({ list, size }) => (
  <Grid>
    {list.map(({ key, value, text, encodedValue, codePoints }) => (
      <Row key={key}>
        <Col xs={1}>
          <EmojiButton value={value} size={size} />
        </Col>
        <Col xs={6}><span className='object'>emoji<span className='delimiter'>.</span><span className='key'>{key}</span></span></Col>
        <Col xs={9}>
          <span className='string'>
            {codePoints.map((hex, i) => <UnicodeCode key={i} hex={hex} />)}
          </span>
        </Col>
        <Col xs={8}><span className='comment'>{text}</span></Col>
      </Row>
    ))}
  </Grid>
)

export default DetailView
