import { Component } from "react";

// export로 내보내는 module은 use strick 의 유무와 상관없이 무조건 엄격모드
// export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있다.
// named export(export 만 있는 것)을 사용하면 import 시 {}(중괄호) 안에 선언하여 가져와야함

class Customer extends Component {
  render() {
    const { id, name, image, age, career, gender } = this.props;
    // react component built in function , 항상 수행되는 내용이다.
    return (
      <div>
        <CustomerProfile id={id} name={name} image={image} />
        <CustomerInfo age={age} career={career} gender={gender} />
      </div>
    );
  }
}

class CustomerProfile extends Component {
  render() {
    const { id, name, image } = this.props;

    return (
      <div>
        <img src={image} alt={"profile"} />
        <h2>
          id : {id} name : {name}
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    const { age, career, gender } = this.props;
    return (
      <div>
        <p>age : {age}</p>
        <p>gender : {gender}</p>
        <p>career : {career}</p>
      </div>
    );
  }
}

export { Customer, CustomerProfile, CustomerInfo };
