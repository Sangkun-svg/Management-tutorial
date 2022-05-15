import React from "react";
import { useEffect, useState } from "react";
import { Input, Button } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { DEFAULT_URL } from "../constants/api";
import { AxiosWithToken, AxiosWithoutToken } from "../util/authAPIs.js";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = localStorage.getItem("access_token");

  const handleId = ({ target: { value } }) => {
    setId(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const requestLogin = async () => {
    const { pathname } = window.location;

    const data = {
      id: id,
      password: password,
    };
    const url = `${DEFAULT_URL}/api/user/login`;
    await AxiosWithoutToken({}, "POST", url, data).then((res) => {
      const { status, name, token } = JSON.parse(res.request.response);
      if (status === 200 && !!token) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("userName", name);
      }
    });
    window.location.replace(pathname);
  };

  return (
    <>
      {!!isLogin ? (
        <h2>안녕하세요 {localStorage.getItem("userName")}님 ! 환영합니다</h2>
      ) : (
        <>
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
            <Button color="primary" onClick={requestLogin}>
              login
            </Button>
          </LoginWrapper>
        </>
      )}
    </>
  );
};
const LoginWrapper = styled.div`
  background-color: skyblue;
  width: 300px;
`;
