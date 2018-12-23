import * as React from "react";

interface IStoryProps {
  title: string;
  score: number;
  url?: string;
  text?: string;
}

export const Story: React.SFC<IStoryProps> = (props): JSX.Element => {
  const { title, url, score, text } = props;
  return (
    <>
      <h4>
        <span>{score}: </span>
        <a href={url}>{title}</a>
      </h4>
      {text && <p>{text}</p>}
    </>
  );
};
