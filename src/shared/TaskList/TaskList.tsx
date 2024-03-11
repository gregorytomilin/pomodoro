import { useUnit } from "effector-react";

import { Task } from "./Task";
import { $tasksStore } from "../store/TasksStore";
import { TASK_TIMER_DURATION } from "@/consts";
import { secToHoursMinutes } from "../lib/date";

export const TaskList = () => {
  const tasksStore = useUnit($tasksStore);
  const totalPomidorcos = tasksStore.reduce(
    (sum, object) => sum + object.pomidoroQuantity,
    0
  );

  const { hours, min } = secToHoursMinutes(totalPomidorcos * TASK_TIMER_DURATION);
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
                taskTimeRemaining={task.taskTimeRemaining}
                breakTimeRemaining={task.breakTimeRemaining}
                isTaskStarted={task.isTaskStarted}
              />
            );
          })}
      {totalPomidorcos > 0 && (
        <div style={{fontSize: '12px', color: 'var(--grey500)'}}>
          {`${hours ? hours + "ч." : ""}`}
          {`${min ? min + "мин." : ""}`}
        </div>
      )}
    </div>
  );
};
