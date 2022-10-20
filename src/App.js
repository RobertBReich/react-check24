import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
