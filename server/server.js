const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('/colors', (req, res) => {
  // generate random unique numbers ranging from 0 - 255^3 representing all possible color values
  // sort numbers and then transform them into hex color values
  const randomNums = new Set();
  const hexFromDecimal = (num) => '#' + num.toString(16).padStart(6, '0');
  const generateRandNum = () => Math.floor(Math.random() * 256 ** 3);
  for (let i = 0; i < 100; i++) {
    let num = generateRandNum();
    while (randomNums.has(num)) num = generateRandNum();
    randomNums.add(num);
  }
  const randomColors = [...randomNums].sort((a, b) => a - b).map((num) => hexFromDecimal(num));
  res.status(200).json(randomColors);
});

app.use('*', (req, res) => {
  res.status(400).send('Error 400: bad request');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
