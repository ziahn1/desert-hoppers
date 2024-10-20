// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import MauritiusPage from './components/MauritiusPage';
import MaldivesPage from './components/MaldivesPage';
import SeychellesPage from './components/SeychellesPage';
import IndonesiaPage from './components/IndonesiaPage';
import './App.css';
import EnquiryFormModal from './components/EnquiryFormModal';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <div className="container">
                {/* Search and Sort Section */}
                <div className="search-sort-bar">
                  <input type="text" placeholder="Search Package..." />
                  <button className="sort-btn">Sort By</button>
                </div>
              </div>
              <div className="card-container">
                <CardList />
              </div>
            </>
          } 
        />
        <Route path="/mauritius" element={<MauritiusPage />} />
        <Route path="/maldives" element={<MaldivesPage />} />
        <Route path="/seychelles" element={<SeychellesPage />} />
        <Route path="/indonesia" element={<IndonesiaPage />} />
        <Route path="/enquire" element={<EnquiryFormModal/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
