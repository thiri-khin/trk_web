import React from 'react';
import HomePage from './Component/homePage.jsx';
import Header from './Component/header.jsx';
import MobileHomePage from './Component/mobileHomePage.jsx';
import TvavHomePage from './Component/tvavHomePage.jsx';
import HomeAHomePage from './Component/homeAHomePage.jsx';
import ExploreHomePage from './Component/exploreHomePage.jsx';
import './App.css';

function App(props) {
  return (
    <div className="container-fluid">
      <Header />
    </div>
  );
}

export default App;
