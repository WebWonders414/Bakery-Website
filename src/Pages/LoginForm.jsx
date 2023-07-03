import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const fieldStyle = createTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: "10px",
        width: "300px",
        // lineHeight: "5px",
        // height: "20px",
      },
    },
  },
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginButton: true,
      namee: "",
      email: "",
      password: "",
      errorName: false,
      errorEmail: false,
      errorPassword: false,
      // data : [],
    };
  }
  nameChange = (val) => {
    this.setState({
      namee: val,
      errorName: false,
    });
  };
  emailChange = (val) => {
    this.setState({
      email: val,
      errorEmail: false,
    });
  };
  passwordChange = (val) => {
    this.setState({
      password: val,
      errorPassword: false,
    });
  };
  formValidatiion = () => {
    let isValid = true;
    if (this.state.namee == "") {
      this.setState({
        errorName: true,
      });
    }
    if (this.state.email == "") {
      this.setState({
        errorEmail: true,
      });
    }
    if (this.state.password == "") {
      this.setState({
        errorPassword: true,
      });
    }
    return isValid;
  };
  buttonClick = () => {
    let isValid = this.formValidatiion();
    if (isValid == true) {
      fetch("url")
        .thhen((response) => response.json())
        .then((data) => {
          this.setState({
            data: data,
          });
        })
        .catch((error) => error);
    } else {
      error;
    }
  };

  handleToggle = (val) => {
    if (val == "Register") {
      this.setState({
        isLoginButton: false,
      });
    } else if (val == "Login") {
      this.setState({
        isLoginButton: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Dialog onClose={this.props.handleClose} open={this.props.open}>
          <DialogTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <p>Welcome User</p>
              <CloseIcon
                style={{ color: "#ef5656" }}
                onClick={this.props.handleClose}
              />
            </div>
          </DialogTitle>
          <ThemeProvider theme={fieldStyle}>
            <DialogContent>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {this.state.isLoginButton == false ? (
                  <TextField
                    error={this.state.errorName}
                    onChange={(e) => this.nameChange(e.target.value)}
                    value={this.state.namee}
                    variant="outlined"
                    placeholder="Enter your name"
                  />
                ) : null}
                <TextField
                  error={this.state.errorEmail}
                  onChange={(e) => this.emailChange(e.target.value)}
                  value={this.state.email}
                  variant="outlined"
                  placeholder="Enter your Email"
                />
                <TextField
                  error={this.state.errorPassword}
                  onChange={(e) => this.passwordChange(e.target.value)}
                  value={this.state.password}
                  variant="outlined"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  onClick={this.buttonClick}
                  style={{
                    margin: "10px",
                    width: "80px",
                    height: "30px",
                    borderRadius: "4px",
                    backgroundColor: "#8282db",
                  }}
                >
                  {this.state.isLoginButton == true ? "Login" : "Register"}
                </button>
                <p
                  style={{ margin: "10px", color: "red" }}
                  onClick={() =>
                    this.handleToggle(
                      this.state.isLoginButton == true ? "Register" : "Login"
                    )
                  }
                >
                  {this.state.isLoginButton == true ? (
                    <p>
                      Don't have an account?{" "}
                      <span
                        style={{
                          color: "red",
                          cursor: "pointer",
                          color: "blue",
                        }}
                      >
                        Register
                      </span>
                    </p>
                  ) : (
                    <p>
                      Already have an account?
                      <span
                        style={{
                          cursor: "pointer",
                          color: "blue",
                        }}
                      >
                        {" "}
                        Login
                      </span>
                    </p>
                  )}
                </p>
              </div>
            </DialogContent>
          </ThemeProvider>
        </Dialog>
      </div>
    );
  }
}
