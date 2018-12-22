import * as React from "react";
import { getTopStory, IStory } from "../api";

export class Stories extends React.Component {
  public state: IState = {};

  public async componentDidMount() {
    try {
      const test = await getTopStory();
      this.setState({ story: test });
    } catch {
      this.setState({ error: "failed to load content" });
    }
  }

  public render(): JSX.Element {
    if (this.state.story) {
      return (
        <p>
          <span>{this.state.story.score}: </span>
          <a href={this.state.story.url}>{this.state.story.title}</a>
        </p>
      );
    } else if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else {
      return <p>Loading</p>;
    }
  }
}

interface IState {
  story?: IStory;
  error?: string;
}
