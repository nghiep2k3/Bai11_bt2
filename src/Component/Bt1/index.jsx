import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timmer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 5000);
    return () => clearInterval(timmer);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{time}</p>
    </div>
  );
}

export default App;
