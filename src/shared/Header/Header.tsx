import classes from "./header.module.css";

import logo from "../../assets/img/logo.png";
import stat from "../../assets/img/stat.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <Link to="/stat" className={classes.stat}>
        <img src={stat} alt="" />
        статистика
      </Link>
    </div>
  );
};
