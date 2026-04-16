import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/modules/core/components/ui/sonner";
import { Toaster } from "@/modules/core/components/ui/toaster";
import { TooltipProvider } from "@/modules/core/components/ui/tooltip";

import { Layout, NotFoundPage } from "./modules/core";
import { HomePage } from "./modules/home";
import { AboutPage } from "./modules/about";
import { ServicesPage, ServiceDetailsPage } from "./modules/services";
import { BlogPage, BlogDetailsPage } from "./modules/blog";
import { ContactPage } from "./modules/contact";
import { AppointmentsPage } from "./modules/appointments";
import { TeamPage, TeamDetailsPage } from "./modules/team";
import { PricingPage } from "./modules/pricing";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/appointment" element={<AppointmentsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:id" element={<TeamDetailsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
