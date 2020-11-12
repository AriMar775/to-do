import { ADD_TASK, DELETE_TASK } from "./types";

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function deleteTask(taskIndex) {
  return {
    type: DELETE_TASK,
    payload: taskIndex,
  };
}
