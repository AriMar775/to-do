import { ADD_TASK, DELETE_TASK } from "./types";

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    payload: task,
  };
}
