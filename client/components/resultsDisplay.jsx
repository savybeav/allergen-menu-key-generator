import React from 'react';


const Result = (props) => {
  return (
    <div id="results">
      <span>Here are your allergen key: {props.result}</span>
    </div>
  )
}

export default Result;