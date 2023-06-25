import React from 'react'
import HomePage from './pages/home_page'
import AboutPage from './pages/about_page'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PortfolioPage from './pages/portfolio_page';
import Nav from './components/layout/Nav.jsx';

const App = () => {
  return (
    <Router>
      <Nav />
      <HomePage />
      <AboutPage />
      <PortfolioPage />
    </Router>
  )
}

export default App