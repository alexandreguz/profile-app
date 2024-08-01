import React from 'react';

const ApartmentRentalContract = () => {
  return (
    <form>
      <h2>Rent Apartment</h2>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default ApartmentRentalContract;

