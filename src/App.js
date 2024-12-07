import React from 'react';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router-dom';
import Career from './pages/Career';
import JobOpening from './pages/JobOpening';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/common/Footer';
import { Services } from './pages/Services';
import ContactPageComponent from './pages/ContactUs';
import PortfolioPage from './pages/Portfolio';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/career/jobopening' element={<JobOpening />} />
        <Route path='/contact' element={<ContactPageComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
