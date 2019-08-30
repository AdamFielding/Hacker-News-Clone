import * as React from "react";
import { Container } from "semantic-ui-react";
import { Stories } from "./Stories";
import { Title } from "./Title";
import ViewSwitchButton from "./ViewSwitchButton";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { appReducer } from "../store/configureStore";

export const enum View {
  list,
  grid
}

export interface State {
  view: View;
}

export class App extends React.PureComponent {
  public readonly state: State = {
    view: View.list
  };

  public render(): JSX.Element {
    return (
      <Provider store={createStore(appReducer)}>
        <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
          <Title title="Hacker News Clone" />
          <ViewSwitchButton
            view={this.state.view}
            onClick={this.toggleStoryView}
          />
          <Stories view={this.state.view} />
        </Container>
      </Provider>
    );
  }

  private toggleStoryView = (view: View) => {
    this.setState({ view });
  };
}
