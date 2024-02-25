import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

const Form = () => {
  const { nombre, apellido, email, onChangeRegister } = useForm({
    nombre: '',
    apellido: '',
    email: '',
  });

  useEffect(() => {
    alert('cargo la pagina');
  }, []);
  
  return (
    <>
      <form>
        <label>
          Nombre:
          <input name="nombre" type="text" value={nombre} onChange={onChangeRegister} />
        </label>
        <br />
        <label>
          Apellido:
          <input
            name="apellido"
            type="text"
            value={apellido}
            onChange={onChangeRegister}
          />
        </label>
        <br />
        <label>
          Email:
          <input name="email" type="email" value={email} onChange={onChangeRegister} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <br />
      <p>registro: </p>
    </>
  );
};

export default Form;
