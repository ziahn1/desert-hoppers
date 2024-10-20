import React, { useState } from 'react';  // Only one import for React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import MauritiusPage from './components/MauritiusPage';
import MaldivesPage from './components/MaldivesPage';
import SeychellesPage from './components/SeychellesPage';
import IndonesiaPage from './components/IndonesiaPage';
import ContactForm from './components/ContactForm';  // Import the new ContactForm component
import './App.css';

const App = () => {
  const [modalShow, setModalShow] = useState(false);  // State to control modal visibility

  // Function to handle modal closing
  const handleClose = () => setModalShow(false);

  return (
    <Router>
      <Header onContactClick={() => setModalShow(true)} />  {/* Pass the function to open the modal */}
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
      </Routes>
      <Footer />

      {/* Render the ContactForm modal */}
      <ContactForm show={modalShow} handleClose={handleClose} /> 
    </Router>
  );
};

export default App;
