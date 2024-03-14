import classes from "./header.module.css";

import logo from "@assets/img/logo.png";
import stat from "@assets/img/stat.png";
import Sets from "@assets/svg/sets.svg?react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link to="/pomodoro/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className="df gap10">
        <Link to="/pomodoro/sets" className={classes.stat}>
          <Sets />
        </Link>
        <Link to="/pomodoro/stat" className={classes.stat}>
          <img src={stat} alt="" />
          статистика
        </Link>
      </div>
    </div>
  );
};
