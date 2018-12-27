import * as React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  List,
  Loader,
  Placeholder
} from "semantic-ui-react";
import { getStories, IStory } from "../common/storyService";
import { View } from "./App";
import { StoryCard } from "./StoryCard";
import { StoryListItem } from "./StoryListItem";

export class Stories extends React.PureComponent<IProps> {
  public readonly state: IState = {
    numberOfStories: 10
  };
  public constructor(props: IProps) {
    super(props);
  }

  public async componentDidMount() {
    this.refreshStories();
  }

  public render() {
    const { view } = this.props;
    const { storiesData, error } = this.state;
    return (
      <Container text={view === View.list}>
        <Header
          as="h2"
          color="grey"
          textAlign={view === View.grid ? "center" : "left"}
          content="Stories"
          subheader={<Button onClick={this.refreshStories} content="refresh" />}
        />
        {storiesData && view === View.list && (
          <List
            animated={true}
            divided={true}
            relaxed="very"
            ordered={true}
            items={this.storyList(storiesData)}
          />
        )}
        {storiesData && view === View.grid && (
          <Card.Group centered={true}>{this.storyGrid(storiesData)}</Card.Group>
        )}
        {!storiesData && !error && (
          <Placeholder fluid={true}>
            <Placeholder.Paragraph>
              <Loader active={true}>Loading</Loader>
              {this.getPlaceholder(this.state.numberOfStories * 4)}
            </Placeholder.Paragraph>
          </Placeholder>
        )}
        {error && <p>{error}</p>}
      </Container>
    );
  }

  private refreshStories = async (): Promise<void> => {
    try {
      this.setState({
        storiesData: await getStories(this.state.numberOfStories)
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  private storyList(storiesData: IStory[]) {
    return storiesData.map(storyData => StoryListItem(storyData));
  }

  private storyGrid(storiesData: IStory[]) {
    return storiesData.map(storyData => StoryCard(storyData));
  }

  private getPlaceholder(numberOfLines: number) {
    return new Array(numberOfLines)
      .fill(1)
      .map((element, index) => <Placeholder.Line key={index} />);
  }
}

interface IState {
  storiesData?: IStory[];
  numberOfStories: number;
  error?: string;
}

interface IProps {
  view: View;
}
