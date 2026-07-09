import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav     from './components/Nav';
import Home    from './pages/Home';
import Services from './pages/Services';
import About   from './pages/About';
import Contact from './pages/Contact';

/* Scrolls window to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/'        element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about'   element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;