import React, { useState, useCallback } from "react";

import { TaskCard } from "../Component";

const TaskCardContainer = ({ task }) => {
  const [isChecked, setCheck] = useState(true);

  const onHandleChange = useCallback(
    (e) => {
      let paragraph = e.target.parentNode.parentNode.nextSibling;

      if (isChecked) {
        paragraph.setAttribute("style", "text-decoration: line-through;");
      } else {
        paragraph.removeAttribute("style", "text-decoration: line-through;");
      }

      setCheck(!isChecked);
    },
    [isChecked]
  );

  return (
    <TaskCard
      task={task}
      onHandleChange={onHandleChange}
      isChecked={isChecked}
    />
  );
};

export default TaskCardContainer;
