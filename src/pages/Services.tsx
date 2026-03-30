import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SectionLabel from '../components/SectionLabel';
import { services } from '../data/service';
import WhyChooseSection from '../components/home/WhyChooseSection';
import FAQSection from '../components/home/FAQSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { Plus, Star } from 'lucide-react';
import ArrowIcon from '../components/ArrowIcon';
import ExpertiseSection from '../components/ExpertiseSection';

import TrustedCareSection from '../components/TrustedCareSection';
import ServiceFAQSection from '../components/ServiceFAQSection';
import ServiceTestimonials from '../components/ServiceTestimonials';

const Services = () => (
  <>
    <Helmet>
      <title>Our Services - Eyora Eye Care</title>
      <meta name="description" content="Comprehensive eye care services including eye exams, contact lens fitting, retinal treatments, and more at Eyora." />
    </Helmet>
    <div className="pt-0">
      <PageBanner title="Our services" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.1}>
              <Link to={`/services/${service.id}`} className="group relative block w-full h-[454px] rounded-[20px] overflow-hidden cursor-pointer hover-lift">
                {/* Background Image */}
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(21, 34, 77, 0) 34.89%, #15224D 100%)' }} />

                {/* Eyora Contact Box */}
                <div className="absolute inset-0 p-[40px] flex flex-col justify-end translate-y-[81px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  {/* Heading & Paragraph */}
                  <h3 className="text-white font-semibold text-[19.7px] leading-[24px] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white font-normal text-[15.1px] leading-[26px]">
                    {/* The design only shows a short sentence. Depending on the original content, we line-clamp it if needed, but per the image it sits nicely. */}
                    {service.desc}
                  </p>

                  {/* Border & Read More Button - Fades in on hover */}
                  <div className="mt-[24px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col">
                    <div className="w-full h-px bg-white/20 mb-[24px]" />
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-[18px]">Read More</span>
                      <span className="w-8 h-8 rounded-full bg-[#00b4fe] flex items-center justify-center">
                        <ArrowIcon className="w-4 h-4 text-white transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <ExpertiseSection />
      <TrustedCareSection />
      <ServiceFAQSection />
      <ServiceTestimonials />
     
    </div>
  </>
);

export default Services;
