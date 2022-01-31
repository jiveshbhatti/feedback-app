import React from 'react';
import spinner from '../assets/isLoading.gif'

const Spinner = () => {
  return (<img src={spinner} alt='Loading...' style={{width: '100px', margin: 'auto', dispaly: 'block'}}></img>
  )
};

export default Spinner;
