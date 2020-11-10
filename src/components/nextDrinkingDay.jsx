import React, { useState } from "react";
import { format, addDays } from "date-fns";

export default function NextDrinkingDay() {
  const [maxDrinkingDays, setMaxDrinkingDays] = useState(50);
  const [drinkingDaysSoFar, setDrinkingDaysSoFar] = useState(44);

  function handleMaxDrinkingDaysChange(delta) {
    setMaxDrinkingDays(maxDrinkingDays + delta);
  }

  function handleDrinkingDaysSoFarChange(delta) {
    setDrinkingDaysSoFar(drinkingDaysSoFar + delta);
  }

  const nextDrinkDay = Math.ceil(
    (366 * (drinkingDaysSoFar + 1)) / maxDrinkingDays
  );
  const nextDate = addDays(new Date(2020, 0, 1), nextDrinkDay);

  return (
    <>
      <h1 className="text-center">
        <span className="small">Your next drinking day is </span> <br />
        {format(nextDate, "do MMM yyyy")} <br />
        🍺🍺🍺🍺🍺
      </h1>

      <p>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleMaxDrinkingDaysChange(1)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={drinkingDaysSoFar >= maxDrinkingDays}
          onClick={() => handleMaxDrinkingDaysChange(-1)}
        >
          -
        </button>
        {maxDrinkingDays} max drinking days per year
      </p>
      <p>
        <button
          className="btn btn-primary m-2"
          disabled={drinkingDaysSoFar >= maxDrinkingDays}
          onClick={() => handleDrinkingDaysSoFarChange(1)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleDrinkingDaysSoFarChange(-1)}
        >
          -
        </button>
        {drinkingDaysSoFar} days drinking so far
      </p>
    </>
  );
}
