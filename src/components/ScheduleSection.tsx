import React from 'react';
import { Clock, User, Eye, Heart, Glasses, ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import SectionLabel from './SectionLabel';
import EyoraButton from './EyoraButton';

const ScheduleSection = () => {
  const features = [
    {
      icon: User,
      title: 'Personalize Vision Solutions',
    },
    {
      icon: Eye,
      title: 'Advanced Vision Testing',
    },
    {
      icon: Glasses,
      title: 'Affordable Eye Glass',
    },
    {
      icon: Heart,
      title: 'Patient-Focus Approach',
    },
  ];

    return (
    <section className="container-padding max-w-[1500px] px-0 xl:px-[30px] py-0">
      <div
        className="relative xl:rounded-[30px] overflow-hidden text-white p-4 md:p-8 lg:p-8 xl:p-16"
        style={{
          backgroundImage: `url('/images/common/footer.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Left Content */}
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Our Schedule" light />
                <h2 className="text-[28px] md:text-[42px] lg:text-[36px] xl:text-[48px] font-sans font-medium leading-tight mb-6 max-w-[700px]">
                  Our Flexible Schedule for Your Convenience
                </h2>
                <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-[650px]">
                  We understand that your time is valuable, which is why our clinic offers flexible scheduling options to accommodate your busy lifestyle.
                </p>
                <EyoraButton
                  text="Book An Appointment"
                  to="/contact"
                  hoverStyle="default"
                />
              </AnimateOnScroll>
            </div>

            {/* Right Card */}
            <div className="flex justify-center md:justify-start lg:justify-end">
              <AnimateOnScroll delay={0.2}>
                <div className="bg-[#1B2A5E] border border-white/10 rounded-[16px] md:rounded-[20px] p-6 md:p-8 w-full max-w-[450px]">
                  {/* Mobile Header */}
                  <div className="flex md:hidden items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#00ADEE] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[16px] font-semibold">Schedule a hours:</span>
                  </div>

                  {/* Desktop Header */}
                  <div className="hidden md:flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#00ADEE] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[18px] font-semibold">OPENING HOURS</span>
                  </div>

                  {/* Mobile Schedule */}
                  <div className="md:hidden space-y-0 mb-6">
                    <div className="flex items-start justify-between border-b border-white/10 py-4">
                      <span className="text-white/90 font-medium text-[14px]">Mon to Fri:</span>
                      <span className="text-white/70 text-[14px] text-right">09:00 AM – 07:00 PM</span>
                    </div>
                    <div className="flex items-start justify-between border-b border-white/10 py-4">
                      <span className="text-white/90 font-medium text-[14px]">Sat to Sun:</span>
                      <span className="text-white/70 text-[14px] text-right">09:00 AM – 07:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-white/90 font-medium text-[14px]">Emergency:</span>
                      <span className="text-white/70 text-[14px]">24/7 Hours</span>
                    </div>
                  </div>

                  {/* Desktop Schedule */}
                  <div className="hidden md:block space-y-5 mb-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-white/90 font-medium">Mon to Fri:</span>
                      <span className="text-white/70">09:00 AM - 06:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-white/90 font-medium">Sat to Sun:</span>
                      <span className="text-white/70">10:00 AM - 04:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 font-medium">Emergency:</span>
                      <span className="text-white/70">24/7 OPEN</span>
                    </div>
                  </div>

                  {/* Mobile Emergency Button */}
                  <div className="md:hidden text-center">
                    <EyoraButton
                      text="24/7 Services for Emergency"
                      to="/contact"
                      fullWidth
                      hoverStyle="default"
                      
                    />
                  </div>

                  {/* Desktop Button */}
                  <div className="hidden md:block">
                    <EyoraButton
                      text="GET AN APPOINTMENT"
                      to="/contact"
                      fullWidth
                      hoverStyle="default"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Bottom Features - Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/10">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4 group">
                  <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center transition-all duration-300 group-hover:bg-white flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#15224D]" />
                  </div>
                  <h4 className="text-[15px] md:text-[16px] font-semibold leading-tight">
                    {feature.title}
                  </h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
