import { useState } from "react";
import { Input, Button } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleId = ({ target: { value } }) => {
    setId(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const clickLoginButton = async () => {
    const data = {
      id: id,
      password: password,
    };
    const url = "http://localhost:9000/api/user/login";
    await axios
      .post(
        url,
        { body: data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <Input name="id" value={id} onChange={handleId} />
      <br />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
      />
      <br />
      <Button color="primary" onClick={clickLoginButton}>
        login
      </Button>
    </LoginWrapper>
  );
};
const LoginWrapper = styled.div`
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;
