// ./src/app/car/1/page.js
"use client";
import React, { useState } from 'react';
import LoginForm from '@/app/buy/login/page';
import styles from './CarDetails0.module.css'; // Import the CSS module

const CarDetails = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isBuyingAllowed, setIsBuyingAllowed] = useState(false);

  const carData = {
    name: 'HYUNDAI Grand-i10-Nios',
    // Replace the following placeholders with actual car details
    image: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Grand-i10-Nios/Exterior/pc/Ext_1120x600.jpg',
    description: 'Description for HYUNDAI Grand-i10-Nios',
    specifications: {
      engine: '1196 CC Petrol Engine/CNG',
      transmission: 'Manual / Automatic',
      mileage: '20.35 kmpl',
      power: '83 PS',
      torque: '114 Nm',
      price: '5.6 lakh',
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
        name: 'Era',
        price: '5.6 lakh',
        BharticsPrice:'5.50 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Magna',
        price: '6.7 lakh',
        BharticsPrice:'6.10 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Sportz',
        price: '7.3 lakh',
        BharticsPrice:'7.00 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Sportz DT',
        price: '7.5 lakh',
        BharticsPrice:'7.30 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Magna AMT',
        price: '7.4 lakh',
        BharticsPrice:'7.00 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Sportz Executive',
        price: '7.9 lakh',
        BharticsPrice:'7.50 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Sportz Executive AMT',
        price: '8.1 lakh',
        BharticsPrice:'7.90 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Asta',
        price: '8.5 lakh',
        BharticsPrice:'8.20 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
      {
        name: 'Asta AMT',
        price: '9.1 lakh',
        BharticsPrice:'8.90 Lakh',
          buy:<form action="/buy/login" class="inline">
          <button class="float-left submit-button" >BUY NOW</button>
      </form>
      },
    ],
  };

  const compareCars = [
    {
      name: 'Tata Tiago',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2022/Aug/tiago-new-1_600x400.jpg',
      specifications: {
        engine: '1199 CC Petrol Engine',
        transmission: 'Manual / Automatic',
        mileage: '18 kmpl',
        power: '95 PS',
        torque: '120 Nm',
        price: '5.8 lakh',
      },
    },
    {
      name: 'Maruti Swift',
      // Add actual details for comparison
      image: 'https://media.zigcdn.com/media/model/2023/Feb/swift_600x400.jpg',
      specifications: {
        engine: 'Maruti Swift',
        transmission: 'Manual / Automatic',
        mileage: '22 kmpl',
        power: '110 PS',
        torque: '150 Nm',
        price: '5.99 lakh',
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

      <form action="/buy/login" class="inline" >
    <button class="float-left submit-button" > BUY NOW </button>
</form>
    </div>
  );
};

export default CarDetails;
