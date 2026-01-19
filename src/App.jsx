import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const response = await fetch(
      "https://backend-express-xyz.onrender.com/api/hello",
    );
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Express Demo</h1>
      <button onClick={callBackend}>Call Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
