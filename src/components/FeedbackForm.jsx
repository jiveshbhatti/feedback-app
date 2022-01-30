import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
const FeedbackForm = (props) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (val) => {
  
    setText(val);
    setMessage("Text must be at least 10 characters");

    if (text.trim().length > 10) {
      setBtnDisabled(false);
      setMessage(null);
    }
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>

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
