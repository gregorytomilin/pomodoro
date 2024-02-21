import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./shared/Header";
import { TasksPage } from "./shared/Pages/TaskPage";
import { StatPage } from "./shared/Pages/StatPage";
import { Page404 } from "./shared/Pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/stat" element={<StatPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
