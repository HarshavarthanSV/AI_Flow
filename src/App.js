import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import About from "./components/About";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Stats />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;