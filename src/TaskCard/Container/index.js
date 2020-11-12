import React, { useState } from "react";

import { TaskCard } from "../Component";

const TaskCardContainer = ({ task }) => {
  const [isChecked, setCheck] = useState(true);

  const onHandleChange = (e) => {
    let paragraph = e.target.parentNode.parentNode.nextSibling;

    console.log(e.target);

    setCheck(!isChecked);
    if (isChecked) {
      paragraph.setAttribute("style", "text-decoration: line-through;");
    } else {
      paragraph.removeAttribute("style", "text-decoration: line-through;");
    }
  };

  return (
    <TaskCard
      task={task}
      onHandleChange={onHandleChange}
      isChecked={isChecked}
    />
  );
};

export default TaskCardContainer;
