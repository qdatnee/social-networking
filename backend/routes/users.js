const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Đảm bảo tên model trùng với tên file và tên collection

// GET tất cả người dùng
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET một người dùng theo ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST tạo một người dùng mới
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone, // Sửa location thành phone nếu muốn lưu số điện thoại
    password_hash: req.body.password_hash,
    full_name: req.body.full_name,
    profile_picture: req.body.profile_picture,
    cover_photo: req.body.cover_photo,
    date_of_birth: req.body.date_of_birth,
    gender: req.body.gender,
    bio: req.body.bio,
    friends: req.body.friends,
    friend_count: req.body.friend_count
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT cập nhật thông tin người dùng
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Cập nhật các trường của người dùng
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE xóa người dùng
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
