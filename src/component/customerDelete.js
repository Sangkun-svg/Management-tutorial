import { Component } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
} from "@mui/material";

export class CustomerDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    console.log("handleClickOpen");
    this.setState({ open: true });
  };
  handleClickClose = () => {
    console.log("handleClickClose");
    this.setState({ open: false });
  };

  deleteCustomer = (id) => {
    const url = `/api/customer/delete/${id}`;
    // axios.delete(url); : hardDelete url
    axios.patch(url);
    this.state.stateRefresh();
  };

  render() {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClickClose}>
          <DialogTitle onClose={this.handleClickClose}>삭제 경고</DialogTitle>
          <DialogContent gutterBottom>
            <Typography>선택한 고객 정보가 삭제됩니다</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.deleteCustomer(this.props.id);
                this.handleClickClose();
              }}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickClose}
            >
              취소
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
/**

 */
