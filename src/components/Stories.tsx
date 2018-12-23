import * as React from "react";
import { getStories, getTopStory, IStory } from "../api";
import { Story } from "./Story";

export class Stories extends React.Component {
  public state: IState = {};

  public async componentDidMount() {
    try {
      this.setState({ storiesData: await getStories(10) });
    } catch {
      this.setState({ error: "failed to load content" });
    }
  }

  public render() {
    const { storiesData, error } = this.state;
    if (storiesData) {
      return this.stories(storiesData);
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return <p>Loading</p>;
    }
  }

  private stories(storiesData: IStory[]) {
    return storiesData.map(story => Story(story));
  }
}

interface IState {
  storiesData?: IStory[];
  error?: string;
}
