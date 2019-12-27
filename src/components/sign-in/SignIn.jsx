import React from "react";
import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-button/CustomBtn";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="emai"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomBtn type="submit">SIGN IN</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              SIGN in with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
