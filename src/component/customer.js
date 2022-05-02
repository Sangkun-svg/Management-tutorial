import { Component } from "react";

// export로 내보내는 module은 use strick 의 유무와 상관없이 무조건 엄격모드
// export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있다.
// named export(export 만 있는 것)을 사용하면 import 시 {}(중괄호) 안에 선언하여 가져와야함
export default class Customer extends Component {
  render() {
    // react component built in function , 항상 수행되는 내용이다.
    const { name, age, gender, career } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{gender}</p>
        <p>{career}</p>
      </div>
    );
  }
}
