import React from "react";

import Button from "../../UI/Button/Button";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <Button onClick={deleteHandler}>Remove Goal</Button>
    </li>
  );
};

export default CourseGoalItem;
