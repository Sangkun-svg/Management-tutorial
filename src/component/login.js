import { useState } from "react";
import { Input, Button } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { DEFAULT_URL } from "../constants/api";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
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
    const url = `${DEFAULT_URL}/api/user/login`;
    await axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((req) => {
        console.log(
          "JSON.parse(req.request.response : ",
          JSON.parse(req.request.response)
        );
        const { status, name } = JSON.parse(req.request.response);
        if (status === 200) {
          setIsLogin(true);
          setName(name);
        }
      })
      .catch((err) => console.log("error login", err));
  };

  const getUsers = async () => {
    const url = `${DEFAULT_URL}/api/user/getUsers`;
    await axios
      .get(url)
      .then((req) => console.log("res : ", JSON.parse(req.request.response)))
      .catch((err) => console.log("error login", err));
  };
  return (
    <>
      {isLogin ? (
        <h2>안녕하세요 {name}님 ! 환영합니다</h2>
      ) : (
        <LoginWrapper>
          <h1>로그인</h1>
          <Input
            name="id"
            value={id}
            onChange={handleId}
            required={true}
            placeholder={"ID 를 입력해주세요"}
          />
          <br />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required={true}
            placeholder={"PW 를 입력해주세요"}
          />
          <br />
          <Button color="primary" onClick={clickLoginButton}>
            login
          </Button>
        </LoginWrapper>
      )}
    </>
  );
};
const LoginWrapper = styled.div`
  background-color: skyblue;
  width: 300px;
`;
