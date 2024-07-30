import React, { useEffect, useState } from "react";

export const RangeSlider = ({ step, min, max }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const handleMinChange = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    // the new min value is the value from the event.
    // it should not exceed the current max value!
    const newMinVal = Math.min(value, maxValue - step);
    setMinValue(newMinVal);
    console.log(value)

  };

  useEffect(()=>{
    console.log(minValue,"minValue")
  })

  const handleMaxChange = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    // the new max value is the value from the event.
    // it must not be less than the current min value!
    const newMaxVal = Math.max(value, minValue + step);
    setMaxValue(newMaxVal);
  };
  return (
    <div>
      <input
        type="range"
        value={minValue}
        min={min}
        max={max}
        step={step}
        onChange={handleMinChange}
      />
    </div>
  );
};
