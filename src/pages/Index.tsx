import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import TeamSection from '../components/home/TeamSection';
import VideoSection from '../components/home/VideoSection';
import PricingSection from '../components/home/PricingSection';
import AppointmentSection from '../components/home/AppointmentSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import BlogSection from '../components/home/BlogSection';

const Index = () => (
  <>
    <Helmet>
      <title>Eyora - Complete Eye Care For Every Stage Of Life</title>
      <meta name="description" content="Experience comprehensive eye care from our team of specialized ophthalmologists. Advanced diagnostics, personalized treatment plans, and compassionate care." />
    </Helmet>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhatWeDoSection />
    <WhyChooseSection />
    <TeamSection />
    <VideoSection />
    <PricingSection />
    <AppointmentSection />
    <TestimonialsSection />
    <FAQSection />
    <BlogSection />
  </>
);

export default Index;
