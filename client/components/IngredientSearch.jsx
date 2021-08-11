import React from 'react';


const IngredientSearch = () => {
  const searchDatabase = () => {
    fetch('/search')
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => console.log('searchDatabase fetch /search: ERROR: ', err))
  };
  return (<div className="ingredientSearch">
    <span>Enter your ingredients here: </span>
    <input/>
    <button type="button" onClick={searchDatabase}>Submit</button>
  </div>
  )
};

export default IngredientSearch;