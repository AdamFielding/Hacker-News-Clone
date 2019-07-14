import * as React from "react";
import { List } from "semantic-ui-react";
import { getHackerNewsUrl } from "../common/api";
import { Story } from "../common/storyService";

export const StoryListItem: React.SFC<Story> = (props): JSX.Element => {
  const { id, title, url, score, text, domain } = props;
  return (
    <List.Item key={id}>
      <List.Content>
        <List.Header
          color="grey"
          size="small"
          as={"a"}
          href={url || getHackerNewsUrl(id)}
        >
          {title}
        </List.Header>
        <List.Description as={"a"} href={url}>
          {domain}
        </List.Description>
        <List.Description>
          Score: {score}
          <br />
          <a href={getHackerNewsUrl(id)}>View comments</a>
        </List.Description>
        <List.Description content={text} />
      </List.Content>
    </List.Item>
  );
};
