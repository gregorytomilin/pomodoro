import { TaskProps } from "../../../TasksCreactor";
import classes from "./task.module.css";
import dots from "../../../../assets/svg/dots.svg";
export const Task = (props: TaskProps) => {
  const { id, task, timeSpent } = props;
  return (
    <div className={classes.task}>
      {task}{" "}
      <button>
        <img src={dots} alt="" />
      </button>
    </div>
  );
};
