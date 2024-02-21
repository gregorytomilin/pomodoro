import { FAQBlock } from "../../FAQBlock";
import { TaskCreactor } from "../../TasksCreactor";
import { TaskList } from "../TaskList/TaskList";
import classes from "./taskPage.module.css";

export const TasksPage = () => {
  return (
    <div className={classes.taskPage}>
      <div className={classes.tasksBlock}>
        <FAQBlock />
        <TaskCreactor />
        <TaskList />
      </div>
    </div>
  );
};
