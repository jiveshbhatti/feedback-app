import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../../data/feedbackData";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false,
  })

  //Add Feedback
  const addFeedback = (feedbackObj) => {
    feedbackObj.id = uuidv4();

    if (window.confirm("Are you ready to submit feedback?")) {
      setFeedback([feedbackObj, ...feedback]);
    }

    console.log(feedback, "all feedback");
  };

  //Delete Feedback
  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };//Set item to be updated.
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true,
    })

  }

  //update feedback
  const updateFeedback = (id, updItem) =>{
    setFeedback(feedback.map((item)=> item.id === id? {...item, ...updItem}: item))
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

      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
