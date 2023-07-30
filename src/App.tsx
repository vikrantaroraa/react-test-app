import React, { useState } from "react";
import ClickIncrease from "./components/ClickIncrease";
import HoverIncrease from "./components/HoverIncrease";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["App"]}>
      <ClickIncrease secretWord={"Apple"} />
      <HoverIncrease secretWord={"Apple"} />
    </div>
  );
}

export default App;
