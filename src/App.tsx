import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FaqPage from './pages/FaqPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Determine the base URL - use /fimfam-frontend if not in development environment
  const basename ='/fimfam-frontend';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;