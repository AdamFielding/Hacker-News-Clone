import * as React from "react";
import { Title } from "./Title";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export const App: React.SFC<IHelloProps> = ({
  compiler,
  framework
}): JSX.Element => (
  <>
    <Title title="Hacker News Clone" />
    <h1>
      Here's the app, using {compiler} and {framework}.
    </h1>
  </>
);
