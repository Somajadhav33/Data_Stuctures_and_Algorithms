import { Component } from "react";
import { Navigate } from "react-router-dom";
import{Link} from "react-router-dom"
import "./index.css";

class LoginPage extends Component {
  state = { email: "", password: "", showSubmitError: false, errorMsg: "" };



  render() {
    return (
      <div className="main-container">
        <form className="form-container" >
            <h1>Hello Student, Please Login</h1>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="button" onClick={this.onclickUserLogin}><Link to="/">login</Link></button>
          
          <p>{this.state.showSubmitError && this.state.errorMsg}</p>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
