import React from 'react'

const validation = (props) => {
  if(props.length < 5)
    return <p>Text too short</p>
  else
    return <p>Text long enough</p>
};

export default validation;
