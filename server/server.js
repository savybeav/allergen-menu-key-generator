const express = require('express');
const path = require('path');


// this object will have middleware functions for searching the allergen database
const allergenController = require('./controllers/allergenSearchController');
const PORT = 3000;
const app = express();

// handles parsing requests
app.use(express.json());

app.use('/build', express.static(path.resolve(__dirname, '../build')))

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

// route handler for GET request to /search. Then invoke searchInggredients middleware.
app.post('/search', allergenController.searchIngredients, (req, res) => {
  return res.status(200).json(res.locals.results)
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) })

module.exports = app;