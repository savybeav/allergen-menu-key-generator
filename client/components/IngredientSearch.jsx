import React from 'react';
// import resultsDisplay from './resultsDisplay.jsx';


const Search = (props) => {
  // console.log('this is props on the Search Component: ', props.result)
  const searchDatabase = () => {
    // create a variable to store the input in order to pass it along to the POST request
    const ingredient = document.getElementById('input')
    fetch(`/search`, {
      method: 'POST',
      body: JSON.stringify({input: ingredient.value}),
      headers: { 'Content-Type': 'application/json',}
    })
      .then(data => data.json())
      .then(response => {
        // store the result of the query in an array
        const keyResult = Array.from(response)
        // console.log(result)
        console.log('this is printing from with the fetch request: ', props.result)
        props.updateResult(keyResult)
        // if the result is an empty array, send a message back that says there are no allergens!
        // else create a new component with the results and display them below the div
      })
      .catch(err => console.log('searchDatabase in IngredientSearch fetch /search: ERROR: ', err))
  };
  return (
  <div className="ingredientSearch">
    <span>Enter your ingredient here: </span>
    <input id="input"/>
    <button type="button" onClick={searchDatabase}>Submit</button>
  </div>
  )
};

export default Search;