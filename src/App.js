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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
