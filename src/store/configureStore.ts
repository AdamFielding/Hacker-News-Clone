import { Action, ActionCreator, combineReducers } from "redux";
import { StoryRaw } from "../common/api";

// action
export const enum StoriesTypes {
  REFRESH = "REFRESH"
}

export const enum NumberOfStoriesTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  SET = "SET"
}

const initialState: State = {
  numberOfStories: 10,
  stories: []
};

const stories = (
  state: State = initialState,
  { type }: StoriesAction
): State => {
  switch (type) {
    case StoriesTypes.REFRESH:
      return { ...state, stories: [] };
    default:
      return state;
  }
};

const numberOfStories = (
  state: State = initialState,
  action: NumberOfStoriesAction
): State => {
  switch (action.type) {
    case NumberOfStoriesTypes.INCREMENT:
      return { ...state, numberOfStories: state.numberOfStories + 1 };
    case NumberOfStoriesTypes.DECREMENT:
      return { ...state, numberOfStories: state.numberOfStories - 1 };
    case NumberOfStoriesTypes.SET:
      return { ...state, numberOfStories: action.number };
    default:
      return state;
  }
};

export const appReducer = combineReducers({ stories, numberOfStories });

// action creator
export const refreshStories: ActionCreator<RefreshStoriesAction> = () => ({
  type: StoriesTypes.REFRESH
});

export const incrementNumberOfStories: ActionCreator<
  IncrementNumberOfStoriesAction
> = () => ({
  type: NumberOfStoriesTypes.INCREMENT
});
export const decrementNumberOfStories: ActionCreator<
  DecrementNumberOfStoriesAction
> = () => ({
  type: NumberOfStoriesTypes.DECREMENT
});
export const setNumberOfStories: ActionCreator<SetNumberOfStoriesAction> = (
  number: number
) => ({
  type: NumberOfStoriesTypes.SET,
  number: number
});

type StoriesAction = RefreshStoriesAction;
type NumberOfStoriesAction =
  | IncrementNumberOfStoriesAction
  | DecrementNumberOfStoriesAction
  | SetNumberOfStoriesAction;

interface RefreshStoriesAction extends Action {
  type: StoriesTypes.REFRESH;
}

interface IncrementNumberOfStoriesAction extends Action {
  type: NumberOfStoriesTypes.INCREMENT;
}
interface DecrementNumberOfStoriesAction extends Action {
  type: NumberOfStoriesTypes.DECREMENT;
}
interface SetNumberOfStoriesAction extends Action {
  type: NumberOfStoriesTypes.SET;
  number: number;
}

interface State {
  readonly numberOfStories: number;
  readonly stories: StoryRaw[];
}
