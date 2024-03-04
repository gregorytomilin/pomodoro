import { $progressStore, DayProgressProps } from "@/shared/store/ProgressStore";
import { useUnit } from "effector-react";

const tasksStore = useUnit($progressStore);

export const useGetWeekData = () => {
  let getLastWeek: Array<DayProgressProps> = [];
  if (tasksStore.length === 0) return getLastWeek;
  if (tasksStore.at(-1)?.dayNumber === 1) {
    getLastWeek.push(tasksStore.at(-1));
  } else {
    for (let i = tasksStore.length - 1; i === 0; i--) {
      const element = array[i];
    }
  }
};
