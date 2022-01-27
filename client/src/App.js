import React from "react";

import Header from "./Header.js";
import ScrollToTopBtn from "./InputsAndButtons/ScrollToTopBtn.js";
import LandingPage from "./Pages/LandingPage";
import PeoplePage from "./Pages/PeoplePage";
import PeopleList from "./Pages/PeopleList.js";
import PlanetsPage from "./Pages/PlanetsPage";
import StarshipsPage from "./Pages/StarshipsPage";

const App = () => {
  return (
    // <BrowserRouter>
    <>
      <Header />
      <LandingPage />
      <PeoplePage />
      <PeopleList />
      <PlanetsPage />
      <StarshipsPage />
      <ScrollToTopBtn />
    </>
    /* <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter> */
  );
};

export default App;
