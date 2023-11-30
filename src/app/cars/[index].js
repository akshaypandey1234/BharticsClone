// src/app/cars/[index].js
'use client';
import React from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';


const CarDetails = () => {
  const router = useRouter();
  const { index } = router.query;

  // Ensure index is a valid number
  const carIndex = parseInt(index, 10);

  // Check if the index is valid and within the range of cars
  if (isNaN(carIndex) || carIndex < 0 || carIndex >= cars.length) {
    return <p>Car not found</p>;
  }

  const car = cars[carIndex];

  return (
    <div>
      <h1>{car.name} Details</h1>
      <img src={car.image} alt={car.name} />
      <p>{car.description}</p>
    </div>
  );
};




const cars = [
  {
    name: 'HYUNDAI i20',
    image: 'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/i20/Hyundai-i20-premium-hatchback-Exterior-Mid-Front-1-revised.jpg',
    description: 'Description for HYUNDAI i20',
  },
  {
    name: 'HYUNDAI VENUE',
    image: 'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/Venue/venue-exterior-front++red+(1).jpg',
    description: 'Description for HYUNDAI VENUE',
  },
  {
    name: 'Hyundai Nios i10',
    image: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Grand-i10-Nios/Exterior/pc/Ext_1120x600.jpg',
    description: 'Description for Hyundai Nios i10',
  },
];


export default CarDetails;
