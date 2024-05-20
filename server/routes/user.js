// server/routes/user.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // 비밀번호 암호화를 위한 bcrypt 패키지
const User = require('../models/User');

// 사용자 등록
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// 사용자 로그인
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'Login successful' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
