import React from "react";
import { Grid, Row, Col, Panel, Button } from "rsuite";

const DetailView = ({ list }) => (
  <Grid>
    {list.map(({ key, value, text, encodedValue }) => (
      <Row key={key}>
        <Col xs={2}>
          <Button size="sm" appearance="subtle">
            {value}
          </Button>
        </Col>
        <Col xs={8}>{key}</Col>
        <Col xs={8}>{text}</Col>
        <Col xs={4}>{encodedValue}</Col>
      </Row>
    ))}
  </Grid>
);

export default DetailView;
