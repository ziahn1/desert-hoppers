// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <div className="card-container">
                <CardList />
            </div>
            <Footer />
        </div>
    );
};

export default App;
