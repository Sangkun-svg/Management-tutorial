import "./App.css";
import { Customer } from "./component/customer";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Component } from "react";

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((error) => {
        console.error(error);
      });
  }
  callApi = async () => {
    const res = await axios.get("/api/customers");
    return res.data;
  };
  render() {
    const { customers } = this.state;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {customers
                ? Object.keys(customers[0])?.map((rows) => {
                    return <TableCell>{rows}</TableCell>;
                  })
                : ""}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              ? customers?.map((customers) => {
                  return (
                    <Customer
                      id={customers.id}
                      image={customers.image}
                      name={customers.name}
                      age={customers.age}
                      gender={customers.gender}
                      career={customers.career}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
