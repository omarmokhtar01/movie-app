import { Container } from "react-bootstrap";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="font color-body ">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
