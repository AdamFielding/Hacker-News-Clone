import * as React from "react";
import { Header } from "semantic-ui-react";

interface ITitleProps {
  title: string;
}

export const Title: React.FunctionComponent<ITitleProps> = (
  props
): JSX.Element => (
  <Header as="h1" dividing={true}>
    {props.title}
  </Header>
);
