const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Thay đổi URI kết nối với cơ sở dữ liệu MongoDB
mongoose.connect('mongodb+srv://lequangquocdat12c2:Lqqd1906^^@socail-networking.t7pu7.mongodb.net/Social-Networking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Import router
const userRoutes = require('./routes/users');

// Sử dụng router
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
