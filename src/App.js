import "./App.css";
import { Component } from "react";
import { Login } from "./component/login";
import { Register } from "./component/register";
import styled from "@emotion/styled";

class App extends Component {
  render() {
    return (
      <Wrap>
        <Login />
        <Register />
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default App;
