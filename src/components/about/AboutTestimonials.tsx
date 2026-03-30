import { useState, useRef, useEffect } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "Michael K.",
    role: "Financial Consultant",
    avatar: "/images/testimonials/patient-1.jpg"
  },
  {
    id: 2,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "Michael K.",
    role: "Financial Consultant",
    avatar: "/images/testimonials/patient-2.jpg"
  },
  {
    id: 3,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "Rajesh Patel",
    role: "Business Owner",
    avatar: "/images/testimonials/patient-3.jpg"
  },
  {
    id: 4,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "/images/testimonials/patient-4.jpg"
  },
  {
    id: 5,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "David Chen",
    role: "Software Engineer",
    avatar: "/images/testimonials/patient-5.jpg"
  },
  {
    id: 6,
    text: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    name: "Emily Wilson",
    role: "Teacher",
    avatar: "/images/testimonials/patient-6.jpg"
  }
];

const AboutTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (translateX < -threshold) {
      // Dragged left - show next
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (translateX > threshold) {
      // Dragged right - show previous
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (translateX < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (translateX > threshold) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setTranslateX(0);
  };

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="section-padding container-padding bg-[#F5F5F5]">
      <AnimateOnScroll>
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <div className="flex items-center justify-center gap-[8px] mb-[16px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00ADEE]"></span>
          </div>
          <h2 
            className="font-medium text-[#15224D]"
            style={{ 
              fontSize: '42px', 
              lineHeight: '52px', 
              letterSpacing: '-0.5px'
            }}
          >
            Trusted Eye Care Reflections
            <br />
            from Valued Patients
          </h2>
        </div>
      </AnimateOnScroll>

      {/* Testimonials Slider */}
      <div 
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex gap-[24px] transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${currentIndex}`}
              className="w-[calc(33.333%-16px)] flex-shrink-0"
            >
              <div 
                className="bg-white rounded-[20px] p-[30px] h-full"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                {/* Stars */}
                <div className="flex items-center gap-[4px] mb-[16px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00ADEE">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p 
                  className="text-[#424C6F] mb-[40px]"
                  style={{ 
                    fontSize: '14px', 
                    lineHeight: '24px'
                  }}
                >
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-[12px] pt-[20px] border-t border-[#E5E5E5]">
                  <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#15224D] font-semibold text-[15px]">{testimonial.name}</p>
                    <p className="text-[#424C6F] text-[13px]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-[8px] mt-[40px]">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[8px] h-[8px] rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#00ADEE]' : 'bg-[#D1D1D1]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonials;
