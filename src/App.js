import React from "react";

import Input from "./components/Input";
import Compo from "./components/Compo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleEmailChange(e) {
    const { email } = this.state;

    this.setState({
      email: e.target.value,
    });

    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email.match(regex)) {
      e.target.className = "form-control is-invalid ";
    } else {
      e.target.className = "form-control is-valid ";
      this.setState({
        emailIsValid: true,
      });
    }
  }

  handlePasswordChange(e) {
    const { password } = this.state;

    this.setState({
      password: e.target.value,
    });

    if (password.length < 5) {
      e.target.className = "form-control is-invalid ";
    } else {
      e.target.className = "form-control is-valid ";
      this.setState({
        passwordIsValid: true,
      });
    }
  }

  handleSubmit(e) {
    const { passwordIsValid, emailIsValid } = this.state;
    e.preventDefault();
    if (passwordIsValid && emailIsValid) {
      this.setState({
        isSubmitted: true,
      });
      e.target.value = `<h1>Coucou</h1>`;
      console.log(e.target);
    } else {
      alert("Error the Mail or Password isn't correct");
    }
  }

  handleCheck() {
    const { rememberMe } = this.state;

    if (!rememberMe) {
      this.setState({
        rememberMe: true,
      });
    } else {
      this.setState({
        rememberMe: false,
      });
    }
  }
  render() {
    return (
      <>
        {this.state.isSubmitted ? (
          <Compo />
        ) : (
          <form className="container my-5" onSubmit={this.handleSubmit}>
            <div className="mb-3 col-6">
              <Input
                type="email"
                keyUp={this.handleEmailChange}
                inputClass="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                text="Email Address"
              />

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3 col-6">
              <Input
                type="password"
                keyUp={this.handlePasswordChange}
                inputClass="form-control"
                id="exampleInputPassword1"
                divClass="mb-3 col-6"
                labelClass="form-label"
                forLabel=""
                text="Password"
              />
            </div>

            <div className="mb-3 form-check">
              <Input
                type="checkbox"
                inputClass="form-check-input"
                id="exampleCheck1"
                labelClass="form-check-label"
                divClass="mb-3 form-check"
                forLabel="exampleCheck1"
                check={this.handleCheck}
                text="Remember Me"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </>
    );
  }
}

export default App;
