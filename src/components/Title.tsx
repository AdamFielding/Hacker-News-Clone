import * as React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import { baseHackerNewsUrl } from "../common/api";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }): JSX.Element => (
  <>
    <Container text={true}>
      <Header as="h1" color="orange">
        {title}
        <Header.Subheader>
          A worse version of your favourite website{" "}
          <a href={baseHackerNewsUrl}>(Let me fix that for you)</a>.
        </Header.Subheader>
      </Header>
    </Container>
    <Divider />
  </>
);
