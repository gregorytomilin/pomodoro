/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEvent, useUnit } from "effector-react";
import {
  $tasksStore,
  addMinute,
  removePomidoro,
  removeTaskFromArray as removeTask,
  resetTaskTimer,
  setTimerStarted,
  timerBreak as setStoreBreakTimeRemaining,
  timerTask as setStoreTaskTimeRemaining,
  justRemovePomidoro,
} from "../store/TasksStore";
import classes from "./timer.module.css";
import { Button } from "../UI/Button";
import Plus from "@assets/svg/plus.svg?react";

import { ButtonStyles } from "../UI/Button/ButtonStyles.enum";
import { useSecondsToMinutes } from "../hooks/useSecondsToMinutes";
import { useEffect, useState } from "react";

import notasks from "@assets/img/notasks.gif";
import { dzinDzin } from "../lib/sound";
import { BREAK_TIMER_DURATION, TASK_TIMER_DURATION } from "@/consts";
import { Bounce, toast } from "react-toastify";

export const Timer = () => {
  const tasksStore = useUnit($tasksStore);

  const secToTimer = useSecondsToMinutes();
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimeForBreak, setIsTimeForBreak] = useState(false);
  const [timerString, setTimerString] = useState("00:00");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  /** Текущее задание */
  const currentTask = tasksStore.at(-1);

  useEffect(() => {
    setTimerString(
      secToTimer(
        (currentTask?.breakTimeRemaining || currentTask?.taskTimeRemaining) ?? 0
      )
    );
    if (isTimerStarted && currentTask && !currentTask.isTaskStarted) {
      // Указываем что таймер уже запущен был хоть раз
      setTimerStarted({ id: currentTask.id, isStarted: true });
    } else if (!isTimerStarted && intervalId) {
      clearInterval(intervalId);
    }
  }, [
    currentTask,
    currentTask?.isTaskStarted,
    intervalId,
    isTimerStarted,
    secToTimer,
    timerString,
  ]);

  useEffect(() => {
    setTimerString(
      secToTimer(
        (currentTask?.breakTimeRemaining || currentTask?.taskTimeRemaining) ?? 0
      )
    );

    // Отслеживаем изменения в Хранилище задач
    const cancelStoreWatch = $tasksStore.watch((store) => {
      const currentTask = store.at(-1);
      if (currentTask?.pomidoroQuantity === 0) {
        removeTask(currentTask.id);
        toast.info(
          `Задача ${currentTask.task} успешно заверешена. Вы большой М-О-Л-О-Д-Е-Ц`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        resetTimerStates();
      }

      if (store.length === 0) {
        resetTimerStates();
      }
    });
    return () => cancelStoreWatch();
  }, []);

  const resetTimerStates = () => {
    // Указываем для задачи что таймер остановлен
    setIsTimerStarted(false);
    // Выключаем режим паузы
    setIsTimeForBreak(false);
  };
  if (!currentTask)
    return (
      <div className="df jc-c ai-c">
        <img src={notasks} alt="" />
      </div>
    );

  const taskTimerHandler = () => {
    // Если время текущей помидорки равно 0 - значит таймер закончился
    setTimerString(secToTimer(currentTask.taskTimeRemaining));

    if (currentTask.taskTimeRemaining === 0) {
      // Удаляем один помидор
      justRemovePomidoro({ id: currentTask.id });
      console.log(tasksStore);

      // Вызываем колокол
      dzinDzin();
      // Указываем для задачи что таймер задач остановлен
      setIsTimerStarted(false);
      // Включаем режим паузы
      setIsTimeForBreak(true);
      // Устанавливаем время паузы
      setStoreBreakTimeRemaining({
        id: currentTask.id,
        secondsRemaining: BREAK_TIMER_DURATION,
      });

      return;
    }
    // Каждй тик убираем одну секунду
    setStoreTaskTimeRemaining({
      id: currentTask.id,
      secondsRemaining: (currentTask.taskTimeRemaining -= 1),
    });
  };
  const breakTimerHandler = () => {
    setTimerString(secToTimer(currentTask.breakTimeRemaining));
    // Если время текущей помидорки равно 0 - значит таймер закончился
    if (currentTask.breakTimeRemaining === 0) {
      // Вызываем колокол
      dzinDzin();
      // Указываем для задачи что таймер остановлен
      setIsTimerStarted(false);
      // Выключаем режим паузы
      setIsTimeForBreak(false);
      setTimerStarted({ id: currentTask.id, isStarted: false });
      setStoreTaskTimeRemaining({
        id: currentTask.id,
        secondsRemaining: TASK_TIMER_DURATION,
      });
      return;
    }
    // Каждый тик убираем одну секунду
    setStoreBreakTimeRemaining({
      id: currentTask.id,
      secondsRemaining: (currentTask.breakTimeRemaining -= 1),
    });
  };

  const startTimer = (timeFunc: () => void) => {
    const newTimerId = timer(timeFunc);
    setIntervalId(newTimerId);
  };

  const timer = (timer: () => void) => {
    return setInterval(() => timer(), 1000);
  };

  /** Завершение задачи / кнопка "Сделано" */
  const timerDone = () => {
    if (isTimeForBreak) {
      // Указываем для задачи что таймер остановлен
      setIsTimerStarted(false);
      // Выключаем режим паузы
      setIsTimeForBreak(false);
      setTimerStarted({ id: currentTask.id, isStarted: false });
      // Установка времени таймера задач в соотвествии с установленной константой
      setStoreTaskTimeRemaining({
        id: currentTask.id,
        secondsRemaining: TASK_TIMER_DURATION,
      });
      // Сброс времени таймера перерыва до 0
      setStoreBreakTimeRemaining({
        id: currentTask.id,
        secondsRemaining: 0,
      });
      return;
    }
    removeTask(currentTask.id);
  };

  /** Сброс таймера - кнопка "Стоп" */
  const resetTimer = () => {
    setIsTimerStarted(false);
    resetTaskTimer(currentTask.id);
    // Указываем что старт таймера скинут
    setTimerStarted({ id: currentTask.id, isStarted: false });
  };

  return (
    <div className={classes.timer}>
      <div
        className={classes.timerHeader}
        style={
          isTimerStarted
            ? isTimeForBreak
              ? { backgroundColor: "var(--green600)", color: "white!important" }
              : { backgroundColor: "var(--red500)", color: "white!important" }
            : {}
        }
      >
        <span style={{ color: "inherit" }}>{currentTask?.task}</span>
        <span style={{ color: "inherit" }}>
          {isTimeForBreak
            ? "Перерыв"
            : `Помидор ${currentTask?.pomidoroQuantity}`}
        </span>
      </div>
      <div className={classes.timerBody}>
        <div className="df gap20 ai-c">
          <div
            className={classes.timerCounts}
            style={
              isTimerStarted
                ? isTimeForBreak
                  ? { color: "var(--green600)" }
                  : { color: "var(--red500)" }
                : {}
            }
          >
            {timerString}
          </div>
          <div
            className={classes.addMinutes}
            onClick={() => addMinute({ id: currentTask.id })}
          >
            <Plus />
          </div>
        </div>

        <div className={`${classes.timerControls}`}>
          <Button
            style={ButtonStyles.Green}
            onClick={() => {
              !isTimerStarted &&
                startTimer(
                  isTimeForBreak ? breakTimerHandler : taskTimerHandler
                );
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
              if (currentTask.isTaskStarted && !isTimerStarted) timerDone();
              // Задача остановлена, таймер сброшен
              if (currentTask.isTaskStarted && isTimerStarted) {
                // сброс таймера
                resetTimer();
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
