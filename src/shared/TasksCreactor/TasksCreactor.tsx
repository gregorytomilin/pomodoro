import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { $inputValue, inputChanger as inputChanger } from "../store/InputStore";
import { useUnit } from "effector-react";
import { uid } from "uid";
import { ButtonStyles } from "../UI/Button/ButtonStyles.enum";
import { addTaskToArray } from "../store/TasksStore";

export type TaskProps = {
  id: string;
  task: string;
  timeSpent?: number;
};
export const TaskCreactor = () => {
  const [inputValue, inputChangedHandler] = useUnit([
    $inputValue,
    inputChanger,
  ]);

  const addTask = () => {
    inputChangedHandler("");

    if (inputValue !== "") {
      const newTask: TaskProps = {
        id: uid(),
        task: inputValue,
      };
      addTaskToArray(newTask);
    }
  };

  return (
    <div className="df gap20 fd-c">
      <Input placeholder={"Название задачи"} />
      <Button style={ButtonStyles.Green} onClick={addTask}>
        создать задачу
      </Button>
    </div>
  );
};
