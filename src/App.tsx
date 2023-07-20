import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  return (
    <div className={styles["App"]}>
      <button onClick={() => setApiResponse("Hello World!")}>
        Fetch Express Server
      </button>
      <div className={styles["response-output"]}>{apiResponse}</div>
    </div>
  );
}

export default App;
