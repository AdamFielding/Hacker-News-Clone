import * as React from "react";
import {
  Card,
  Container,
  Grid,
  Header,
  List,
  Loader,
  Placeholder
} from "semantic-ui-react";
import { getStories, IStory } from "../api";
import { StoryCard } from "./StoryCard";
import { StoryListItem } from "./StoryListItem";

export class Stories extends React.PureComponent {
  public readonly state: IState = {
    numberOfStories: 10,
    view: View.grid
  };

  public async componentDidMount() {
    try {
      this.setState({
        storiesData: await getStories(this.state.numberOfStories)
      });
    } catch {
      this.setState({ error: "failed to load content" });
    }
  }

  public render() {
    const { storiesData, error, view } = this.state;
    return (
      <Container text={view === View.list}>
        <Header
          as="h2"
          color="grey"
          textAlign={view === View.grid ? "center" : "left"}
        >
          Stories
        </Header>
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
        {!storiesData && (
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
  view: View;
}

enum View {
  list,
  grid
}
