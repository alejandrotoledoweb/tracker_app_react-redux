import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExcercise from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" exact element={<EditExcercise />} />
        <Route path="/create" exact element={<CreateExercise />} />
        <Route path="/user" exact element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
