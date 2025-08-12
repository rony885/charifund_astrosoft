import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import Top from "./components/Top";
import Loader from "./components/Loader";
import ScrolltoTop from "./components/ScrolltoTop";
import TemplateOption from "./components/TemplateOption";
import OffCanvas from "./components/OffCanvas";
import NotFound from "./components/NotFound";

import Home from "./pages/Home/Home";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx/PrivacyPolicy";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [menuOpenn, setMenuOpenn] = useState(false);

  const toggleMenuu = () => {
    setMenuOpenn(!menuOpenn);
  };

  const closeMenuu = () => {
    setMenuOpenn(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading delay or replace with your actual loading logic
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after 2 seconds (example)
      AOS.refresh();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loader /> // show loader while loading is true
        ) : (
          <>
            <Top />
            <div className="page-wrapper">
              <Topbar />
              <Header
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleMenuu={toggleMenuu}
                menuOpenn={menuOpenn}
              />
              <MobileMenu closeMenu={closeMenu} menuOpen={menuOpen} />
              <OffCanvas closeMenuu={closeMenuu} menuOpenn={menuOpenn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <ScrolltoTop />
              <TemplateOption />
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
