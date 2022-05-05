import { Component } from "react";
import axios from "axios";
export class CustomerDelete extends Component {
  deleteCustomer = (id) => {
    const url = `/api/customer/delete/${id}`;
    // axios.delete(url); : hardDelete
    axios.patch(url);
    this.state.stateRefresh();
  };

  render() {
    return (
      <>
        <button
          onClick={(e) => {
            this.deleteCustomer(this.props.id);
          }}
        >
          삭제
        </button>
      </>
    );
  }
}
