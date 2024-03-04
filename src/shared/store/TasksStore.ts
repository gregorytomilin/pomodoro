import { createEvent, createStore } from "effector";
import { TaskProps } from "../TasksCreactor";
import { Bounce, toast } from "react-toastify";
import persist from "effector-localstorage";
import { TIMER_DURATION } from "../../consts";

export const addTaskToArray = createEvent<TaskProps>();
export const removeTaskFromArray = createEvent<string>();
export const editTask = createEvent<{ id: string; task: string }>();
export const timerTask = createEvent<{
  id: string;
  secondsRemaining: number;
}>();
export const addPomidoro = createEvent<{ id: string }>();
export const removePomidoro = createEvent<{ id: string }>();
export const addMinute = createEvent<{ id: string }>();
export const setTimerStarted = createEvent<{
  id: string;
  isStarted: boolean;
}>();
export const resetTaskTimer = createEvent<string>();

// Создаем хранилище для массива объектов
export const $tasksStore = createStore<Array<TaskProps>>([])
  .on(addTaskToArray, (state, task) => [...state, task]) // Добавляем объект в массив
  // Удаляем объект из массива по id
  .on(removeTaskFromArray, (state, idToRemove) =>
    state.filter((task) => task.id !== idToRemove)
  )
  // Редактируем объект из массива по id
  .on(editTask, (state, editedTask) => {
    return state.map((task) => {
      if (task.id === editedTask.id) {
        toast("Задача отредактирована", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return { ...task, task: editedTask.task };
      }
      return task;
    });
  })
  // Редактируем объект из массива по id
  .on(timerTask, (state, editedTask) => {
    return state.map((task) => {
      if (task.id === editedTask.id) {
        return {
          ...task,
          currentPomidoroTimeRemaining: editedTask.secondsRemaining,
        };
      }
      return task;
    });
  })
  // Добавляем помидор
  .on(addPomidoro, (state, editedTask) =>
    state.map((task) =>
      task.id === editedTask.id
        ? { ...task, pomidoroQuantity: (task.pomidoroQuantity += 1) }
        : task
    )
  )
  // Удаляем помидор
  .on(removePomidoro, (state, editedTask) =>
    state.map((task) => {
      if (task.id === editedTask.id) {
        if (task.pomidoroQuantity === 1) {
          toast.error(
            "Нельзя просто взять и сделать меньше одного помидорро!",
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
          return task;
        }
        return { ...task, pomidoroQuantity: (task.pomidoroQuantity -= 1) };
      }
      return task;
    })
  )
  .on(addMinute, (state, editedTask) =>
    state.map((task) => {
      if (task.id === editedTask.id) {
        return {
          ...task,
          currentPomidoroTimeRemaining:
            (task.currentPomidoroTimeRemaining += 60),
        };
      }
      return task;
    })
  )
  .on(setTimerStarted, (state, editedTask) => {
    return state.map((task) => {
      if (task.id === editedTask.id) {
        return {
          ...task,
          isTaskStarted: editedTask.isStarted,
        };
      }
      return task;
    });
  })
  .on(resetTaskTimer, (state, taskId) => {
    return state.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          currentPomidoroTimeRemaining: TIMER_DURATION,
        };
      }
      return task;
    });
  });

persist({
  store: $tasksStore,
  key: "tasks",
});
