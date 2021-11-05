import React from "react";
import { FlexboxGrid, Button } from "rsuite";

const IconView = ({ list }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <Button key={key} size="sm" appearance="subtle">
        {value}
      </Button>
    ))}
  </FlexboxGrid>
);

export default IconView;
