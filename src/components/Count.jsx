import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleSubtract}>Restar 1</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  );
};
