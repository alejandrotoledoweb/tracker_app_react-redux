import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    this.setState({ username: '' });
  }

  render() {
    return (
      <div>
        <form className="w-50" onSubmit={this.onSubmit}>
          <div className="form-group mb-4">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create new user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
