import { Component } from "react";
import { post } from "axios";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
class CustomerAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: "",
      age: "",
      gender: "",
      career: "",
      fileName: "",
      open: false,
    };
  }

  handleOnClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleOnClickClose = () => {
    console.log("handleOnClickClose ");
    this.setState({
      file: null,
      userName: "",
      age: "",
      gender: "",
      career: "",
      fileName: "",
      open: false,
    });
  };

  handleFileOnChange = (e) => {
    const { files, value } = e.target;
    this.setState({
      file: files[0],
      fileName: value,
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleFormSubmit = (e) => {
    console.log("handleFormSubmit");
    e.preventDefault();
    this.addCustomer().then(() => {});
    this.handleOnClickClose();
  };

  addCustomer = async () => {
    const { file, userName, age, gender, career } = this.state;
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", userName);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("career", career);

    // file이 포함되어 있는 데이터는 header에 multipart/form-data 를 추가해줘야함
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    return await post(url, formData, config);
  };

  render() {
    const { file, fileName, userName, age, gender, career } = this.state;
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleOnClickOpen}
        >
          고객 추가
        </Button>
        <Dialog open={this.state.open}>
          <DialogTitle>고객 추가</DialogTitle>
          <DialogContent>
            <input
              id="raised-button-file"
              accept="file"
              type={"file"}
              file={file}
              value={fileName}
              onChange={this.handleFileOnChange}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                name="file"
              >
                {fileName === "" ? "이미지 선택" : fileName}
              </Button>
            </label>
            <br />
            <TextField
              label="이름"
              type={"text"}
              name={"userName"}
              value={userName}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
            <TextField
              label="나이"
              type={"text"}
              name={"age"}
              value={age}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
            <TextField
              label="성별"
              type={"text"}
              name={"gender"}
              value={gender}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
            <TextField
              label="직업"
              type={"text"}
              name={"career"}
              value={career}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              추가
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleOnClickClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default CustomerAdd;
