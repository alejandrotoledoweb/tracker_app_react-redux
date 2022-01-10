import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
      redirect: null,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch((err) => console.error(err));

    axios.get('http://localhost:5000/users').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeDuration(e) {
    this.setState({ duration: e.target.value });
  }

  onChangeDate(date) {
    this.setState({ date: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    axios
      .put(
        'http://localhost:5000/exercises/' + this.props.match.params.id,
        exercise,
      )
      .then((response) => {
        console.log(response.data);
      });

    // this.setState({ redirect: '/' });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h3>Edit an exercise log</h3>
        <form onSubmit={this.onSubmit} className="w-50 ">
          <div className="form-group mb-4">
            <label>Username: </label>
            <select
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-4">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChangeDescription}
              className="form-control"
            ></input>
          </div>
          <div className="form-group mb-4">
            <label>Duration:</label>
            <input
              type="number"
              name="duration"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              className="form-control"
            ></input>
          </div>
          <div className="form-group mb-4">
            <label>Date:</label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
              className="form-control"
            ></DatePicker>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
