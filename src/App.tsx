import React, { useState } from "react";
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
import TodoApp from "./Pages/TodoApp";

import AddBoard from "./components/AddBoard";
import Board from "./components/Board";

function App() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleLogin = (token: string) => {
    setToken(token);
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setToken("");
    setIsLoggedin(false);
  };

  return (
    <div className="App">
      {!isLoggedin ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage onSuccess={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onSuccess={handleLogin} />}
            />
            <Route path="/addboard" element={<AddBoard />} /> //Login sonrasına
            taşınacak!!!!
            <Route path="/board" element={<Board />} /> //Login sonrasına
            taşınacak!!!!
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp onLogout={handleLogout} />} />
          </Routes>
        </BrowserRouter>
      )}

      {/* <Link to="/login" /> */}
    </div>
  );
}

export default App;
