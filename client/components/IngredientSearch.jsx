import React from 'react';
import resultsDisplay from './resultsDisplay.jsx';


const IngredientSearch = () => {
  const searchDatabase = () => {
    const ingredient = document.getElementById('input')

    fetch('/search')
      .then(data => data.json())
      .then(response => {
        const result = Array.from(response)
        
        console.log(ingredient.value)
      })
      .catch(err => console.log('searchDatabase in IngredientSearch fetch /search: ERROR: ', err))
  };
  return (
  <div className="ingredientSearch">
    <span>Enter your ingredients here: </span>
    <input id="input"/>
    <button type="button" onClick={searchDatabase}>Submit</button>
  </div>
  )
};

export default IngredientSearch;