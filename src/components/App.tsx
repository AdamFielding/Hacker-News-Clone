import * as React from "react";
import { Container, Header } from "semantic-ui-react";
import { Stories } from "./Stories";
import { Title } from "./Title";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export const App: React.SFC<IHelloProps> = ({
  compiler,
  framework
}): JSX.Element => (
  <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
    <Title title="Hacker News Clone" />
    <Stories />
  </Container>
);
