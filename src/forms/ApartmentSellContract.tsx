import React from 'react';

const ApartmentSellContract = () => {
  return (
    <form>
      <h2>Sell Apartment</h2>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default ApartmentSellContract;

