const express = require('express');
const dotenv = require('dotenv');
const connectToDB = require('./config/connectDB.js');
const cors = require('cors');

dotenv.config();
connectToDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
