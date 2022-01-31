import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  const addFeedback = (feedbackObj) => {
    feedbackObj.id = uuidv4();

    if (window.confirm("Are you ready to submit feedback?")) {
      setFeedback([feedbackObj, ...feedback]);
    }

    console.log(feedback, "all feedback");
  };

  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
