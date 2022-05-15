import "./App.css";
import { Login, Register, NotFoundErrorPage } from "./component";
import { UserInfo } from "./component/user";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const App = () => {
  return (
    <Router>
      <header>
        <Link to={"/"}>
          <Button>main</Button>
        </Link>
        <Link to={"/login"}>
          <Button>Sign In</Button>
        </Link>
        <Link to={"/register"}>
          <Button>Sign Up</Button>
        </Link>
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
