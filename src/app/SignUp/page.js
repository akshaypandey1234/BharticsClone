// src/app/pages/signup.js
"use client";
// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import '../SignUp/Signup.css';


const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/api/register', {
          name,
          email,
          address,
          password,
        });
  
        if (response.status === 201) {
          alert('User registered successfully');
        } else if (response.status === 400) {
          const data = response.data;
          alert(`Registration failed: ${data.error}`);
        } else {
          alert('Registration failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again later.');
      }
    };
  
    return (
      <div className="signup-form-container">
        <h1>Signup for Bhartics</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={handleAddressChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  };
  
  export default SignupPage;




