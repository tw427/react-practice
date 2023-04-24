import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:

  // componentDidMount() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }
  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }
  
  // Is the same as:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App;
