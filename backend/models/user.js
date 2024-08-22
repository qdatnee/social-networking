const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  password_hash: { type: String },
  full_name: { type: String },
  profile_picture: { type: String },
  cover_photo: { type: String },
  date_of_birth: { type: Date },
  gender: { type: String },
  bio: { type: String },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  friend_count: { type: Number }
});

// Chỉ định tên collection là "users"
module.exports = mongoose.model('User', userSchema, 'users');
