import React from "react";
import css from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.messageNotification}> {message} </p>
    </div>
  );
};

export default Notification;
