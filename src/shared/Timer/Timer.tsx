import { useUnit } from "effector-react";
import {
  $tasksArray,
  addMinute,
  removePomidoro,
  removeTaskFromArray,
  resetTaskTimer,
  setTimerStarted,
  timerTask,
} from "../store/TasksStore";
import classes from "./timer.module.css";
import { Button } from "../UI/Button";
import { ButtonStyles } from "../UI/Button/ButtonStyles.enum";
import { useSecondsToMinutes } from "../hooks/useSecondsToMinutes";
import { useEffect, useState } from "react";

export const Timer = () => {
  const tasksStore = useUnit($tasksArray);
  const secToTimer = useSecondsToMinutes();
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const currentTask = tasksStore.at(-1);
  useEffect(() => {
    if (!isTimerStarted) {
      if (intervalId) clearInterval(intervalId);
    } else {
      if (!currentTask) return;
      !currentTask.isTaskStarted &&
        setTimerStarted({ id: currentTask.id, isStarted: true });
    }
  }, [
    currentTask,
    currentTask?.id,
    currentTask?.isTaskStarted,
    intervalId,
    isTimerStarted,
  ]);

  if (!currentTask) return <div>no tasks</div>;

  const startTimer = () => {
    const newTimerId = timer();
    setIntervalId(newTimerId); // Сохраните новый timerId в состоянии
  };

  const timer = () => {
    return setInterval(() => {
      if (currentTask.currentPomidoroTimeRemaining === 0) {
        removePomidoro({ id: currentTask.id });
        setIsTimerStarted(false);
        return;
      }
      timerTask({
        id: currentTask.id,
        secondsRemaining: (currentTask.currentPomidoroTimeRemaining -= 1),
      });
    }, 1000);
  };

  const taskDone = () => {
    removeTaskFromArray(currentTask.id);
  };
  const resetTask = () => {
    resetTaskTimer(currentTask.id);
  };

  const timerString = secToTimer(currentTask.currentPomidoroTimeRemaining);
  return (
    <div className={classes.timer}>
      <div
        className={classes.timerHeader}
        style={
          isTimerStarted
            ? { backgroundColor: "var(--red)", color: "white!important" }
            : {}
        }
      >
        <span>{currentTask?.task}</span>
        <span>Помидор {currentTask?.pomidoroQuantity}</span>
      </div>
      <div className={classes.timerBody}>
        <div className="df gap20 ai-c">
          <div
            className={classes.timerCounts}
            style={isTimerStarted ? { color: "#DC3E22" } : {}}
          >
            {timerString}
          </div>
          <div
            className={classes.addMinutes}
            onClick={() => addMinute({ id: currentTask.id })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M4 12H20M12 4V20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* <div className="taskName">Задача-1 - {currentTask?.task}</div> */}
        <div className={`${classes.timerControls}`}>
          <Button
            style={ButtonStyles.Green}
            onClick={() => {
              !isTimerStarted && startTimer();
              setIsTimerStarted((prev) => !prev);
            }}
          >
            {isTimerStarted
              ? "Пауза"
              : currentTask.isTaskStarted
              ? "Продолжить"
              : "Старт"}
          </Button>
          <Button
            disabled={!isTimerStarted && !currentTask.isTaskStarted}
            style={
              !currentTask.isTaskStarted
                ? ButtonStyles.GreyBorder
                : !isTimerStarted
                ? ButtonStyles.Red
                : ButtonStyles.RedBorder
            }
            onClick={() => {
              // Задача завершена
              if (currentTask.isTaskStarted && !isTimerStarted) taskDone();
              // Задача остановлена, таймер сброшен
              if (currentTask.isTaskStarted && isTimerStarted) {
                setIsTimerStarted(false);
                resetTask();
              }
            }}
          >
            {!isTimerStarted && currentTask.isTaskStarted ? "Сделано" : "Стоп"}
          </Button>
        </div>
      </div>
    </div>
  );
};
