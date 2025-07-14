import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Services from './components/Services';
import Features from './components/Magic';
import About from './components/About';
import Accessibility from './components/Accessibility';
import Privacy from './components/Privacy';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneButton from './components/PhoneButton';

// Home page component
const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <WhatsAppButton phoneNumber="+972554315229" />
      <PhoneButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
