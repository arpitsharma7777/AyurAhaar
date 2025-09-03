const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./db');

const app = express();
const admin = require('./firebase-admin');

app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on : http://localhost:${port}`);
});
