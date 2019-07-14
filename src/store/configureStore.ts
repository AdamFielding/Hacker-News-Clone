import { Action, ActionCreator, createStore } from "redux";

// action
export const enum CounterTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

const initialCounterState: CounterState = {
  counter: 0
};

const counterApp = (
  state: CounterState = initialCounterState,
  { type }: CounterAction
): CounterState => {
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

export const decrementCount: ActionCreator<DecrementCounterAction> = () => ({
  type: CounterTypes.DECREMENT
});

type CounterAction = IncrementCounterAction | DecrementCounterAction;

interface IncrementCounterAction extends Action {
  type: CounterTypes.INCREMENT;
}

interface DecrementCounterAction extends Action {
  type: CounterTypes.DECREMENT;
}

interface CounterState {
  readonly counter: number;
}
