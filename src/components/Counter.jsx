import { useState } from 'react';

const Counter = () => {
  const [contador, setContador] = useState(0); // [state, setState
  const changeValues = (value) => {

    setContador(contador + value);
  };
  const reset = (event) => {
    console.log(event);
    setContador(0);
  };
  return (
    <>
      <h2>Contador</h2>

      <p>{contador}</p>

      <button style={{ margin: '5px' }} onClick={() => changeValues(-1)}>
        -
      </button>
      <button style={{ margin: '5px' }} onClick={reset}>
        reset
      </button>
      <button style={{ margin: '5px' }} onClick={() => changeValues(1)}>
        +
      </button>
    </>
  );
};

export default Counter;
