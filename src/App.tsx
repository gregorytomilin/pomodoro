import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./constructor.css";
import { Header } from "./shared/Header";
import { TasksPage } from "./shared/Pages/TaskPage";
import { StatPage } from "./shared/Pages/StatPage";
import { Page404 } from "./shared/Pages/Page404";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/pomodoro/" element={<TasksPage />} />
            <Route path="/pomodoro/stat" element={<StatPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
