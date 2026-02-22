import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import HowItWorks from './pages/HowItWorks';
import Impact from './pages/Impact';
import FarmerPortal from './pages/FarmerPortal';
import BuyerPortal from './pages/BuyerPortal';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/flow" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/farmer" element={<FarmerPortal />} />
          <Route path="/buyer" element={<BuyerPortal />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
