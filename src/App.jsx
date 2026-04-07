import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ToolsList from './pages/ToolsList';
import ToolDetail from './pages/ToolDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import StatsFacts from './pages/StatsFacts';
import ContactUs from './pages/ContactUs';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsList />} />
          <Route path="/tools/:slug" element={<ToolDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/stats" element={<StatsFacts />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
