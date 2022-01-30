import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';
const FeedbackForm = (props) => {

    const [text, setText] = useState('')

    const handleTextChange = (val) => {
        console.log(val)

        setText(val)
    }
  return <Card>

      <form>
          <h2>How would you rate your service with us?</h2>

          <div className="input-group">
              <input onChange={e => handleTextChange(e.target.value)}
              value={
                  text
              } type="text" placeholder='Write a review' />
              <Button type="submit" version='primary' >
                  Send
              </Button>
          </div>
      </form>
  </Card>
};

FeedbackForm.propTypes = {};

export default FeedbackForm;
