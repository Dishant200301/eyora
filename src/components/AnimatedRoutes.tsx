import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "../pages/Index";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
import Team from "../pages/Team";
import TeamDetails from "../pages/TeamDetails";
import Pricing from "../pages/Pricing";
import NotFound from "../pages/NotFound";
import { useScrollReveal } from "../hooks/useScrollReveal";

const AnimatedRoutes = () => {
  const location = useLocation();
  useScrollReveal();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Index />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <About />
          </motion.div>
        } />
        <Route path="/services" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Services />
          </motion.div>
        } />
        <Route path="/services/:id" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <ServiceDetails />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Blog />
          </motion.div>
        } />
        <Route path="/blog/:id" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <BlogDetails />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Contact />
          </motion.div>
        } />
        <Route path="/appointment" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Appointment />
          </motion.div>
        } />
        <Route path="/team" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Team />
          </motion.div>
        } />
        <Route path="/team/:id" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <TeamDetails />
          </motion.div>
        } />
        <Route path="/pricing" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Pricing />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
