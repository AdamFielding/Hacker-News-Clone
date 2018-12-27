import * as React from "react";
import { Card } from "semantic-ui-react";
import { getHackerNewsUrl } from "../common/api";

interface IStoryProps {
  id: number;
  title: string;
  score: number;
  url?: string;
  text?: string;
}

export const StoryCard: React.SFC<IStoryProps> = (props): JSX.Element => {
  const { id, title, url, score, text } = props;
  return (
    <Card>
      <Card.Content header={title} />
      <Card.Content description={text} />
      <Card.Content description={text} />
    </Card>

    // <List.Item key={id}>
    //   <List.Content>
    //     <List.Header as={"a"} href={url || getHackerNewsUrl(id)}>
    //       {title}
    //     </List.Header>
    //     <List.Description>
    //       Score: {score}
    //       <br />
    //       <a href={getHackerNewsUrl(id)}>View comments</a>
    //     </List.Description>
    //     <List.Description content={text} />
    //   </List.Content>
    // </List.Item>
  );
};
