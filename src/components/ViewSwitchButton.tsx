import * as React from "react";
import { Button, Container } from "semantic-ui-react";
import { View } from "./App";

interface Props {
  view: View;
  onClick: (view: View) => void | undefined;
}

const ViewSwitchButton: React.FC<Props> = ({ view, onClick }): JSX.Element => (
  <Container text={true}>
    <Button.Group fluid={true}>
      <Button positive={view === View.list} onClick={() => onClick(View.list)}>
        List
      </Button>
      <Button.Or />
      <Button positive={view === View.grid} onClick={() => onClick(View.grid)}>
        Grid
      </Button>
    </Button.Group>
  </Container>
);

export default ViewSwitchButton;
