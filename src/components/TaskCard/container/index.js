import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import TaskCard from "../component";

const TaskCardContainer = ({ task, onSelect, setSelectedTasksCount }) => {
  const [isChecked, setCheck] = useState(false);

  const onHandleChange = useCallback(() => {
    onSelect(task.id, !isChecked);
    setCheck(!isChecked);
  }, [isChecked, onSelect, task.id]);

  return (
    <TaskCard
      task={task}
      onHandleChange={onHandleChange}
      isChecked={isChecked}
      setSelectedTasksCount={setSelectedTasksCount}
    />
  );
};

export default TaskCardContainer;

TaskCardContainer.propTypes = {
  task: PropTypes.shape({ value: PropTypes.string, id: PropTypes.string })
    .isRequired,
  onSelect: PropTypes.func,
  setSelectedTasksCount: PropTypes.func,
};
