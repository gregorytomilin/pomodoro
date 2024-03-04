import { createEvent, createStore } from "effector";
import persist from "effector-localstorage";
import { getDayProps, getDate } from "../lib/date";
import { progressMockData } from "./progressData.mock";

export const checkDay = createEvent<Date>();
export interface DayProgressProps {
  date: string;
  workTime?: number;
  pauseTime?: number;
  pomidoroQ?: number;
  stopsQ?: number;
  dayNumber: number;
}
export enum EditAction {
  workTime = "workTime",
  pauseTime = "pauseTime",
  pomidoroQ = "pomidoroQ",
  stopsQ = "stopsQ",
}
export const editDay = createEvent<{ type: EditAction; value: number }>();

const currentDate = getDate();

// Создаем хранилище для массива объектов
export const $progressStore = createStore<Array<DayProgressProps>>(
  progressMockData
).on(editDay, (state, params) => {
  if (!state || state.length === 0) {
    state.push({
      date: currentDate,
      [params.type]: params.value,
      dayNumber: getDayProps("dayNumber") as number,
    });
  } else {
    if (state.at(-1)?.date !== currentDate) {
      state.push({
        date: currentDate,
        [params.type]: params.value,
        dayNumber: getDayProps("dayNumber") as number,
      });
    } else {
      const stateValue = state[state.length - 1][params.type];
      if (stateValue)
        state[state.length - 1][params.type] = stateValue + params.value;
    }
  }
  const newState = [...state];
  return newState;
});

persist({
  store: $progressStore,
  key: "progress",
});
