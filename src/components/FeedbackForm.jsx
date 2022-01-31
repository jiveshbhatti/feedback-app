import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from "./context/FeedbackContext";
import { useContext, useEffect } from "react";
import { set } from "mongoose";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10) 

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
 
  //! Use Effect hook being used.

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
   
   
  }, [feedbackEdit])


  const handleTextChange = (val) => {
  
    setText(val);
    setMessage("Text must be at least 10 characters");

    if (text.trim().length > 10) {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault()
  
      const newFeedback = {
          text,
          rating,
      }

      if(feedbackEdit.edit=== true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
      addFeedback(newFeedback)
      }
      setText('')
  }
  return (
    <Card>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h2>How would you rate your service with us?</h2>
    <RatingSelect select = {rating => setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={(e) => handleTextChange(e.target.value)}
            value={text}
            type="text"
            placeholder="Write a review"
          />

          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && (
          <div
            className="
          message"
          >
            {message}
          </div>
        )}
      </form>
    </Card>
  );
};

FeedbackForm.propTypes = {};

export default FeedbackForm;
