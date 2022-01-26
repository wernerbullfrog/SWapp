import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import LandingPage from "./Pages/LandingPage";
import PeoplePage from "./Pages/PeoplePage";
import PlanetsPage from "./Pages/PlanetsPage";
import StarshipsPage from "./Pages/StarshipsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <LandingPage />
      <PeoplePage />
      <PlanetsPage />
      <StarshipsPage />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
