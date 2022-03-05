import {FaTimes, FaEdit} from 'react-icons/fa'
import React from "react";
import { useContext } from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from '../context/FeedBackContext';

function FeedbackItem({ item }) {

  const {deleteFeedback, editFeedback}=useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'/>
      </button>
      <button onClick={()=>editFeedback(item)}className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className="text-dsiplay">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
