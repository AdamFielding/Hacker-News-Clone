import * as React from "react";
import { Card } from "semantic-ui-react";
import { Story } from "../common/storyService";

export const StoryCard: React.FC<Story> = ({ title, text }: Story) => (
  <Card>
    <Card.Content header={title} />
    <Card.Content description={text} />
    <Card.Content description={text} />
  </Card>
);

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
