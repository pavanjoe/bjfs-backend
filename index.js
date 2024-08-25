const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());



const userId = "john_doe_17091999";  // Replace with your own

// POST Method
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid input' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
  const highestLowercaseAlphabet = alphabets.filter(char => char === char.toLowerCase()).sort().pop();

  res.json({
    is_success: true,
    user_id: userId,
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  });
});

// GET Method
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
