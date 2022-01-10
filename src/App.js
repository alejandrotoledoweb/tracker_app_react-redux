import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ExcercisesList from './components/exercises-list.component';
import EditExcercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <Routes>
        <Navbar />
        <br />
        <Route path="/" exact component={<ExcercisesList />} />
        <Route path="/edit/:id" exact component={<EditExcercise />} />
        <Route path="/create" exact component={<CreateExercise />} />
        <Route path="/user" exact component={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
