import * as React from "react";

interface IStoryProps {
  title: string;
  url: string;
  score: number;
}

export const Story: React.SFC<IStoryProps> = (props): JSX.Element => {
  const { title, url, score } = props;
  return (
    <p>
      <span>{score}: </span>
      <a href={url}>{title}</a>
    </p>
  );
};
