import React from 'react';
import Smurf from './Smurf.js';

const SmurfList = (props) => {
  console.log(props.smurfs);
  return (
    <div>
    {
      props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />
      })
    }
    </div>
  )
}

export default SmurfList;