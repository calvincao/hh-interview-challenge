const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

app.get('/colors', (req, res) => {
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
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.listen(port, () => console.log(`listening on port ${port}.`));
