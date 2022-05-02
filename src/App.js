import "./App.css";
import { Customer } from "./component/customer";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Component } from "react";
const customers = [
  {
    id: 1,
    image: "https://placeImg.com/64/64/1",
    name: "Sangkun",
    age: 23,
    gender: "male",
    career: "GnB",
  },
  {
    id: 2,
    image: "https://placeImg.com/64/64/2",
    name: "Tay",
    age: 30,
    gender: "male",
    career: "GnB",
  },
  {
    id: 3,
    image: "https://placeImg.com/64/64/3",
    name: "Summer",
    age: 32,
    gender: "female",
    career: "GnB",
  },
];

class App extends Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(customers[0]).map((rows) => {
                return <TableCell>{rows}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customers) => {
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
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
