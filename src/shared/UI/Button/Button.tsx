import { ReactNode } from "react";
import classes from "./button.module.css";
import { ButtonStyles } from "./ButtonStyles.enum";

interface ButtonProps {
  style?: ButtonStyles;
  onClick: () => void;
  children?: ReactNode;
}
export const Button = (props: ButtonProps) => {
  const { style, onClick, children } = props;

  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${style ? classes[style] : ""}`}
    >
      {children && children}
    </button>
  );
};
