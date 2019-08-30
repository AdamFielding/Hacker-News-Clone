import * as React from "react";
import {
  Button,
  Card,
  Container,
  Header,
  List,
  Loader,
  Placeholder
} from "semantic-ui-react";
import { getStories, Story } from "../common/storyService";
import { View } from "./App";
import { StoryCard } from "./StoryCard";
import { StoryListItem } from "./StoryListItem";

const storyList = (storiesData: Story[]): (JSX.Element | null)[] =>
  storiesData.map(storyData => StoryListItem(storyData));

const storyGrid = (storiesData: Story[]): (JSX.Element | null)[] =>
  storiesData.map(storyData => StoryCard(storyData));

const getPlaceholder = (numberOfLines: number): JSX.Element[] =>
  new Array(numberOfLines).fill(1).map((el, i) => <Placeholder.Line key={i} />);

export const Stories: React.FC<Props> = ({ view }: Props) => {
  const [numberOfStories] = React.useState(10);
  const [storiesData, updateStoriesData] = React.useState();
  const [error, updateError] = React.useState();

  const refreshStories = async (numberOfStories: number): Promise<void> => {
    const storyDataRes = await getStories(numberOfStories);
    storyDataRes.success
      ? updateStoriesData(storyDataRes.data)
      : updateError(storyDataRes.error);
  };

  React.useEffect(() => {
    refreshStories(numberOfStories);
  }, [numberOfStories]);

  return (
    <Container text={view === View.list}>
      <Header
        as="h2"
        color="grey"
        textAlign={view === View.grid ? "center" : "left"}
        content="Stories"
        subheader={
          <Button
            onClick={() => refreshStories(numberOfStories)}
            content="refresh"
          />
        }
      />
      {storiesData && view === View.list && (
        <List
          animated={true}
          divided={true}
          relaxed="very"
          ordered={true}
          items={storyList(storiesData)}
        />
      )}
      {storiesData && view === View.grid && (
        <Card.Group centered={true}>{storyGrid(storiesData)}</Card.Group>
      )}
      {!storiesData && !error && (
        <Placeholder fluid={true}>
          <Placeholder.Paragraph>
            <Loader active={true}>Loading</Loader>
            {getPlaceholder(numberOfStories * 4)}
          </Placeholder.Paragraph>
        </Placeholder>
      )}
      {error && <p>{error}</p>}
    </Container>
  );
};

interface StoriesData {
  loaded: boolean;
  stories: Story[];
  error?: string;
}

interface Props {
  view: View;
}
