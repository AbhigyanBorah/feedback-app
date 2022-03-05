import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList(props) {
  if (!props.feedback || props.feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {props.feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={props.handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /* return (
    <div className='feedback-list'>
        {props.feedback.map((item)=>(
            <FeedbackItem 
            key={item.id} 
            item={item}
            handleDelete={props.handleDelete}
            />
        ))}
    </div>
  ) */
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
