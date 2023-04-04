import React from 'react';
import './App.css'
import About from './components/About/About';
import Choose from './components/Choose/Choose';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Stats from './components/Stats/Stats';
import Team from './components/Team/Team';
import Reservation from './components/Reservation/Reservation';
import Testimonials from './components/Testimonials/Testimonials';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stats />
      <Gallery />
      <Offer />
      <Team />
      <Reservation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;