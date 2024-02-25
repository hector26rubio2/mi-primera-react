import { useState } from 'react';

export const useForm = (registroInit) => {
  const [registro, setRegistro] = useState(registroInit);

  const onChangeRegister = ({ target }) => {
    const { name, value } = target;
    setRegistro({
      ...registro,
      [name]: value,
    });
  };

  return {
    ...registro,
    registro,
    onChangeRegister,
  };
};
