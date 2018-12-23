import * as React from "react";
import { List } from "semantic-ui-react";

interface IStoryProps {
  title: string;
  score: number;
  url?: string;
  text?: string;
}

export const Story: React.SFC<IStoryProps> = (props): JSX.Element => {
  const { title, url, score, text } = props;
  return (
    <List.Item>
      <List.Content>
        <List.Header as="a" href={url}>
          {title}
        </List.Header>
        <List.Description as="a">Score: {score}</List.Description>
        {text && (
          <p>
            <small>{text}</small>
          </p>
        )}
      </List.Content>
    </List.Item>
  );
};
