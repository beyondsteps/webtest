// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/community', { useNewUrlParser: true, useUnifiedTopology: true });

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

