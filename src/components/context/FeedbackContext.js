import { createContext, useEffect, useState } from "react";

import FeedbackData from "../../data/feedbackData";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false,
  })

  useEffect(()=>{
    fetchFeedback()
  },[])

  //Fetch Feedback data
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')

    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }
  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(newFeedback),
    })
    
    const data = await response.json()
 
    

    if (window.confirm("Are you ready to submit feedback?")) {
      setFeedback([data, ...feedback]);
    }

    console.log(feedback, "all feedback");
  };

  //Delete Feedback
  const deleteFeedback = async (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }

await fetch(`/feedback/${id}`, {
      method: 'DELETE',
    })
    
  
 


  };//Set item to be updated.
  const editFeedback = async (item) => {

    
 
  
    setFeedbackEdit({
      item,
      edit:true,
    })

  }

  //update feedback
  const updateFeedback = async (id, updItem) =>{

    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })
    
    const data = await response.json()

    setFeedback(feedback.map((item)=> item.id === id? {...item, ...data}: item))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,//this is the function to set state
        feedbackEdit,//this is the actual state
        updateFeedback,
        isLoading,
        

      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
