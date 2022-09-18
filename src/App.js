import "./App.css";
import React from "react";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
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
      <UserContext.Provider value={"Saish"}>
        <ChannelContext.Provider value={"SJ"}>
          <ContextHook />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
