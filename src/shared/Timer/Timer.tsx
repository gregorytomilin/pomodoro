import { useUnit } from "effector-react";
import {
  $tasksArray,
  addMinute,
  removePomidoro,
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
    if (!isTimerStarted) intervalId && clearInterval(intervalId);
  }, [intervalId, isTimerStarted]);
  if (!currentTask) return <div>no tasks</div>;
  const startTimer = () => {
    const newTimerId = timer();
    setIntervalId(newTimerId); // Сохраните новый timerId в состоянии
  };

  //   const stopTimer = () => {
  //     console.log("timerId", intervalId);
  //     clearInterval(intervalId); // Остановите интервал, используя текущий timerId
  //   };
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

  const timerString = secToTimer(currentTask.currentPomidoroTimeRemaining);
  return (
    <div className={classes.timer}>
      <div
        className={classes.timerHeader}
        style={{ backgroundColor: "#DC3E22", color: "white" }}
        // style={{ backgroundColor: isTimerStarted ? "#DC3E22" : 'inherit' }}
      >
        <span>{currentTask?.task}</span>
        <span>Помидор {currentTask?.pomidoroQuantity}</span>
      </div>
      <div className={classes.timerBody}>
        <div className="df gap20 ai-c">
          <div className={classes.timerCounts}>{timerString}</div>
          <div
            className={classes.addMinutes}
            onClick={() => addMinute({ id: currentTask.id })}
          >
            +
          </div>
        </div>
        <div className="taskName">Задача-1 - {currentTask?.task}</div>
        <div className={`${classes.timerControls}`}>
          <Button
            disabled={isTimerStarted}
            style={ButtonStyles.Green}
            onClick={() => {
              startTimer();
              setIsTimerStarted(true);
            }}
          >
            Старт
          </Button>
          <Button
            style={ButtonStyles.GreyBorder}
            onClick={() => {
              console.log(intervalId);
              setIsTimerStarted(false);
            }}
          >
            Стоп
          </Button>
        </div>
      </div>
    </div>
  );
};
