import { useUnit } from "effector-react";
import { $inputValue, inputChanger } from "../../store/InputStore";
import classes from "./input.module.css";
interface InputProps {
  placeholder: string;
}
export const Input = (props: InputProps) => {
  const [inputValue, inputChangedHandler] = useUnit([
    $inputValue,
    inputChanger,
  ]);
  const { placeholder } = props;

  return (
    <input
      type="text"
      value={inputValue}
      placeholder={placeholder ?? "Текст"}
      className={classes.input}
      onChange={(e) => inputChangedHandler(e.currentTarget.value)}
    />
  );
};
