import { createEvent, createStore } from "effector";
import { TaskProps } from "../TasksCreactor";
import { Bounce, toast } from "react-toastify";
import persist from "effector-localstorage";

export const addTaskToArray = createEvent<TaskProps>();
export const removeTaskFromArray = createEvent<string>();
export const editTask = createEvent<{ id: string; task: string }>();
export const addPomidoro = createEvent<{ id: string }>();
export const removePomidoro = createEvent<{ id: string }>();

// Создаем хранилище для массива объектов
export const $tasksArray = createStore<Array<TaskProps>>([])
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
  );

persist({
  store: $tasksArray,
  key: "tasks",
});
