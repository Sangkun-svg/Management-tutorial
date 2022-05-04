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
  CircularProgress,
} from "@mui/material";
import { Component } from "react";

class App extends Component {
  state = {
    customers: "",
    completed: 0,
  };
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((error) => {
        console.error(error);
      });
  }
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 170 ? 0 : completed + 2 });
  };

  callApi = async () => {
    const res = await axios.get("/api/customers");
    return res.data;
  };
  render() {
    const { customers, completed } = this.state;
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
            {customers ? (
              customers?.map((customers) => {
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
            ) : (
              <>
                <TableRow>
                  <TableCell colSpan={6} align={"center"}>
                    <CircularProgress variant="determinate" value={completed} />
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
