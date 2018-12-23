import * as React from "react";
import { Button, Container } from "semantic-ui-react";
import { View } from "./App";

interface IProps {
  view: View;
  onClick: (view: View) => void | undefined;
}

const ViewSwitchButton = (props: IProps) => (
  <Container text={true}>
    <Button.Group fluid={true}>
      <Button
        positive={props.view === View.list}
        onClick={() => props.onClick(View.list)}
      >
        List
      </Button>
      <Button.Or />
      <Button
        positive={props.view === View.grid}
        onClick={() => props.onClick(View.grid)}
      >
        Grid
      </Button>
    </Button.Group>
  </Container>
);

export default ViewSwitchButton;
