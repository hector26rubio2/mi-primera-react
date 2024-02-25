export const ClickEventExample = () => {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

export const InputChangeExample = () => {
  const handleChange = (event) => {
    console.log('Nuevo valor:', event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export const FormSubmitExample = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export const HoverExample = () => {
  const handleMouseOver = () => {
    console.log('Mouse sobre el elemento');
  };

  const handleMouseOut = () => {
    console.log('Mouse fuera del elemento');
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Pasa el ratón sobre este elemento
    </div>
  );
};

