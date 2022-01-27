import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import ScrollToTopBtn from "./InputsAndButtons/ScrollToTopBtn.js";
import LandingPage from "./Pages/LandingPage";
import PeoplePage from "./Pages/PeoplePage";
import PeopleList from "./Pages/PeopleList.js";
import PlanetsPage from "./Pages/PlanetsPage";
import StarshipsPage from "./Pages/StarshipsPage";
// I had originally intended to code the app
// with a router and routes that lead to specific component pages
// however I had never built a scrollable app before and I wanted to try it out.
const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <LandingPage />
        <PeoplePage />
        <PeopleList />
        <PlanetsPage />
        <StarshipsPage />
        <ScrollToTopBtn />
      </>
      {/* <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
