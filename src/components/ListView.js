import React from "react";
import { FlexboxGrid, Button } from "rsuite";

const ListView = ({ list }) => (
  <FlexboxGrid>
    {list.map(({ key, value }) => (
      <Button key={key} size="sm" appearance="subtle">
        {`${value} ${key}`}
      </Button>
    ))}
  </FlexboxGrid>
);

export default ListView;
