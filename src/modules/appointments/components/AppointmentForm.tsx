import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    service: false,
    date: false
  });
  
  const [showSummaryError, setShowSummaryError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check validation
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === '',
      service: formData.service.trim() === '',
      date: formData.date.trim() === ''
    };
    
    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some(err => err);
    setShowSummaryError(hasErrors);
    
    if (!hasErrors) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
    // Clear error for this field if user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({...prev, [field]: false}));
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-[50px] md:py-[80px] lg:py-[120px]">
      <div className="container-padding max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[60px]">
          
          {/* Left Side: Contact Information Wrapper */}
          <div className="w-full lg:w-[45%] xl:w-[50%]">
            <AnimateOnScroll>
              {/* Tag */}
              <div className="flex items-center gap-[8px] mb-[15px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                <span className="text-[#15224D] font-sans text-[15px] tracking-wide">Book An Appointment</span>
              </div>
              
              {/* Header */}
              <h2 className="text-[#15224D] font-sans text-[26px] sm:text-[38px] md:text-[48px] leading-[1.2] md:leading-[1.15] tracking-[-1px] md:tracking-[-1.5px] mb-[15px] md:mb-[25px]">
                Create your Appointment<br className="hidden sm:block" /> for Expert Eye Care
              </h2>
              
              {/* Subtitle Paragraph */}
              <p className="text-[#424C6F] font-normal text-[14.5px] md:text-[15.5px] leading-[24px] md:leading-[26px] mb-[30px] max-w-[500px]">
                Booking your eye care appointment is simple and convenient Experienced specialists are ready to provide personalized vision care, advanced treatments.
              </p>
              
              {/* Contact White Rounded Card */}
              <div className="bg-white rounded-[20px] p-[20px] sm:p-[30px] lg:p-[40px] shadow-[0_5px_30px_rgba(21,34,77,0.06)]">
                
                {/* Top Row: Call and Email */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  {/* Box 1 - Call Us */}
                  <a href="tel:+123456789" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max flex-1">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                      <Phone className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">Call Us!</span>
                      <span className="text-[#424C6F] font-normal text-[14.5px] truncate sm:whitespace-normal">+(123) 456 789</span>
                    </div>
                  </a>
                  
                  {/* Vertical Divider (Horizontal on mobile) */}
                  <div className="w-full sm:w-px h-px sm:h-[55px] bg-gray-200/80 my-[20px] sm:my-0 sm:mx-[20px]" />
                  
                  {/* Box 2 - Email Us */}
                  <a href="mailto:info@domainname.com" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max flex-1">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                      <Mail className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">E-mail Us!</span>
                      <span className="text-[#424C6F] font-normal text-[14.5px] truncate sm:whitespace-normal">info@dominname.com</span>
                    </div>
                  </a>
                </div>
                
                {/* Horizontal Divider line */}
                <div className="w-full h-px bg-gray-200/80 my-[25px]" />
                
                {/* Bottom Row - Visit */}
                <a href="#" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                    <MapPin className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">Visited Today!</span>
                    <span className="text-[#424C6F] font-normal text-[14.5px]">123 Vision Care Street, City Name, State, 005</span>
                  </div>
                </a>

              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Side: Form White Rounded Card */}
          <div className="w-full lg:w-[55%] xl:w-[50%] mt-[20px] lg:mt-0">
            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-[20px] p-[20px] sm:p-[30px] md:p-[60px] shadow-[0_5px_40px_rgba(21,34,77,0.08)]">
                <form className="space-y-[15px]" onSubmit={handleSubmit} noValidate>
                  
                  {/* Row 1: Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                    <div>
                      <input 
                        type="text" 
                        placeholder="First Name*" 
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.firstName ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                      />
                      {errors.firstName && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Last Name*" 
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.lastName ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                      />
                      {errors.lastName && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                  </div>
                  
                  {/* Row 2: Email */}
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail Address*" 
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.email ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                    />
                    {errors.email && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                  </div>
                  
                  {/* Row 3: Phone */}
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone no. *" 
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.phone ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                    />
                    {errors.phone && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                  </div>
                  
                  {/* Row 4: Service & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                    <div className="relative">
                      <select 
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.service ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none appearance-none ${!formData.service ? 'text-[#aaafc4]' : 'text-[#424C6F]'} focus:border-[#00ADEE] transition-colors bg-white `}
                      >
                        <option value="" disabled hidden>Select a Services</option>
                        <option value="eye-exam">Eye Examination</option>
                        <option value="surgery">Ophthalmic Surgery</option>
                        <option value="contact-lens">Contact Lenses</option>
                        <option value="pediatric">Pediatric Eye Care</option>
                      </select>
                      <ChevronDown className="absolute right-[20px] top-[29px] -translate-y-1/2 w-[16px] h-[16px] text-[#aaafc4] pointer-events-none" />
                      {errors.service && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="mm/dd/yyyy"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => {if(!e.target.value) e.target.type = 'text'}}
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.date ? 'border-[#ef4444]' : 'border-gray-200'} font-sans outline-none focus:border-[#00ADEE] transition-colors bg-white  ${!formData.date ? 'text-[#aaafc4]' : 'text-[#424C6F]'}`}
                      />
                      {!formData.date && <CalendarIcon className="hidden xl:block absolute right-[20px] top-[29px] -translate-y-1/2 w-[16px] h-[16px] text-[#aaafc4] pointer-events-none" />}
                      {errors.date && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full h-[58px] bg-[#00ADEE] text-white font-bold text-[16.5px] rounded-[10px] hover:bg-[#15224D] transition-colors mt-[10px]"
                  >
                    Make An Appointment
                  </button>

                  {/* Summary Error */}
                  {showSummaryError && (
                    <div className="border border-[#ef4444] rounded-[30px] sm:rounded-full py-[12px] px-[20px] mt-[20px] bg-transparent w-full  text-center">
                      <span className="text-[#ef4444] text-[14px] font-normal leading-tight">One or more fields have an error. Please check and try again.</span>
                    </div>
                  )}

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="w-full border border-[#4CAF50] rounded-full py-[12px] px-[20px] mt-[20px] text-center">
                      <span className="text-[#4CAF50] text-[15px] font-normal leading-tight">Thank you for your message. It has been sent.</span>
                    </div>
                  )}

                </form>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
