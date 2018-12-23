import * as React from "react";
import { Dimmer, List, Loader } from "semantic-ui-react";
import { getStories, IStory } from "../api";
import { Story } from "./Story";

export class Stories extends React.PureComponent {
  public readonly state: IState = {
    numberOfStories: 10
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
    const { storiesData, error } = this.state;
    if (storiesData) {
      return (
        <List
          animated={true}
          divided={true}
          relaxed="very"
          ordered={true}
          items={this.stories(storiesData)}
        />
      );
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return (
        <Dimmer active={true}>
          <Loader />
        </Dimmer>
      );
    }
  }

  private stories(storiesData: IStory[]) {
    return storiesData.map(storyData => Story(storyData));
  }
}

interface IState {
  storiesData?: IStory[];
  numberOfStories: number;
  error?: string;
}
