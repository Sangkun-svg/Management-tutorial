import { useState } from "react";
import { Input, Button } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { DEFAULT_URL } from "../constants/api.js";

export const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleId = ({ target: { value } }) => {
    setId(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const handleName = ({ target: { value } }) => {
    setName(value);
  };
  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const clickLoginButton = async () => {
    const data = {
      id: id,
      password: password,
      name: name,
      email: email,
    };
    const url = `${DEFAULT_URL}/api/user/register`;
    return await axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log("res : ", res))
      .catch((err) => console.log(err));
  };

  return (
    <LoginWrapper>
      <h1>회원가입</h1>
      <Input
        name="id"
        value={id}
        onChange={handleId}
        required={true}
        placeholder={"아이디를 입력해주세요"}
      />
      <br />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
        required={true}
        placeholder={"비밀번호를 입력해주세요"}
      />
      <br />
      <Input
        name="name"
        value={name}
        onChange={handleName}
        required={true}
        placeholder={"이름을 입력해주세요"}
      />
      <br />
      <Input
        name="email"
        value={email}
        onChange={handleEmail}
        required={true}
        placeholder={"E-mail을 입력해주세요"}
      />
      <br />

      <Button color="primary" onClick={clickLoginButton}>
        register
      </Button>
    </LoginWrapper>
  );
};
const LoginWrapper = styled.div`
  background-color: skyblue;
  width: 300px;
`;
