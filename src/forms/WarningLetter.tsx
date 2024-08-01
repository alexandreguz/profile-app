import React from 'react';

const WarningLetter = () => {
  return (
    <form>
      <h2>Warning</h2>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default WarningLetter;

