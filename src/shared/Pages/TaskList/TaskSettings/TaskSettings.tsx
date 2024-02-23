import classes from "./sets.module.css";
import pencil from "../../../../assets/svg/pencil.svg";
import plus from "../../../../assets/svg/plus.svg";
import minus from "../../../../assets/svg/minus.svg";
import trash from "../../../../assets/svg/trash.svg";
import {
  addPomidoro,
  removePomidoro,
  removeTaskFromArray,
} from "../../../store/TasksStore";
import { useRef } from "react";

interface TaskSettingsProps {
  id: string;
  onClose: () => void;
  setEditMode: () => void;
}
export const TaskSettings = (props: TaskSettingsProps) => {
  const { id, onClose, setEditMode } = props;
  const setsRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.sets} ref={setsRef}>
      <ul>
        <li
          onClick={() => {
            addPomidoro({ id });
          }}
        >
          <img src={plus} alt="" />
          Добавить помидор
        </li>
        <li
          onClick={() => {
            removePomidoro({ id });
          }}
        >
          <img src={minus} alt="" />
          Убрать помидор
        </li>
        <li
          onClick={() => {
            setEditMode();
            onClose();
          }}
        >
          <img src={pencil} alt="" />
          Редактировать задачу
        </li>
        <li
          onClick={() => {
            removeTaskFromArray(id);
            onClose();
          }}
        >
          <img src={trash} alt="" />
          Удалить задачу
        </li>
      </ul>
    </div>
  );
};
