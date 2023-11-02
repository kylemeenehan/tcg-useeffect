import { useState, useEffect } from 'react';


function App() {
  console.log("rendering");

  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

    setTimeout(() => {
      setSecondCount((secondCount) => secondCount + 1);
    }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div>
      <h1>Count: I've rendered {count} times!</h1>;
      <h1>Second Count: I've rendered {secondCount} times!</h1>;
    </div>
  )
}

export default App;
