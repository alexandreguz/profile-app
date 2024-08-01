import React from 'react';

const EmployeeWorkContract = () => {
  return (
    <form>
      <h2>Employee Contract</h2>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default EmployeeWorkContract;

