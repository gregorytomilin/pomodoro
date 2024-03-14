/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUnit } from "effector-react";
import {
  $tasksStore,
  addMinute,
  removeTaskFromArray as removeTask,
  resetTaskTimer,
  setTimerStarted,
  timerBreak as setStoreBreakTimeRemaining,
  timerTask as setStoreTaskTimeRemaining,
  justRemovePomidoro,
  resetBreakTimer,
  setStoreTimerId,
} from "../store/TasksStore";
import classes from "./timer.module.css";
import { Button } from "../UI/Button";
import Plus from "@assets/svg/plus.svg?react";

import { ButtonStyles } from "../UI/Button/ButtonStyles.enum";
import { useSecondsToMinutes } from "../hooks/useSecondsToMinutes";
import { useEffect, useState } from "react";

import notasks from "@assets/img/notasks.gif";
import { dzinDzin } from "../lib/sound";
import {
  BIG_BREAK_TIMER_DURATION,
  BREAK_TIMER_DURATION,
  TASK_TIMER_DURATION,
} from "@/consts";
import { Bounce, toast } from "react-toastify";
import {
  EditAction,
  editDay as editDayProgressStore,
} from "../store/ProgressStore";

export const Timer = () => {
  const tasksStore = useUnit($tasksStore);

  const secToTimer = useSecondsToMinutes();

  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimeForBreak, setIsTimeForBreak] = useState(false);
  const [timerString, setTimerString] = useState("00:00");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [breakIndex, setBreakIndex] = useState(0);

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
    // Если у currentTask есть таймерID значит таймер запущен
    if (currentTask?.timerId) {
      setIsTimerStarted(true);
      setIntervalId(currentTask.timerId);
      if (currentTask.breakTimeRemaining) setIsTimeForBreak(true);
      // startTimer(isTimeForBreak ? breakTimerHandler : taskTimerHandler);
    }

    // Устанавливаем отображение таймера если есть
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

      if (!currentTask?.timerId && intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
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
      // Добавляем помидор в копилку
      editDayProgressStore({
        type: EditAction.pomidoroQ,
      });

      // Вызываем колокол
      dzinDzin();
      // Указываем для задачи что таймер задач остановлен
      setIsTimerStarted(false);
      setTimerStarted({ id: currentTask.id, isStarted: false });
      // Включаем режим паузы
      setIsTimeForBreak(true);

      setBreakIndex((prev) => {
        if (prev === 3) return 0;
        return (prev += 1);
      });

      setStoreBreakTimeRemaining({
        id: currentTask.id,
        secondsRemaining:
          breakIndex === 2 ? BIG_BREAK_TIMER_DURATION : BREAK_TIMER_DURATION,
      });

      return;
    }

    // Каждй тик убираем одну секунду
    setStoreTaskTimeRemaining({
      id: currentTask.id,
      secondsRemaining: (currentTask.taskTimeRemaining -= 1),
    });
    // Добавляем секунду в копилку времени работы
    editDayProgressStore({
      type: EditAction.workTime,
    });
  };
  const breakTimerHandler = () => {
    setTimerString(secToTimer(currentTask.breakTimeRemaining));
    // Если время текущей помидорки равно 0 - значит таймер закончился
    if (currentTask.breakTimeRemaining === 0) {
      // Вызываем колокол
      dzinDzin();

      // Выключаем режим паузы
      setIsTimeForBreak(false);
      // Указываем для задачи что таймер остановлен
      setIsTimerStarted(false);
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
    // Добавляем секунду в копилку паузы
    editDayProgressStore({
      type: EditAction.pauseTime,
    });
  };

  const startTimer = (timeFunc: () => void) => {
    const newTimerId = timer(timeFunc);
    setIntervalId(newTimerId);
    setStoreTimerId(newTimerId);
  };

  const timer = (timer: () => void) => {
    return setInterval(() => timer(), 1000);
  };

  /** Завершение задачи / кнопка "Сделано" */
  const timerDone = () => {
    setStoreTimerId(null);
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
    setStoreTimerId(null);
    isTimeForBreak
      ? resetBreakTimer(currentTask.id)
      : resetTaskTimer(currentTask.id);
    // Указываем что старт таймера скинут
    setIsTimerStarted(false);
    setTimerStarted({ id: currentTask.id, isStarted: false });

    editDayProgressStore({
      type: EditAction.stopsQ,
    });
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
            className="roundedButton"
            onClick={() => addMinute({ id: currentTask.id })}
          >
            <Plus />
          </div>
        </div>

        <div className={`${classes.timerControls}`}>
          <Button
            style={ButtonStyles.Green}
            onClick={() => {
              if (!isTimerStarted) {
                startTimer(
                  isTimeForBreak ? breakTimerHandler : taskTimerHandler
                );
              } else {
                setStoreTimerId(null);
              }
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
            {!isTimerStarted && currentTask.isTaskStarted
              ? isTimeForBreak
                ? "Пропустить"
                : "Сделано"
              : "Стоп"}
          </Button>
        </div>
      </div>
    </div>
  );
};
