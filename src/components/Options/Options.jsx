import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <ul className={css.listOptionsButton}>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => updateFeedback("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => updateFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.optionsButton}
            onClick={() => updateFeedback("bad")}
            type="button"
          >
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button
              className={css.optionsButton}
              type="button"
              onClick={() => resetFeedback()}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
