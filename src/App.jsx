import { useState, useEffect } from "react";

import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import css from "./App.module.css";

function App() {
  const stateReviews = JSON.parse(localStorage.getItem("values")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [values, setValues] = useState(stateReviews);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const { good, bad, neutral } = values;

  const totalFeedback = good + neutral + bad;

  const averagePercentage =
    totalFeedback > 0
      ? Math.round(((good + neutral) / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={(feedbackType) => updateFeedback(feedbackType)}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          averagePercentage={averagePercentage}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
}

export default App;
