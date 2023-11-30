// src/app/server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/User')
const cors = require('cors');

const app = express();
const PORT = 3005;

app.use(cors());

// mongoose.connect('mongodb://localhost:27017/BharticsClone', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://localhost:27017/BharticsClone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        email,
        password: hashedPassword,
      });
  
      await user.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('User registration error:', error);
      res.status(500).json({ error: 'Registration failed. Please try again later.' });
    }
  });
  app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  });

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send('User not found');
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).send('Invalid password');
  }

  res.send('Login successful');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
