import classes from "./task.module.css";
import dots from "@assets/svg/dots.svg";
import { useRef, useState } from "react";
import { TaskSettings } from "../TaskSettings";
import { useClickOut } from "@/shared/hooks/useClickOut";
import { TaskProps, editTask } from "@/shared/store/TasksStore";

export const Task = (props: TaskProps) => {
  const { task, id, pomidoroQuantity } = props;
  const [showSets, setShowSets] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const taskRef = useRef<HTMLInputElement>(null);

  useClickOut({
    ref: taskRef,
    handler: () => {
      setShowSets(false);
    },
  });
  const saveTask = () => {
    if (!inputRef.current) return;
    editTask({ id, task: inputRef.current?.value ?? "" });
    setEditMode(false);
  };
  return (
    <div className={classes.task} ref={taskRef}>
      <div className="df ai-c gap10">
        <div className={classes.pomidoroQuantity}>{pomidoroQuantity}</div>
        {editMode ? (
          <>
            <input
              type="text"
              defaultValue={task}
              ref={inputRef}
              className={classes.inputChange}
            />
            <button className={classes.saveButton} onClick={() => saveTask()}>
              сохранить
            </button>
          </>
        ) : (
          task
        )}
      </div>

      <button onClick={() => setShowSets(true)}>
        <img src={dots} alt="" />
      </button>
      {showSets && (
        <TaskSettings
          id={id}
          onClose={() => setShowSets(false)}
          setEditMode={() => setEditMode(true)}
        />
      )}
    </div>
  );
};
