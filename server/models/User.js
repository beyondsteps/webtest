// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // 사용자명, 고유해야 함
  password: { type: String, required: true }, // 비밀번호
  email: { type: String, required: true, unique: true }, // 이메일, 고유해야 함
  createdAt: { type: Date, default: Date.now } // 생성 날짜, 기본값은 현재 날짜
});

module.exports = mongoose.model('User', userSchema);
