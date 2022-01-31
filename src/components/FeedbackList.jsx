import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence  } from "framer-motion"
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
function FeedbackList() {

   const {feedback } = useContext(FeedbackContext)

  return <div className='feedback-list'>
    
{feedback && (
feedback.map((item) =>(
    <FeedbackItem key={item.id} item ={item}
    
    ></FeedbackItem>
)))
}
  </div>;
}

export default FeedbackList;

