import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ values, totalFeedback, averagePercentage }) => {
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackText}>Good: {values.good} </p>
      <p className={css.feedbackText}>Neutral: {values.neutral}</p>
      <p className={css.feedbackText}>Bad: {values.bad}</p>
      <p className={css.feedbackText}>Total: {totalFeedback} </p>
      <p className={css.feedbackText}>Positive: {averagePercentage}% </p>
    </div>
  );
};

export default Feedback;
