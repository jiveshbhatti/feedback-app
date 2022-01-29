import React from 'react';
import FeedbackItem from './FeedbackItem';
function FeedbackList({list}) {

   

  return <div className='feedback-list'>
    
{list && (
list.map((item,idx) =>(
    <FeedbackItem key={idx} item ={item}></FeedbackItem>
)))
}
  </div>;
}

export default FeedbackList;

