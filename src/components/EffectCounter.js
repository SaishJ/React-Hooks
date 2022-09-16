import React, { useState, useEffect } from "react";

function EffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating DOM");
    document.title = `Clicked ${count} times`;
  }, [count]);

  /* To conditionally run effects specify the second parameter. Second parameter is array of value the effects depends on.
  The value not change between renders the effects simply not run. */

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default EffectCounter;

/*
useEffect:- useeffect Hook perform side effects in functional components. It is a replacement for 
componentDidMount, componentDidUpdate, componentWillUnmount.
example of side effects are:- fetching data, directly updating a dom, and timmers.
useEffect runs after every render. 
*/
