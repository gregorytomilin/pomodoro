import { createEvent, createStore } from "effector";

// Создаем событие для изменения значения input
export const inputChanger = createEvent<string>();

// Создаем хранилище для состояния input
export const $inputValue = createStore<string>("").on(
  inputChanger,
  (_, value) => value
);
