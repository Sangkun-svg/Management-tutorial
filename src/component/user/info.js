import { TableRow, TableCell } from "@mui/material";

export const UserInfo = () => {
  const { id, name, image, age, career, gender } = this.props;
  // react component built in function , 항상 수행되는 내용이다.
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt={"profile"} style={{ width: 64, height: 64 }} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{age}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{career}</TableCell>
      </TableRow>
    </>
  );
};
