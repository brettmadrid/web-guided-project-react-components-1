/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from "react";

const Playground = (props) => {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState(null);

  if (spinnerOn) {
    return (
      <div className="container">
        Loading...
        <button onClick={(e) => setSpinnerOn(false)}>turn spinner off</button>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h3>Battlezone for Player {props.cohort}</h3>
        <div>the count is {count}</div>
        <button onClick={(e) => setCount(count + 1)}>increase count</button>
        <button onClick={(e) => setSpinnerOn(true)}>turn spinner on</button>
        <div>
          {weapon
            ? `The current weapon is ${weapon}`
            : "No weapon selected yet"}
        </div>

        <button onClick={(e) => setWeapon("rock")}>rock</button>
        <button onClick={(e) => setWeapon("paper")}>paper</button>
        <button onClick={(e) => setWeapon("scissors")}>scissors</button>
      </div>
    </>
  );
};

export default Playground;
