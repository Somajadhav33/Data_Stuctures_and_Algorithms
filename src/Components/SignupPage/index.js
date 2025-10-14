import { Component } from "react";
import aixos from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

class SignupPage extends Component {
  state = {
    username: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    showSubmitError: false,
    errorMsg: "",
  };
  onchangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  onchangeMobileNo = (event) => {
    this.setState({ mobileNo: event.target.value });
  };
  onchangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onchangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onchangeConfirmPassword = (event) => {
    const username = this.state.username;
    username === this.setState({ confirmPassword: event.target.value })
      ? this.setState({ showSubmitError: false })
      : this.setState({
          showSubmitError: true,
          errorMsg: "Password and Confirm Password didn't match",
        });
  };

  onclickUserLogin = async (event) => {
    event.preventDefault();
    this.state.username === "" ||
    this.state.mobileNo === "" ||
    this.state.email === "" ||
    this.state.password === "" ||
    this.state.confirmPassword === ""
      ? this.setState({
          showSubmitError: true,
          errorMsg: "Please fill all the fields",
        })
      : alert("Signup Successful please");
    const SignUpDetails = {
      username: this.state.username,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      password: this.state.password,
    };
    await aixos
      .post("", SignUpDetails)
      .then((response) => {
        const jwtToken = response.data;
        Cookies.set("token", jwtToken, { expires: 30 });
        Navigate({ to: "/" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.onclickUserLogin}>
          <h1 className="login-heading">Signup</h1>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            onChange={this.onchangeUsername}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="input-field"
            onChange={this.onchangeMobileNo}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            onChange={this.onchangeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            onChange={this.onchangePassword}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            onChange={this.onchangeConfirmPassword}
          />
          <button type="submit" className="login-button">
            Signup
          </button>
          {this.state.showSubmitError && (
            <p className="error-message">{this.state.errorMsg}</p>
          )}
          <Link to="/" className="signup-link">
            Already have an account? Login
          </Link>
        </form>
      </div>
    );
  }
}

export default SignupPage;
