import React from 'react';

const Smurf = (props) => {
  const smurf = props.smurf;
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
    </div>
  )
}

export default Smurf;