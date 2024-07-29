// /components/Form2.js
import React from 'react';

const Form2 = () => {
  return (
    <form>
      <h2>Formulário 2</h2>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form2;
