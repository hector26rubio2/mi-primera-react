import { Card } from './Card';
import Counter from './Counter';
import { useLayoutEffectExamplo } from './EjemploHooks';
import Form from './Form';

const cards = [
  {
    id: 1,
    description: 'ejemplo 1',
    footer: 'footer 1',
    title: 'title 1',
    urlProducto: 'https://www.google.com/',
  },
  {
    id: 2,
    description: 'ejemplo 2',
    footer: 'footer 2',
    title: 'title 2',
    urlProducto: 'https://www.example.com/',
  },
  {
    id: 3,
    description: 'ejemplo 3',
    footer: 'footer 3',
    // title: 'title 3',
    urlProducto: 'https://www.example.org/',
  },
];

const App = () => {
  return (
    <>
      <h1>Formulario</h1>
      <hr />

      <hr />
      <useLayoutEffectExamplo />
    </>
  );
};

export default App;
