import React, { useCallback } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { App } from "../Component";
import { addTask } from "../../redux/actions";
import { getTasks } from "../../redux/selectors";

const AppContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const taskValue = e.target.querySelector("input").value;
      const idValue = uuidv4();
      const task = { value: taskValue, id: idValue };
      if (taskValue) {
        dispatch(addTask(task));
        e.target.querySelector("input").value = "";
      }
    },
    [dispatch]
  );

  return <App handleSubmit={handleSubmit} tasks={tasks} />;
};

export default AppContainer;
