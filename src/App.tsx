import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Story } from './pages/Story';
import { Collections } from './pages/Collections';
import { Profile } from './pages/Profile';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';

function AppContent() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="main-wrapper">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/story" element={<Story />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer is only on Home page in original design, or global? Let's make it global for better UX if desired, or keep inside Home. 
          The prompt asked for a Shop page redesign. Let's include Footer globally for completeness. 
      */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
