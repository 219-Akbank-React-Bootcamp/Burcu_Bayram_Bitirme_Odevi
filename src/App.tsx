import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AddBoardPage from "./Pages/AddBoardPage";

import AddBoard from "./components/AddBoard";
import Board from "./components/Board";
import { useLoginContext } from "./contexts/LoginContext/LoginContext";
import { BoardProvider } from "./contexts/BoardContext/BoardContext";

function App() {
  // const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  // const [token, setToken] = useState<string>("");

  const { isLoggedIn, login, logout } = useLoginContext();

  function onDragEnd(result: any) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BoardProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/addboard" element={<AddBoardPage />} /> */}
              <Route path="/addboard" element={<AddBoard />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </BrowserRouter>
        </BoardProvider>
      )}

      {/* <Link to="/login" /> */}
    </div>
  );
}

export default App;
