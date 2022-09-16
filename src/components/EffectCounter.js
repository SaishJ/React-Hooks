import React, { useState, useEffect } from "react";

function EffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
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
