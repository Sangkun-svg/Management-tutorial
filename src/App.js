import "./App.css";
import { Customer } from "./component/customer";
import CustomerAdd from "./component/customerAdd";
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
  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      completed: 0,
    };
  }

  stateRefresh = () => {
    console.log("stateRefresh!!");
    this.setState({
      customers: "",
      completed: 0,
    });
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((error) => {
        console.error("error : ", error);
      });
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((error) => {
        console.error("error : ", error);
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
      <>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {customers
                  ? Object.keys(customers[0])?.map((rows, index) => {
                      return (
                        <TableCell key={`customerColumn_${index}`}>
                          {rows}
                        </TableCell>
                      );
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
                      age={customers.age}
                      name={customers.name}
                      image={customers.image}
                      career={customers.career}
                      gender={customers.gender}
                    />
                  );
                })
              ) : (
                <>
                  <TableRow>
                    <TableCell colSpan={6} align={"center"}>
                      <CircularProgress
                        variant="determinate"
                        value={completed}
                      />
                    </TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </>
    );
  }
}

export default App;
