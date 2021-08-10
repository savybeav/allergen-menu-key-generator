const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../build')))

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`)})

module.exports = app;