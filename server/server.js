const express = require('express');
const path = require('path');

// this object will have middleware functions for searching the allergen database
const allergenController = require('./controllers/allergenSearchController');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/build', express.static(path.resolve(__dirname, '../../build')))

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})


// route handler for GET request to /search. Then invoke searchInggredients middleware.
// app.get('/search', allergenController.searchIngredients, (req, res) => {
//   return res.status(200).json({})
// })

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) })

module.exports = app;