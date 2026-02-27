import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Terms from "./components/pages/Terms";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ScrollToTop from "./components/ui/ScrollToTop";
import Careers from "./components/pages/Careers";
import Contact from "./components/pages/Contact";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="pt-20 min-h-screen bg-black text-white">{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/about-us"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/terms-and-conditions"
        element={
          <Layout>
            <Terms />
          </Layout>
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path="/careers"
        element={
          <Layout>
            <Careers />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}
