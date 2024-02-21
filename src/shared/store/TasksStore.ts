import { createEvent, createStore } from "effector";
import { TaskProps } from "../TasksCreactor";

// Создаем событие для добавления объекта в массив
export const addTaskToArray = createEvent<TaskProps>();

// Создаем событие для удаления объекта из массива по id
export const removeTaskFromArray = createEvent<string>();

// Создаем хранилище для массива объектов
export const $tasksArray = createStore<Array<TaskProps>>([])
  .on(addTaskToArray, (state, task) => [...state, task]) // Добавляем объект в массив
  .on(removeTaskFromArray, (state, idToRemove) =>
    state.filter((task) => task.id !== idToRemove)
  ); // Удаляем объект из массива по id
