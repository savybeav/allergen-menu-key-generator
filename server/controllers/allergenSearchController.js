// declare a database that is required from models/FDAallergens (where you imported the URI to your elephantSQL)
const database = require('../models/FDAallergens');
// declare middleware object to hold all functions
const allergenController = {};

allergenController.searchIngredients = (req, res, next) => {
  // declare SQL query to search database for an ingredient
  // call the query method on database
  // if there's an error, return a status code and a descriptive message
  // else return the key of the ingredient from the database
}

// export the object of controller/middleware functions
module.exports = allergenController;

