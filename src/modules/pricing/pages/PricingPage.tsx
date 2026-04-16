import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import PricingCards from '../components/PricingCards';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import PricingAppointmentBlock from '@/modules/core/components/PricingAppointmentBlock';
import AppointmentSection from '@/modules/core/components/AppointmentSection';
import BlogSection from '@/modules/core/components/BlogSection';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Our pricing - Eyora Eye Care</title>
        <meta name="description" content="Affordable eye care pricing plans at Eyora. Choose from Basic, Standard, and Premium plans for comprehensive vision care." />
      </Helmet>
      <div className="pt-0">
        <PageBanner title="Our pricing" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing Plan' }]} />

        <PricingCards />

        <WhyChooseSection />
        <PricingAppointmentBlock />
        <TrustedCareSection />
        <ServiceFAQSection />
        <ServiceTestimonials />
        <BlogSection />
        <AppointmentSection />
      </div>
    </>
  );
};

export default Pricing;
