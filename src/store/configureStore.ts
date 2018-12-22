import { Action, ActionCreator, createStore } from "redux";

// action
export const enum CounterTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

const initialCounterState: ICounterState = {
  counter: 0
};

const counterApp = (
  state: ICounterState = initialCounterState,
  { type }: CounterAction
): ICounterState => {
  switch (type) {
    case CounterTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case CounterTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
  }
  return state;
};

// action creator
export const incrementCount: ActionCreator<IncrementCounterAction> = () => ({
  type: CounterTypes.INCREMENT
});

export const decrementCount: ActionCreator<IDecrementCounterAction> = () => ({
  type: CounterTypes.DECREMENT
});

type CounterAction = IncrementCounterAction | IDecrementCounterAction;

interface IncrementCounterAction extends Action {
  type: CounterTypes.INCREMENT;
}

interface IDecrementCounterAction extends Action {
  type: CounterTypes.DECREMENT;
}

interface ICounterState {
  readonly counter: number;
}
