import React from "react";

const CarDetails = ({ car }) => {
  if (!car) {
    return <p>Car not found</p>;
  }

  const { name, image, description } = car;

  return (
    <div>
      <h1>{name} Details</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default CarDetails;
