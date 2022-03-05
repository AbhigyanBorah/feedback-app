import {FaTimes} from 'react-icons/fa'
import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item, handleDelete }) {


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
      </button>
      <div className="text-dsiplay">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
