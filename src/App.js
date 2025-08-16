import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DirectorPage from './pages/DirectorPage';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
`;

const MainPage = () => (
  <AppContainer>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <ContactSection />
    <Footer />
  </AppContainer>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/director" element={<DirectorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
