import React, { useState } from "react";

function CounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </div>
      </form>
      <h2>FirstName: {name.firstName}</h2>
      <h2>LastName: {name.lastName}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
}

export default CounterThree;
