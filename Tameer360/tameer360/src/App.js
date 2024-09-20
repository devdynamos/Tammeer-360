import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoutingProvider } from './components/RoutingContext'; // Correct import path
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import HomeCostCalculator from './components/HomeCostCalculator'; // Correct import
import HomeCalculator from './components/HomeCalculator';
import Services from './components/Services';
import VideoScreen from './components/VideoScreen';
import Footer from './components/Footer';
import './App.css';

function MainPage() {
  return (
    <div>
      <HomeScreen />
      <HomeCostCalculator />
      <Services />
      <VideoScreen />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RoutingProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home-calculator" element={<HomeCalculator />} />
          </Routes>
        </div>
      </Router>
    </RoutingProvider>
  );
}

export default App;
