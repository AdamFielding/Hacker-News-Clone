import * as React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import { baseHackerNewsUrl } from "../common/api";

interface ITitleProps {
  title: string;
}

export const Title: React.FunctionComponent<ITitleProps> = (
  props
): JSX.Element => (
  <>
    <Container text={true}>
      <Header as="h1" color="orange">
        {props.title}
        <Header.Subheader>
          A worse version of your favourite website{" "}
          <a href={baseHackerNewsUrl}>(Let me fix that for you)</a>.
        </Header.Subheader>
      </Header>
    </Container>
    <Divider />
  </>
);
