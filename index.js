const express = require('express');
const crouter = require('./crouter.js')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use('/opg', crouter)

app.listen(3000, () => {
  console.log('server started');
});