import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import EyoraButton from '../components/EyoraButton';
import ServiceTestimonials from '../components/ServiceTestimonials';
import { Check, Clock, Calendar as CalendarIcon } from 'lucide-react';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ServiceFAQSection from '@/components/ServiceFAQSection';
import TrustedCareSection from '@/components/TrustedCareSection';
import PricingAppointmentBlock from '@/components/PricingAppointmentBlock';

const pricingPlans = [
  {
    image: '/images/services/service-1.jpg',
    price: '$29',
    title: 'Basic Eye Care Plan',
    subtitle: 'Ideal for routine checkups preventive care',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'General eye health evaluation', 'Priority appointment scheduling']
  },
  {
    image: '/images/services/service-2.jpg',
    price: '$59',
    title: 'Advanced Vision Care Plan',
    subtitle: 'Ideal for routine checkups preventive care',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'General eye health evaluation', 'Priority appointment scheduling']
  },
  {
    image: '/images/services/service-3.jpg',
    price: '$89',
    title: 'Premium Treatment Plan',
    subtitle: 'Ideal for routine checkups preventive care',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'General eye health evaluation', 'Priority appointment scheduling']
  }
];

const faqData = [
  {
    question: "1. How frequently should I have an eye examination?",
    answer: "For most adults, a comprehensive eye exam every one to two years is recommended. Children and seniors or individuals with specific eye conditions may need them more frequently."
  },
  {
    question: "2. Do I need to be referred by a doctor for an examination?",
    answer: "No referral is typically necessary. You can easily book an appointment online or contact our office directly to schedule your eye checkup at your earliest convenience."
  },
  {
    question: "3. Can I be seen as a private patient for consultation?",
    answer: "Absolutely. We accept both public and private patients, ensuring everyone receives the highest standard of personalized eye care and comprehensive treatment."
  },
  {
    question: "4. Do you assist home health care tracking patient portals?",
    answer: "Yes, we provide secure patient portals that allow you to track your prescriptions, appointment history, and communicate directly with our clinical staff from home."
  }
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <Helmet>
        <title>Our pricing - Eyora Eye Care</title>
        <meta name="description" content="Affordable eye care pricing plans at Eyora. Choose from Basic, Standard, and Premium plans for comprehensive vision care." />
      </Helmet>
      <div className="pt-0">
        <PageBanner title="Our pricing" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing Plan' }]} />

        {/* Pricing Cards Section */}
        <section className="bg-[#f8f9fa] py-[50px] md:py-[80px] lg:py-[120px]">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] mb-[40px] lg:mb-[60px]">
              {pricingPlans.map((plan, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-[20px] shadow-[0_5px_30px_rgba(21,34,77,0.06)] overflow-hidden flex flex-col items-center pb-[40px] pt-[15px] px-[15px]">

                    {/* Image Area */}
                    <div className="relative w-full h-[240px] rounded-[15px]">
                      <img src={plan.image} alt={plan.title} className="w-full h-full object-cover rounded-[15px]" />

                      {/* Price Bubble Overlay */}
                      <div className="absolute right-[25px] bottom-[-25px] w-[70px] h-[70px] bg-[#15224D] rounded-full flex items-center justify-center text-white z-10 border-4 border-white">
                        <span className="font-bold text-[24px] leading-none">{plan.price}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="px-[15px] lg:px-[25px] pt-[40px] w-full text-left flex flex-col flex-1">
                      <div className="flex items-center gap-[6px] border border-gray-100 rounded-full py-[6px] px-[15px] w-max mb-[20px]">
                        <span className="w-[5px] h-[5px] rounded-full bg-[#00ADEE]" />
                        <span className="text-[#424C6F] font-medium text-[13px]">Per Month</span>
                      </div>
                      <h3 className="text-[#15224D] font-bold text-[22px] mb-[12px] leading-[1.2]">{plan.title}</h3>
                      <p className="text-[#424C6F] font-normal text-[15px] leading-[24px] mb-[25px] h-[48px] overflow-hidden">{plan.subtitle}</p>

                      <div className="w-full h-px bg-[#15224D]/5 mb-[25px]" />

                      <ul className="space-y-[15px] mb-[45px] flex-1">
                        {plan.features.map((ft, j) => (
                          <li key={j} className="flex items-start gap-[12px]">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#00ADEE] text-white flex items-center justify-center shrink-0 mt-[3px]">
                              <Check className="w-[12px] h-[12px]" strokeWidth={4} />
                            </div>
                            <span className="text-[#424C6F] font-normal text-[14.5px] leading-[22px]">{ft}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="w-full flex justify-start">
                        <EyoraButton text="Get Started" className="w-auto h-[45px] px-[25px]" hoverStyle="darkBlue" />
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Info Row 1 */}
            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-[30px] lg:gap-[50px] mt-[10px]">
                <div className="flex items-center gap-[10px]">
                  <CalendarIcon className="w-[18px] h-[18px] text-[#00ADEE]" strokeWidth={2} />
                  <span className="text-[#424C6F] font-medium text-[14.5px]">Get 30 day free trial</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[16px] h-[16px] rounded-full border-[1.5px] border-[#00ADEE] text-[#00ADEE] flex items-center justify-center text-[10px] font-bold shrink-0">$</div>
                  <span className="text-[#424C6F] font-medium text-[14.5px]">No any hidden fees pay</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Clock className="w-[18px] h-[18px] text-[#00ADEE]" strokeWidth={2} />
                  <span className="text-[#424C6F] font-medium text-[14.5px]">You can cancel anytime</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Appointment Block */}
        <PricingAppointmentBlock />
        <TrustedCareSection />
        <ServiceFAQSection />

        <ServiceTestimonials />

      </div>
    </>
  );
};

export default Pricing;
