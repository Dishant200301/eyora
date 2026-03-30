import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    const hasErrors = Object.values(form).some(v => v.trim() === '');
    
    if (!hasErrors) {
      setIsSuccess(true);
      // Optional: Handle API submission logic here
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Eyora Eye Care</title>
        <meta name="description" content="Get in touch with Eyora Eye Care. Contact us for appointments, inquiries, or expert eye care guidance." />
      </Helmet>
      <div className="pt-0 relative overflow-hidden">
        <PageBanner title="Contact us" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

        {/* Contact Info Cards */}
        <section className="bg-[#F8F9FA] py-[50px] md:py-[80px] lg:py-[120px]">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[60px] lg:mb-[80px]">
              
              {/* Email Card */}
              <AnimateOnScroll delay={0}>
                <a 
                  href="mailto:domain@mail.com" 
                  className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
                  style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
                >
                  <div className="mb-[20px]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">E-mail Us!</h3>
                  <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">domain@mail.com</p>
                  <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
                    E-Mail Us
                  </div>
                </a>
              </AnimateOnScroll>

              {/* Call Card */}
              <AnimateOnScroll delay={0.1}>
                <a 
                  href="tel:+91132465798" 
                  className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
                  style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
                >
                  <div className="mb-[20px]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      <path d="M14.05 2l.94 2.94L18 5.86l-2.94.94L14.05 9l-.94-2.94L10.17 5.12l2.94-.94z" fill="#15224D" stroke="none"/>
                    </svg>
                  </div>
                  <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Call Us!</h3>
                  <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">+91132465798</p>
                  <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
                    Call Now
                  </div>
                </a>
              </AnimateOnScroll>

              {/* Visit Card */}
              <AnimateOnScroll delay={0.2}>
                <a 
                  href="https://maps.google.com/?q=123+Vision+Care+Street,+State,+05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
                  style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
                >
                  <div className="mb-[20px]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Visited Today!</h3>
                  <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">123 Vision Care Street, State, 05</p>
                  <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
                    Visit Us
                  </div>
                </a>
              </AnimateOnScroll>

              {/* Hours Card */}
              <AnimateOnScroll delay={0.3}>
                <a 
                  href="#"
                  className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
                  style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
                >
                  <div className="mb-[20px]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Opening Hours!</h3>
                  <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">Mon-Sat:- 9:00 AM - 7:00 PM</p>
                  <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
                    24/7 Support
                  </div>
                </a>
              </AnimateOnScroll>
            </div>

            {/* Map + Form */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start">
              
              {/* Map Layout */}
              <AnimateOnScroll className="w-full h-full">
                <div 
                  className="rounded-[20px] overflow-hidden h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] w-full"
                  style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241264871845!2d-73.98784368459377!3d40.75797477932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x517020050e56b635!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2} className="w-full">
                <div className="py-[10px] lg:py-[20px]">
                  {/* Section Label */}
                  <div className="flex items-center gap-[8px] mb-[15px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
                    <span className="text-[#15224D] text-[15px] font-medium tracking-wide">Contact Us</span>
                  </div>
                  
                  <h2 
                    className="text-[#15224D] mb-[25px] lg:mb-[40px] font-sans"
                    style={{ 
                      fontSize: 'clamp(30px, 4vw, 44px)', 
                      lineHeight: '1.2', 
                      letterSpacing: '-1px',
                      maxWidth: '500px'
                    }}
                  >
                    Get in Touch for Expert & Trusted Eye Care
                  </h2>

                  {/* Form */}
                  <form 
                    className="space-y-[20px]" 
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <div className="flex flex-col">
                        <input 
                          type="text" 
                          placeholder="First Name" 
                          className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.firstName.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                          style={{ backgroundColor: 'white' }}
                          value={form.firstName} 
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })} 
                        />
                        {hasSubmitted && !form.firstName.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                      </div>
                      
                      <div className="flex flex-col">
                        <input 
                          type="text" 
                          placeholder="Last Name" 
                          className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.lastName.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                          style={{ backgroundColor: 'white' }}
                          value={form.lastName} 
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })} 
                        />
                        {hasSubmitted && !form.lastName.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <div className="flex flex-col">
                        <input 
                          type="email" 
                          placeholder="Enter Email Address*" 
                          className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.email.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                          style={{ backgroundColor: 'white' }}
                          value={form.email} 
                          onChange={(e) => setForm({ ...form, email: e.target.value })} 
                        />
                        {hasSubmitted && !form.email.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                      </div>

                      <div className="flex flex-col">
                        <input 
                          type="tel" 
                          placeholder="Enter Phone Number*" 
                          className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.phone.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                          style={{ backgroundColor: 'white' }}
                          value={form.phone} 
                          onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                        />
                        {hasSubmitted && !form.phone.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <textarea 
                        placeholder="Message" 
                        rows={6} 
                        className={`w-full px-[20px] py-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.message.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors resize-none`}
                        style={{ backgroundColor: 'white' }}
                        value={form.message} 
                        onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      />
                      {hasSubmitted && !form.message.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                    </div>

                    <div className="pt-[10px]">
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto px-[35px] py-[18px] rounded-[100px] text-white text-[16px] font-bold transition-colors duration-300 bg-[#00ADEE] hover:bg-[#15224D] inline-block"
                      >
                        Submit Message
                      </button>
                    </div>

                    {/* Error Summary Message */}
                    {hasSubmitted && Object.values(form).some(v => v.trim() === '') && (
                      <div className="w-full border border-[#FA6E6E] rounded-[30px] sm:rounded-full py-[12px] px-[20px] text-center mt-[20px]">
                        <span className="text-[#FA6E6E] text-[14.5px] font-normal leading-tight">One or more fields have an error. Please check and try again.</span>
                      </div>
                    )}

                    {/* Success Message */}
                    {isSuccess && (
                      <div className="w-full border border-[#4CAF50] rounded-[30px] sm:rounded-full py-[12px] px-[20px] mt-[20px] text-center">
                        <span className="text-[#4CAF50] text-[15px] font-normal leading-tight">Thank you for your message. It has been sent.</span>
                      </div>
                    )}

                  </form>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
