import { useUnit } from "effector-react";
import { $tasksArray } from "../../store/TasksStore";
import { Task } from "./Task";

export const TaskList = () => {
  const tasksStore = useUnit($tasksArray);
  return (
    <div>
      {tasksStore.length > 0 &&
        tasksStore
          .slice(0)
          .reverse()
          .map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                task={task.task}
                timeSpent={task.timeSpent}
                pomidoroQuantity={task.pomidoroQuantity}
              />
            );
          })}
    </div>
  );
};
