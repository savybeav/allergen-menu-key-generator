import React from 'react';


const Result = (props) => {
  const keyResults = [];



  return (
    <div>
      <span>Here are your allergen key(s): {props.result}</span>
    </div>
  )
}

export default Result;