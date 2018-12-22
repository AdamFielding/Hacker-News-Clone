import * as React from "react";

interface ITitleProps {
  title: string;
}

export const Title: React.FunctionComponent<ITitleProps> = (
  props
): JSX.Element => <h1>{props.title}</h1>;
