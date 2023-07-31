import React, { useState } from "react";
import styles from "../App.module.css";

function NetlifyFunctions() {
  const [apiResponse, setApiResponse] = useState("Initialized Value");

  const getData = async () => {
    const response = await fetch("/.netlify/functions/hello-world");
    const data = await response.json();
    setApiResponse(JSON.stringify(data));
    console.log("data returned from hello-wolld.js:", data);
  };

  const getDataFromExpressServer = async () => {
    const response = await fetch("/.netlify/functions/express-server/hello");
    const data = await response.json();
    setApiResponse(JSON.stringify(data));
    console.log("data returned from express-server.js:", data);
  };

  const getApiKeyFromExpressServer = async () => {
    const response = await fetch(
      "/.netlify/functions/express-server/get-api-key"
    );
    const data = await response.json();
    setApiResponse(JSON.stringify(data));
    console.log("api key from express-server.js:", data);
  };

  return (
    <div className={styles["App"]}>
      <button onClick={getData}>Fetch Normal Function</button>
      <button onClick={getDataFromExpressServer}>Fetch Express Server</button>
      <button onClick={getApiKeyFromExpressServer}>
        Fetch Api Key - Express Server
      </button>
      <div className={styles["response-output"]}>{apiResponse}</div>
    </div>
  );
}

export default NetlifyFunctions;
