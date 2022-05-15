import { Login, Register, NotFoundErrorPage } from "./component";
import { UserInfo } from "./component/user";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(
    !!localStorage.getItem("access_token")
  );
  useEffect(() => {
    setIsLogin(isLogin);
  }, [isLogin]);

  const logout = () => {
    localStorage.clear();
    const { pathname } = window.location;
    // replace(pathname);
    // window.location.replace("/login");
    window.location.replace(pathname);
  };
  const getTokenValue = () => {
    console.log(localStorage.getItem("access_token"));
  };

  return (
    <Router>
      <header>
        <Link to={"/"}>
          <Button>main</Button>
        </Link>
        <Link to={"/login"}>
          {isLogin ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Button>Sign In</Button>
          )}
        </Link>
        <Link to={"/register"}>
          <Button>Sign Up</Button>
        </Link>
        <Button onClick={getTokenValue}>get token</Button>
      </header>
      <hr />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info" element={<UserInfo />} />
        <Route path="/" element={<NotFoundErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
