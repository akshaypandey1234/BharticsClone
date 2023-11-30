// ./src/app/car/1/page.js
"use client";
import React, { useState } from 'react';
import LoginForm from '@/app/buy/login/page';
import styles from './CarDetails0.module.css'; // Import the CSS module

const CarDetails = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isBuyingAllowed, setIsBuyingAllowed] = useState(false);

  const carData = {
    name: 'HYUNDAI i20',
    // Replace the following placeholders with actual car details
    image: 'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/i20/Hyundai-i20-premium-hatchback-Exterior-Mid-Front-1-revised.jpg',
    description: 'Description for HYUNDAI i20',
    specifications: {
      engine: '1197 CC Petrol Engine',
      transmission: 'Manual / Automatic',
      mileage: '16-20 kmpl',
      power: '83 PS',
      torque: '114 Nm',
      price:'6.99 - 11.16 Lakh'
    },
    features: [
      'Touchscreen infotainment system with Apple CarPlay and Android Auto',
      'Wireless charging pad',
      'Sunroof',
      'Rearview camera with parking sensors',
      'Multiple airbags for safety',
    ],
    models: [
        {
          name: 'Hyundai i20 Magna',
          price: '6.76 Lakh',
          BharticsPrice:'6.50 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'Hyundai i20 Sportz',
          price: '7.66 Lakh',
          BharticsPrice:'7.30 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'Hyundai i20 Asta',
          price: '9.09 Lakh',
          BharticsPrice:'8.50 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'Hyundai i20 Asta N Line',
          price: '10.54 Lakh',
          BharticsPrice:'10.30 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'Hyundai i20 Turbo',
          price: '11.16 Lakh',
          BharticsPrice:'11.00 LAKH',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
      ],
  };
  

  const compareCars = [
    {
      name: 'Maruti Baleno',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2023/Feb/baleno_600x400.jpg',
      specifications: {
        engine: '1197 CC Petrol Engine',
        transmission: 'Manual / Automatic',
        mileage: '22.35 kmpl',
        power: '95 PS',
        torque: '120 Nm',
        price: '6.61 - 9.88 Lakh',
        buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        
      },
    },
    {
      name: 'Tata Altroz',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2023/Jul/altroz-3_600x400.jpg',
      specifications: {
        engine: '1198 - 1497 CC',
        transmission: 'Manual / Automatic',
        mileage: '18.05 - 23.64 Kmpl',
        power: '110 PS',
        torque: '150 Nm',
        price:'6.59 - 10.73 Lakh',
        buy:'buynow',
        
      },
    },
    // Add more cars for comparison
  ];

//   const handleBuyClick = () => {
//     // ... (same as before)
//   };

//   const handleLogin = (username, password) => {
//     // ... (same as before)
//   };

//   const renderLoginForm = () => {
//     // ... (same as before)
//   };

  return (
    <div className={styles.container}>
      <h1>{carData.name}</h1>
      <img src={carData.image} alt={carData.name} className={styles.carImage} />
      <p>{carData.description}</p>

      <h2>Specifications</h2>
      <ul className={styles.specList}>
        {Object.entries(carData.specifications).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <h2>Features</h2>
      <ul className={styles.featureList}>
        {carData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Models and Prices</h2>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th>Model</th>
            <th>Price</th>
            <th>WhyBuyFromUs</th>
            <th>buy</th>
            
          </tr>
        </thead>
        <tbody>
          {carData.models.map((model, index) => (
            <tr key={index}>
              <td>{model.name}</td>
              <td>{model.price}</td>
              <td>{model.BharticsPrice}</td>
              <td>{model.buy}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Compare with Other Cars</h2>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th>Car</th>
            <th>Image</th>
            <th>Engine</th>
            <th>Transmission</th>
            <th>Mileage</th>
            <th>Power</th>
            <th>Torque</th>
            <th>price</th>
            <th>BUY</th>
          </tr>
        </thead>
        <tbody>
          {[carData, ...compareCars].map((car, index) => (
            <tr key={index}>
              <td>{car.name}</td>
              <td>
                <img src={car.image} alt={car.name} className={styles.compareCarImage} />
              </td>
              <td>{car.specifications.engine}</td>
              <td>{car.specifications.transmission}</td>
              <td>{car.specifications.mileage}</td>
              <td>{car.specifications.power}</td>
              <td>{car.specifications.torque}</td>
              <td>{car.specifications.price}</td>
              <td> 
    
</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button onClick={handleBuyClick} className={styles.buyButton}>
        Buy
      </button>

      {isBuyingAllowed && renderLoginForm()} */}

      <form action="/buy/login" class="inline">
    <button class="float-left submit-button" >BUY NOW</button>
</form>
    </div>
  );
};

export default CarDetails;
