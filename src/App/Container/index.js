import React, { useCallback } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { App } from "../Component";
import { addTask } from "../../redux/actions";
import { getTasks } from "../../redux/selectors";

const AppContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    let taskValue = event.target.querySelector("input").value;

    if (taskValue) {
      dispatch(addTask(taskValue));
      event.target.querySelector("input").value = "";
    }
  }, []);

  return <App handleSubmit={handleSubmit} tasks={tasks} />;
};

const mapStateToProps = (state) => {
  return { tasks: state.tasks.tasks };
};

export default connect(mapStateToProps)(AppContainer);