import { Component } from "react";
import { post } from "axios";
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
    };
  }

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
    this.props.stateRefresh();
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
      <form onSubmit={this.handleFormSubmit}>
        <h1>고객추가</h1>
        프로필 이미지:
        <input
          type={"file"}
          name={"file"}
          file={file}
          value={fileName}
          onChange={this.handleFileOnChange}
        />
        <br />
        이름:
        <input
          type={"text"}
          name={"userName"}
          value={userName}
          onChange={this.handleValueChange}
        />
        <br />
        나이:
        <input
          type={"text"}
          name={"age"}
          value={age}
          onChange={this.handleValueChange}
        />
        <br />
        성별:
        <input
          type={"text"}
          name={"gender"}
          value={gender}
          onChange={this.handleValueChange}
        />
        <br />
        직업:
        <input
          type={"text"}
          name={"career"}
          value={career}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default CustomerAdd;
