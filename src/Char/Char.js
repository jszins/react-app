import React from 'react';
import './Char.css'

const char = (props) => {
  return (
    <div className="Char" onClick={props.click} >
      <p>{props.name}</p>
    </div>
  )
}

export default char;
