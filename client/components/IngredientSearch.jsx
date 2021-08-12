import React from 'react';
import Result from './resultsDisplay.jsx';


const Search = (props) => {
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
        // store the result of the query in an variable
        const keyResult = response[0];
        // if the result is an empty array, send a message back that says there are no allergens!
        if(keyResult === undefined) props.update('This ingredient is not on the FDA list of Top 8 Allergens...')
        // else create update the state with the results and display them below the Result component
        props.update(keyResult.key);
        // console.log('Props: ', props)
      })
      .catch(err => console.log('searchDatabase in IngredientSearch fetch /search: ERROR: ', err))
  };
  return (
  <div className="ingredientSearch">
    <span>Enter your ingredient(s) here: </span>
    <input id="input"/>
    <button type="button" onClick={searchDatabase}>Submit</button>
    { props.showComponent ? <Result result={props.result} /> : null }
    {/* <Result result={props.result}/> */}
  </div>
  )
};

export default Search;