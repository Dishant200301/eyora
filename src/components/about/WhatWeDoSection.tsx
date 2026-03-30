import React from 'react';
import SectionLabel from '../SectionLabel';
import { Star } from 'lucide-react';

const WhatWeDoSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* CONTENT & CARDS BLOCK */}
          <div className="w-full lg:w-[45%] flex flex-col gap-10">
            {/* Header Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00ADEE]" />
                <span className="text-[#15224D] font-medium text-[15px] uppercase tracking-wide">What We Do</span>
              </div>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-sans font-medium text-[#15224D] leading-[1.1] mb-6">
                Caring for Your Eyes <br /> with Expertise Always
              </h2>
              <p className="text-[#424C6F] text-[16px] sm:text-[17px] leading-[1.6] max-w-[540px]">
                At our clinic, we prioritize your vision and eye health. With advanced technology and experienced specialists, we provide personalized care to ensure your eyes stay healthy and your vision stays clear
              </p>
            </div>

            {/* Stats Cards Row (Mobile: column, Tablet+: row) */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Card 1: Patients Stats */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h4 className="text-[#15224D] font-bold text-[28px] leading-[1]">250+</h4>
                        <p className="text-[14px] font-medium text-[#424C6F]">Our Patients</p>
                      </div>
                      <div className="flex -space-x-3 isolate">
                        <img src="/images/about/about-main.jpg" alt="Patient" className="w-[38px] h-[38px] rounded-full border-2 border-white object-cover" />
                        <img src="/images/about/about-secondary.jpg" alt="Patient" className="w-[38px] h-[38px] rounded-full border-2 border-white object-cover" />
                        <img src="/images/about/mission-hover.png" alt="Patient" className="w-[38px] h-[38px] rounded-full border-2 border-white object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#15224D] font-medium text-[15px]">Patient Satisfaction</span>
                    <span className="text-[#15224D] font-bold text-[15px]">95%</span>
                  </div>
                  <div className="w-full h-[8px] bg-[#00ADEE]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00ADEE] rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>

              {/* Card 2: Success Rate */}
              <div className="bg-[#15224D] rounded-[20px] p-6 flex-1 flex flex-col items-center justify-center text-center text-white min-h-[200px]">
                <div className="relative w-[100px] h-[100px] mb-4 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
                    <circle cx="50" cy="50" r="44" stroke="#00ADEE" strokeWidth="6" fill="transparent" strokeDasharray={2 * Math.PI * 44} strokeDashoffset={(2 * Math.PI * 44) * (1 - 0.82)} strokeLinecap="round" />
                  </svg>
                  <span className="font-bold text-[22px]">82%</span>
                </div>
                <p className="text-white font-bold text-[17px]">Success Treatment</p>
              </div>
            </div>
          </div>

          {/* IMAGES BLOCK */}
          <div className="w-full lg:w-[55%] flex flex-col md:flex-row gap-6 h-full">
            {/* Main Image (Large) */}
            <div className="w-full md:w-[62%] rounded-[20px] overflow-hidden">
              <img 
                src="/images/about/about-main.jpg" 
                alt="Expert Eye Care" 
                className="w-full h-full object-cover min-h-[450px] lg:min-h-[580px]"
              />
            </div>

            {/* Small Column (Equipment + Child Image) */}
            <div className="w-full md:w-[38%] flex flex-row md:flex-col gap-2 md:gap-6">
              {/* Equipment Card */}
              <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100 flex-1 md:flex-none flex flex-col items-start min-h-[340px] md:min-h-0">
                <div className="w-full h-[100px] flex items-center justify-center mb-6">
                  <img src="/images/about/phoropter-device.jpg" alt="Equipment" className="w-[85%] h-[85%] object-contain" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-[20px] h-[20px] fill-[#00ADEE] text-[#00ADEE]" />)}
                </div>
                <p className="text-[#424C6F] text-[15.5px] leading-[1.6] font-normal text-left">
                  Dedicated support team always ready to assist your vision care needs
                </p>
              </div>

              {/* Child Image */}
              <div className="rounded-[20px] overflow-hidden flex-1 md:flex-none h-[340px] md:h-auto lg:flex-1">
                <img 
                  src="/images/about/goal-hover.png" 
                  alt="Child Eye Care" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
