import { useReducer, useState } from "react";

import "./App.css";

function App() {
  let COUNTER_ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case COUNTER_ACTION.INCREMENT:
        return { ...state, count: state.count + 1 };
      case COUNTER_ACTION.DECREMENT:
        return { ...state, count: state.count - 1 };
      case COUNTER_ACTION.RESET:
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state, dispatch);

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}
        >
          Increment {state.count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}
        >
          Decrement {state.count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}
        >
          Reset {state.count}
        </button>
      </section>
    </>
  );
}

export default App;
