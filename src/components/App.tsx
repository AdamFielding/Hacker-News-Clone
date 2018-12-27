import * as React from "react";
import { Container, Header } from "semantic-ui-react";
import { Stories } from "./Stories";
import { Title } from "./Title";
import ViewSwitchButton from "./ViewSwitchButton";

export interface IState {
  view: View;
}

export class App extends React.PureComponent {
  public readonly state: IState = {
    view: View.list
  };

  public render() {
    return (
      <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
        <Title title="Hacker News Clone" />
        <ViewSwitchButton
          view={this.state.view}
          onClick={this.toggleStoryView}
        />
        <Stories view={this.state.view} />
      </Container>
    );
  }

  private toggleStoryView = (view: View) => {
    this.setState({ view });
  };
}

export const enum View {
  list,
  grid
}
