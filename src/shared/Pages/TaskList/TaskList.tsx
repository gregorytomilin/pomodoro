import { useUnit } from "effector-react";
import { $tasksArray } from "../../store/TasksStore";
import { Task } from "./Task";

export const TaskList = () => {
  const tasksStore = useUnit($tasksArray);
  return (
    <div>
      {tasksStore.length > 0 &&
        tasksStore.map((task) => {
          return (
            <Task id={task.id} task={task.task} timeSpent={task.timeSpent} />
          );
        })}
    </div>
  );
};
