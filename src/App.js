import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Career from './pages/Career';
import JobOpening from './pages/JobOpening';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/career/jobopening' element={<JobOpening />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
