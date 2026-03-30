import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SectionLabel from '../components/SectionLabel';
import EyoraButton from '../components/EyoraButton';
import WhyChooseSection from '../components/home/WhyChooseSection';
import TeamSection from '../components/home/TeamSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import AppointmentSection from '../components/home/AppointmentSection';
import AboutTestimonials from '../components/about/AboutTestimonials';
import { Eye, Heart, Phone } from 'lucide-react';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceFAQSection from '@/components/ServiceFAQSection';
import PricingAppointmentBlock from '@/components/PricingAppointmentBlock';
import TrustedCareSection from '@/components/TrustedCareSection';
import ScheduleSection from '@/components/ScheduleSection';
import ApproachSection from '@/components/ApproachSection';
import WhatWeDoSection from '../components/about/WhatWeDoSection';
import AboutHeroSection from '../components/about/AboutHeroSection';


const About = () => (
  <>
    <Helmet>
      <title>About Us - Eyora Eye Care</title>
      <meta name="description" content="Learn about Eyora Eye Care - trusted ophthalmologists dedicated to providing advanced, reliable eye care services." />
    </Helmet>
    <div className="pt-0">
      <PageBanner title="About Us" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <AboutHeroSection />

      <ApproachSection />
      <TrustedCareSection />
      <ScheduleSection />
      <WhatWeDoSection />
      <TeamSection />
      <ServiceFAQSection />
      <ServiceTestimonials />
    </div>
  </>
);

export default About;
