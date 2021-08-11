// declare a database that is required from models/FDAallergens (where you imported the URI to your elephantSQL)
const database = require('../models/FDAallergens');
// declare middleware object to hold all functions
const allergenController = {};

allergenController.searchIngredients = (req, res, next) => {
  // console.log('You have made it to the query!')
  // declare SQL query to search database for an ingredient
  const queryString = 'SELECT * FROM allergen_keys;'
  // call the query method on database
  database.query(queryString)
    // .then()
    .then(data => {
      res.locals.results = data.rows;
      console.log('This is res.locals.results after your database query: ', res.locals.results) // data.rows???
    })
  // if there's an error, return a status code and a descriptive message
    .then(() => next())
    .catch(err => console.log('allergenController.searchIngredients database query: ERROR: ', err))
  // else return the key of the ingredient from the database
}

allergenController.displayResults = (req, res, next) => {
  // get the input from the response?
  // search through res.locals.results for the input
  // if the input exists, add the key property to an array
  // if the input does not exists, 
}

// export the object of controller/middleware functions
module.exports = allergenController;

