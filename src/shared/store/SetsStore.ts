import { createEvent, createStore } from "effector";
import persist from "effector-localstorage";

export type SetProps = {
  name: string;
  value: number;
};

export const changeSet = createEvent<{ name: string; step: number }>();

const defaultSets: SetProps[] = [
  { name: "Помидор", value: 25 * 60 },
  { name: "Короткий перерыв", value: 3 * 60 },
  { name: "Длинный перерыв", value: 5 * 60 },
  { name: "Кнопка добавления времени", value: 1 * 60 },
];

// const storage = localStorage.getItem("sets");

// Создаем хранилище для массива объектов
export const $setsStore = createStore<Array<SetProps>>(defaultSets).on(
  changeSet,
  (state, setData) =>
    state.filter((set) => {
      if (set.name !== setData.name) {
        set.value += setData.step;
        if (setData.step < 0 && set.value === 0) set.value = 0;
      }
      return set;
    })
);

persist({
  store: $setsStore,
  key: "sets",
  def: defaultSets,
});
