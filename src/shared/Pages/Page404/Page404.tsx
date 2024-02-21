import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      Упс...нет такой страницы <Link to="/">перейти на главную</Link>
    </div>
  );
};
