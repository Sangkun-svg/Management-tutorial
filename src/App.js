import "./App.css";
import { Login } from "./component/login";
import { Register } from "./component/register";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Button } from "@mui/material";
import { NotFound } from "./component/NotfoundErr";
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
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
