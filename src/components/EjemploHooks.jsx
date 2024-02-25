import { useState, useEffect, useCallback, useMemo, memo, useLayoutEffect, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que 'count' cambie.
    console.log('El valor de count cambió:', count);
  }, [count]); // Se especifica 'count' como una dependencia

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export const TimerComponent = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      // Esta función se ejecuta al desmontar el componente
      clearInterval(intervalId);
    };
  }, []); // No hay dependencias, solo se ejecuta una vez al montar

  return (
    <div>
      <p>Tiempo transcurrido: {seconds} segundos</p>
    </div>
  );
};

export const ExampleComponent2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Este efecto se ejecutará después de cada renderizado
    console.log('Efecto ejecutado');
  }); // Sin dependencias, se ejecuta en cada renderizado

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export const ComponenteConFetch = () => {
  const { data, loading } = useFetch('https://api.example.com/data');

  return loading ? <ExampleComponent2 /> : <div>data</div>;
};


export const useRefExamplo = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Enfoque en el campo de entrada al cargar el componente
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Enfocar</button>
    </div>
  );
};


export const useLayoutEffectExamplo = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Obtener el ancho del contenedor al cargar el componente
    const containerWidth = document.getElementById('container').offsetWidth;
    setWidth(containerWidth);
  }, []);

  return (
    <div id="container">
      Ancho del contenedor: {width}px
    </div>
  );
};

// eslint-disable-next-line react/display-name
export const MemoizedComponent = memo(({ prop }) => {
  console.log('Renderización de MemoizedComponent');
  return (
    <div>
      Prop: {prop}
    </div>
  );
});


export const useMemoExampleComponent = ({ a, b }) => {
  const result = useMemo(() => {
    console.log('Cálculo costoso realizado');
    return a * b;
  }, [a, b]);

  return <div>Resultado: {result}</div>;
};

export const useCallbackExampleComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // La función se recrea solo si 'count' cambia

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export const useCallbackEComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback((amount) => {
    setCount((prevCount) => prevCount + amount);
  }, []); // No hay dependencias, la función no se recrea

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => handleIncrement(1)}>Incrementar</button>
      <button onClick={() => handleIncrement(-1)}>Decrementar</button>
    </div>
  );
};