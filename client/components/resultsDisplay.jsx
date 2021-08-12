import React from 'react';


const Result = (props) => {
  return (
    <div>
      <span>Here are your allergen key(s): {props.result}</span>
    </div>
  )
}

export default Result;