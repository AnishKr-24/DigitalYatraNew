import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
// import HeroTwo from './components/hero/HeroTwo';
import AuthPage from './components/Auth/AuthPage';
import Bus from './components/Services/Bus';
import Train from './components/Services/Train';
import Flight from './components/Services/Flight';
import BusOffers from './components/offers/BusOffers';
import TrainOffers from './components/offers/TrainOffers';
import FlightOffers from './components/offers/FlightOffers';
import NeedHelp from './components/needhelp/NeedHelp';

function HomePage() {
  return (
    <>
      <Hero />
      <Bus />
      <Train />
      <Flight />
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/train" element={<Train />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
    </Router>
  );
}

export default App;
