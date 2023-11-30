// ./src/app/car/1/page.js
"use client";
import React, { useState } from 'react';
import LoginForm from '@/app/buy/login/page';
import styles from './CarDetails0.module.css'; // Import the CSS module

const CarDetails = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isBuyingAllowed, setIsBuyingAllowed] = useState(false);

  const carData = {
    name: 'HYUNDAI VENUE',
    // Replace the following placeholders with actual car details
    image: 'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/Venue/venue-exterior-front++red+(1).jpg',
    description: 'Description for HYUNDAI VENUE',
    specifications: {
      engine: '998 - 1493 CC',
      transmission: '5-Speed Manual Transmission',
      mileage: '18 - 20 Kmpl ',
      power: '113.98bhp@4000rpm ',
      torque: '250Nm@1500-2750rpm',
      price:'Rs. 7.89 - 9.83 Lakh'
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
          name: 'E',
          price: '7.6 lakh',
          BharticsPrice:'7.20 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'E Plus',
          price: '8.5 lakh',
          BharticsPrice:'8.10 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'S',
          price: '9.3 lakh',
          BharticsPrice:'8.90 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'SX',
          price: '10.3 lakh',
          BharticsPrice:'9.80 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
        {
          name: 'SX (O)',
          price: '11.7 lakh',
          BharticsPrice:'11.50 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
        },
      ],
  };

  const compareCars = [
    {
      name: 'Renault Kiger',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2023/May/kiger_600x400.jpg',
      specifications: {
        engine: '999 CC ',
        transmission: '6-Speed Automatic Transmission',
        mileage: '18.24 - 20.5 Kmpl',
        power: '95 PS',
        torque: '120 Nm',
        price:'6.49 - 11.22 Lakh',
        
      },
    },
    {
      name: 'KIA SONET',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2023/Mar/sonet_gt_360x240.jpg',
      specifications: {
        engine: '998 - 1493 CC',
        transmission: '7-Speed Dual-Clutch Transmission',
        mileage: '18 kmpl',
        power: '110 PS',
        torque: '150 Nm',
        price:'7.79 - 14.89 Lakh'
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
            <th>BharticsPrice</th>
            <th>BUY</th>
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
