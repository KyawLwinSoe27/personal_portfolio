import React from 'react'
import HomePage from './pages/home_page'
import AboutPage from './pages/about_page'
import { BrowserRouter as Router } from 'react-router-dom';
import PortfolioPage from './pages/portfolio_page';
import Nav from './components/layout/Nav.jsx';
import ContactPage from './pages/contact_me_page';

const App = () => {
  return (
    <Router>
      <Nav />
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </Router>
  )
}

export default App