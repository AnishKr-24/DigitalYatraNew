import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import AuthPage from "./components/Auth/AuthPage";
import Bus from "./components/Services/Bus";
import Train from "./components/Services/Train";
import Flight from "./components/Services/Flight";
import BusOffers from "./components/offers/BusOffers";
import TrainOffers from "./components/offers/TrainOffers";
import FlightOffers from "./components/offers/FlightOffers";
import NeedHelp from "./components/needhelp/NeedHelp";
import MainHero from "./components/mainhero/MainHero";

function MainHeroLayout({ Foreground }) {
  return (
    <div className="overlay-wrapper">
      <div className="background-layer">
        <Hero /> {/* background stays the same */}
      </div>

      <div className="foreground-layer">
        <Foreground /> {/* show Bus, Train, or Flight */}
      </div>
    </div>
  );
}

function HomePage() {
  const [selected, setSelected] = useState("bus");
  return (
    <>
      <Navbar setSelected={setSelected} />
      <MainHero selected={selected} />
      <BusOffers />
      <TrainOffers />
      <FlightOffers />
      <NeedHelp />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/bus" element={<MainHeroLayout Foreground={Bus} />} />
        <Route path="/train" element={<MainHeroLayout Foreground={Train} />} />
        <Route
          path="/flight"
          element={<MainHeroLayout Foreground={Flight} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
