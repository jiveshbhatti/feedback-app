import React from 'react';
import FeedbackItem from './FeedbackItem';
function FeedbackList({list, handleDelete}) {

   

  return <div className='feedback-list'>
    
{list && (
list.map((item) =>(
    <FeedbackItem key={item.id} item ={item}
    handleDelete={handleDelete}
    ></FeedbackItem>
)))
}
  </div>;
}

export default FeedbackList;

