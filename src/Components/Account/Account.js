import React from "react";
import "./Account.css";
import Login from './Login';

export default class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="container account">
        <h2>Account</h2>
        {!this.state.user && (
          <Login />
        )}
        {this.state.user && (
          <div>
            <p>Display Name: {this.state.user.displayName}</p>
            <p>Email: {this.state.user.email}</p>
          </div>
        )}
      </div>
    );
  }
}