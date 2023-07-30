import withCounter from "./hoc/withCounter";
import { useState } from "react";

function ClickIncrease({ name, counter, incrementCounter, secretWord }: any) {
  const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
  console.log("ye hai secret word: ", secretWord);

  return (
    <div style={{ border: "2px dotted black", margin: "5px", padding: "10px" }}>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      {/*Set the font size of this text to the fontSize variable.*/}
      {/*Furthermore, display its value as well.*/}
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      <p>value of name prop: {name}</p>
      <p>counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}
export default withCounter(ClickIncrease, 10);
