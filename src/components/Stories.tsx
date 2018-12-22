import * as React from "react";
import { getTopStory, IStory } from "../api";

export class Stories extends React.Component {
  public state: IState = {};

  public async componentDidMount() {
    const test = await getTopStory();
    this.setState({ story: test });
  }

  public render(): JSX.Element {
    if (this.state.story) {
      return (
        <p>
          <span>{this.state.story.score}: </span>
          <a href={this.state.story.url}>{this.state.story.title}</a>
        </p>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

interface IState {
  story?: IStory;
}
