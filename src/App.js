import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  return (
    <>
      <h1>{time.toLocaleString()}</h1>
      <button onClick={() => setTime(new Date())}>Up</button>
      {console.log(time)}
    </>
  );
};

export default App;
