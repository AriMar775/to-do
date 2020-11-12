import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import TaskCard from "../component";

const TaskCardContainer = ({ task }) => {
  const [isChecked, setCheck] = useState(false);

  const onHandleChange = useCallback(() => {
    setCheck((prev) => !prev);
  }, []);

  return (
    <TaskCard
      task={task}
      onHandleChange={onHandleChange}
      isChecked={isChecked}
    />
  );
};

export default TaskCardContainer;

TaskCardContainer.propTypes = {
  task: PropTypes.shape({ value: PropTypes.string, id: PropTypes.string })
    .isRequired,
};
