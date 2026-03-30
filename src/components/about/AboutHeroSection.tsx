import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import EyoraButton from '../EyoraButton';

/* ─── Google "G" logo inline SVG ──────────────────────── */
const GoogleLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.3425 16.7358H35V16.5H20V23.5H29.4192C28.0442 27.4433 24.3525 30.1667 20 30.1667C14.3975 30.1667 9.83333 25.6025 9.83333 20C9.83333 14.3975 14.3975 9.83333 20 9.83333C22.5758 9.83333 24.9233 10.7808 26.7133 12.3358L31.785 7.26417C28.69 4.39917 24.5558 2.66667 20 2.66667C10.395 2.66667 2.66667 10.395 2.66667 20C2.66667 29.605 10.395 37.3333 20 37.3333C29.605 37.3333 37.3333 29.605 37.3333 20C37.3333 18.8825 37.2133 17.7925 37.0108 16.7358H36.3425Z" fill="#FFC107"/>
    <path d="M4.54834 12.245L10.3867 16.5817C11.8742 12.8358 15.6217 10.1667 20 10.1667C22.5758 10.1667 24.9233 11.1142 26.7133 12.6692L31.785 7.5975C28.69 4.7325 24.5558 3 20 3C13.0642 3 7.08668 7.01417 4.54834 12.245Z" fill="#FF3D00"/>
    <path d="M20 37.3333C24.4558 37.3333 28.5133 35.6717 31.5867 32.9108L26.0408 28.2775C24.3033 29.5758 22.185 30.3333 20 30.3333C15.665 30.3333 11.985 27.63 10.5975 23.71L4.82501 28.1775C7.33584 33.5267 13.3717 37.3333 20 37.3333Z" fill="#4CAF50"/>
    <path d="M37.0108 16.7358H36.3425H35V16.5H20V23.5H29.4192C28.7592 25.3975 27.5367 27.0458 25.9367 28.2167L25.9392 28.215L31.485 32.8483C31.0675 33.2258 37.3333 28.3333 37.3333 20C37.3333 18.8825 37.2133 17.7925 37.0108 16.7358Z" fill="#1976D2"/>
  </svg>
);

/* ─── Star icon for ratings ──────────────────────── */
const StarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.5 1.61804L10.0206 6.29551L10.1167 6.59098H10.4281H15.3475L11.3613 9.48851L11.1107 9.67062L11.2068 9.96609L12.7274 14.6436L8.74124 11.746L8.5 11.5695L8.25876 11.746L4.27261 14.6436L5.79323 9.96609L5.88926 9.67062L5.63874 9.48851L1.65249 6.59098H6.57191H6.88327L6.97939 6.29551L8.5 1.61804Z"
      fill="#00ADEE"
      stroke="#00ADEE"
      strokeWidth="0.5"
    />
  </svg>
);

/* ─── Phone icon SVG ──────────────────────── */
const PhoneCallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.861 6.01984 21.7721 7.91101 22 9.94M21.97 16.67C21.97 17.14 21.86 17.62 21.63 18.09C21.4 18.56 21.1 19 20.71 19.41C20.03 20.14 19.28 20.67 18.43 21C17.58 21.33 16.67 21.5 15.69 21.5C14.24 21.5 12.69 21.15 11.05 20.44C9.41 19.73 7.77 18.76 6.15 17.53C4.52 16.29 3.01 14.91 1.62 13.39L1.59 13.36C-0.91 10.67 -0.26 6.8 2.82 5.33L4.61 4.06C4.93 3.84 5.29 3.72 5.67 3.72C6.17 3.72 6.61 3.92 6.94 4.28L9.47 7.22C9.76 7.54 9.92 7.94 9.92 8.37C9.92 8.89 9.69 9.37 9.28 9.71L8.29 10.53C8.16 10.64 8.1 10.79 8.1 10.95C8.1 11.03 8.11 11.12 8.14 11.21C8.24 11.46 8.47 11.81 8.85 12.27C9.57 13.12 10.25 13.82 10.91 14.38C11.6 14.97 12.33 15.52 13.11 16.01C13.35 16.16 13.57 16.24 13.78 16.24C13.99 16.24 14.16 16.15 14.29 16.05L15.09 15.35C15.44 15.05 15.86 14.88 16.31 14.88C16.71 14.88 17.08 15.02 17.39 15.28L20.48 17.65C20.73 17.84 20.92 18.1 21.03 18.39C21.34 18.39 21.97 16.67 21.97 16.67Z" fill="white"/>
    {/* Arrow overlay */}
    <path d="M18 2L22 2L22 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L16 8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

/* ─── Eye/play button icon ──────────────────────── */
const PlayEyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Curved Dotted Arrows ──────────────────────── */
const CurvedArrowTop = () => (
  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8 C -5 25, 0 50, 20 55 C 40 60, 50 35, 59 17" stroke="#15224D" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round"/>
    <path d="M51 16 L61 13 L56 22" stroke="#15224D" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CurvedArrowBottom = () => (
  <svg width="60" height="55" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5 C 15 25, 30 35, 45 42" stroke="#15224D" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round"/>
    <path d="M38 36 L47 43 L38 48" stroke="#15224D" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AboutHeroSection = () => {
  return (
    <section className="bg-[#f8f9fa] pt-[30px] xl:pt-[40px] pb-[60px] xl:pb-[0px] overflow-visible">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[50px] max-w-[1400px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-[50px] xl:gap-[70px] items-start">

          {/* ════════════════════════════════════════════ LEFT SIDE — Images ═ */}
          <AnimateOnScroll className="w-full xl:w-[50%] relative">
            <div className="relative flex gap-[12px] sm:gap-[20px] min-h-[420px] sm:min-h-[550px] xl:min-h-[700px]">

              {/* ── Left column ────────────────────────────────────── */}
              <div className="relative w-[48%] xl:w-[46%] flex flex-col">
                {/* Main Image 1 */}
                <div className="relative rounded-[16px] xl:rounded-[20px] overflow-hidden flex-shrink-0 shine-hover h-[260px] sm:h-[350px] xl:h-[508px]">
                  <img
                    src="/images/about/about-main.jpg"
                    alt="Eye examination"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Need Help floating card — under image 1 */}
                <div className="mt-[25px] sm:mt-[40px] xl:mt-[50px] pr-0 xl:pr-[60px]">
                  <div className="bg-white rounded-[16px] xl:rounded-[20px] py-[12px] px-[12px] xl:py-[17px] xl:px-[15px] flex flex-col sm:flex-row items-start sm:items-center gap-[10px] xl:gap-[15px] shadow-[0_8px_30px_rgba(21,34,77,0.06)]">
                    <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-[#15224D] flex items-center justify-center shrink-0 [&>svg]:w-[18px] [&>svg]:h-[18px] xl:[&>svg]:w-[24px] xl:[&>svg]:h-[24px]">
                      <PhoneCallIcon />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#15224D] font-semibold text-[15px] xl:text-[19.4px] leading-[1.2] xl:leading-[24px]">Need help ?</span>
                      <span className="text-[#424C6F] font-normal text-[12.5px] xl:text-[13.5px] leading-[1.4] xl:leading-[26px] sm:whitespace-nowrap">+1 (123) 456-789</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right column ───────────────────────────────────── */}
              <div className="relative w-[52%] xl:w-[54%]">
                {/* Google Review floating card — positioned at top */}
                <div className="absolute top-[-15px] left-[-15px] sm:left-[-30px] xl:top-[-10px] xl:left-[-50px] z-20 ">
                  <div className="bg-white rounded-[14px] xl:rounded-[20px] px-[12px] py-[10px] xl:px-[20px] xl:py-[15px] shadow-[0_10px_30px_rgba(21,34,77,0.08)] flex items-center gap-[10px] xl:gap-[15px]">
                    <div className="w-[28px] h-[28px] xl:w-[40px] xl:h-[40px] [&>svg]:w-full [&>svg]:h-full shrink-0">
                      <GoogleLogo />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#15224D] font-medium text-[13px] sm:text-[15px] xl:text-[18.4px] leading-[1.2] xl:leading-[26px]">4.9/5 Review</span>
                      <div className="flex items-center gap-[2px] xl:gap-[5px] mt-[4px] xl:mt-0 [&>svg]:w-[12px] [&>svg]:h-[12px] xl:[&>svg]:w-[17px] xl:[&>svg]:h-[17px]">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curved Arrow — top right */}
                <div className="absolute top-[50px] right-[-5px] xl:top-[80px] xl:right-[20px] z-10 opacity-70 scale-75 xl:scale-100 origin-top-right">
                  <CurvedArrowTop />
                </div>

                {/* Second image with thick border frame */}
                <div className="mt-[80px] sm:mt-[120px] xl:mt-[182px]">
                  <div className="border-[5px] sm:border-[6px] xl:border-[8px] border-[#F5F5F5] rounded-[20px] sm:rounded-[24px] xl:rounded-[30px] relative ml-0 sm:ml-[-15px] xl:ml-[-30px]">
                    <div className="rounded-[15px] sm:rounded-[18px] xl:rounded-[22px] overflow-hidden shine-hover h-[230px] sm:h-[320px] xl:h-[445px]">
                      <img
                        src="/images/about/about-secondary.jpg"
                        alt="Advanced eye care technology"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Curved Arrow — bottom left (between components) */}
                <div className="absolute bottom-[20px] left-[-30px] sm:left-[-50px] xl:left-[-70px] z-10 opacity-60 scale-75 xl:scale-100 origin-bottom-left hidden sm:block">
                  <CurvedArrowBottom />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ════════════════════════════════════════════ RIGHT SIDE — Content */}
          <div className="w-full xl:w-[50%] pt-0 xl:pt-[40px]">
            <AnimateOnScroll delay={0.2}>
              {/* Section label */}
              <div className="flex items-center gap-[8px] mb-[12px] xl:mb-[12px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                <span className="text-[#15224D] text-[14px] xl:text-[15.5px] font-medium leading-[22px]">About Eyecare</span>
              </div>

              {/* Main heading */}
              <h2 className="text-[#15224D] font-medium text-[28px] sm:text-[36px] xl:text-[50.6px] leading-[1.25] xl:leading-[62px] tracking-[-0.52px] mb-[15px] xl:mb-[22px]">
                Your Vision Matters to{' '}
                <br className="hidden xl:block" />
                Our Skilled Specialists
              </h2>

              {/* Description */}
              <p className="text-[#424C6F] font-normal text-[14.5px] sm:text-[15.1px] leading-[24px] xl:leading-[26px] mb-[25px] xl:mb-[40px] max-w-[540px]">
                Our dedicated team brings years of clinical expertise to every appointment, providing personalized eye care tailored to your unique needs.
              </p>

              {/* Quote card */}
              <div className="bg-white rounded-[20px] p-[10px] flex flex-col xl:flex-row items-center shadow-[0_15px_40px_rgba(21,34,77,0.06)] mb-[30px] xl:mb-[40px] max-w-full xl:max-w-[570px] h-auto xl:h-[154px]">
                {/* Thumbnail image wrapper */}
                <div className="relative w-full xl:w-[152px] h-[220px] sm:h-[300px] xl:h-[134px] shrink-0">
                  <div className="w-full h-full rounded-[10px] overflow-hidden shine-hover border border-gray-100/50">
                    <img
                      src="/images/about/about-quote-woman.png"
                      alt="Quote author"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Play/Eye button overlay — Repositions for mobile vs desktop */}
                  <div className="absolute left-1/2 bottom-[-28px] -translate-x-1/2 xl:left-auto xl:bottom-auto xl:top-1/2 xl:right-[-28px] xl:-translate-y-1/2 xl:translate-x-0 z-10 w-[56px] h-[56px]">
                    <div className="w-full h-full rounded-full bg-[#00ADEE] border-[3px] border-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,173,238,0.25)]">
                      <PlayEyeIcon />
                    </div>
                  </div>
                </div>

                {/* Quote text */}
                <div className="pt-[45px] xl:pt-[10px] pb-[15px] xl:pb-[10px] px-[15px] xl:pl-[50px] xl:pr-[15px] flex-1 w-full text-center xl:text-left">
                  <p className="text-[#15224D] font-medium text-[15px] xl:text-[17.4px] leading-[24px] xl:leading-[25px] max-w-full xl:max-w-[358px] inline-block text-left">
                    "We create thought fully design apartment 
                    that blend comfort, modern architecture, & 
                    quality living experience for familie."
                  </p>
                </div>
              </div>

              {/* Horizontal divider */}
              <div className="w-full max-w-[570px] h-[1px] bg-[rgba(21,34,77,0.1)] mb-[30px] xl:mb-[40px]" />

              {/* Bottom row: Button + Signature */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[30px]">
                <EyoraButton to="/contact" text="Contact Us Now" className="text-[14.5px] xl:text-[15.9px] font-semibold" />

                {/* Signature area */}
                <div className="flex flex-col">
                  <img
                    src="/images/about/signeture.png"
                    alt="Michael K. signature"
                    className="h-[20px] xl:h-[24px] w-auto object-contain mb-[4px] xl:mb-[6px] self-start"
                  />
                  <span className="text-[#424C6F] font-normal text-[14px] xl:text-[15.4px] leading-[26px]">Financial Consultant</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
