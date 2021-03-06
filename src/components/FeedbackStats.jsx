import React from 'react';

import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

 

    let average = feedback.reduce((accumulator, currentVal) => {
      console.log(accumulator,'accum',currentVal)
    return accumulator + currentVal.rating
}, 0)/feedback.length

average = average.toFixed(1).replace()

console.log(average)
  return <div className='feedback-stats'>
<h4>{feedback.length} Reviews</h4>
<h4>Average Rating: {isNaN(average)? 0 :average}</h4>

  </div>;
  
}



export default FeedbackStats;
