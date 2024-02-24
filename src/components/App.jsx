import { Card } from './Card';

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
  const action = (message) => {
    alert(message);
  };
  return (
    <>
      <h1 className="harri">Artículos</h1>

      <hr />

      <hr />

      {cards.map((card) => (
        <Card key={card.id} {...card} action={action} />
      ))}
    </>
  );
};

export default App;
