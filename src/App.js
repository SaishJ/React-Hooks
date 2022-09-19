import "./App.css";
import React, { useReducer } from "react";
import ContextHook from "./components/ContextHook";
import Counter from "./components/Counter";
import CounterFour from "./components/CounterFour";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import EffectCounter from "./components/EffectCounter";
import EffectFetch from "./components/EffectFetch";
import FetchData2 from "./components/FetchData2";
import IntervalHook from "./components/IntervalHook";
import MouseContainer from "./components/MouseContainer";
import MouseEvent from "./components/MouseEvent";
import ReducerOne from "./components/ReducerOne";
import ReducerTwo from "./components/ReducerTwo";
import ReducerThree from "./components/ReducerThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ParentComponent from "./components/ParentComponent";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// useReducer with useContext
export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      {/* <EffectCounter /> */}
      {/* <MouseEvent /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHook /> */}
      {/* <EffectFetch /> */}
      {/* <FetchData2 /> */}
      {/* <UserContext.Provider value={"Saish"}>
        <ChannelContext.Provider value={"SJ"}>
          <ContextHook />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerOne /> */}
      {/* <ReducerTwo /> */}
      {/* <ReducerThree /> */}
      {/* <CountContext.Provider
        value={{ countContext: count, dispatchContext: dispatch }}
      >
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
