import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
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

const AppWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: auto;
  min-height: 100%;
  touch-action: manipulation;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Navbar />
        <WhatsAppButton phoneNumber="+972506344396" />
        <PhoneButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
