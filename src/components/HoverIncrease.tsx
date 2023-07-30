import withCounter from "./hoc/withCounter";
import { useState } from "react";

function HoverIncrease({ name, counter, incrementCounter }: any) {
  const [fontSize, setFontSize] = useState(10);
  return (
    <div style={{ border: "2px dotted black", margin: "5px", padding: "10px" }}>
      {/*This time, instead of listening to clicks,*/}
      {/*Listen to hover events instead*/}
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p>
      <p>value of name prop: {name}</p>
      <p>counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}
export default withCounter(HoverIncrease, 4);
