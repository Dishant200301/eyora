import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Calendar, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogDetailsData } from '../data';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogDetailsData.find((p) => p.id === id) || blogDetailsData[0];

  return (
    <>
      <Helmet>
        <title>{post.title} - Eyora Eye Care</title>
        <meta name="description" content={`Read about ${post.title} on the Eyora Eye Care blog.`} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:rounded-[20px] overflow-hidden mx-0 sm:mx-0 lg:mx-0 xl:mx-[14px] xl:mt-4 mb-4 lg:mb-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/hero/hero-bg.jpg)` }}
        />
        <div className="absolute inset-0 bg-[#15224D]/80 mix-blend-multiply" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[40px] sm:pt-16">
          <AnimateOnScroll>
            <h1 className="font-sans text-[24px] sm:text-[40px] lg:text-[50px] xl:text-[60px] text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-[1.1] max-w-[1200px] mx-auto tracking-[-1px]">
              {post.title}
            </h1>
            <div className="flex flex-row sm:flex-row items-center justify-center gap-[10px] sm:gap-6 text-white text-[14px] sm:text-[15.5px]">
              <div className="flex items-center gap-2">
                <Calendar className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" strokeWidth={2} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" strokeWidth={2} />
                <span>{post.category}</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="pt-0 bg-[#F8F9FA] overflow-hidden">
        <section className="py-[60px] lg:py-[100px] container-padding max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <div className="rounded-[20px] overflow-hidden mb-[45px] shadow-[0_10px_30px_rgba(21,34,77,0.06)]">
              <img src={post.image} alt={post.title} loading="lazy" className="w-full h-auto lg:h-[500px] object-cover" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="prose prose-lg max-w-none text-[#424C6F]">
              {post.content.introParagraphs.map((para, i) => (
                <p key={i} className="font-normal text-[15.5px] leading-[26px] mb-[25px]">
                  {para}
                </p>
              ))}

              {/* Custom Blockquote */}
              <div className="bg-white border border-[#E5F7FD] shadow-[0_15px_40px_rgba(21,34,77,0.04)] rounded-[20px] p-[20px] sm:p-[30px] lg:p-[40px] flex flex-col sm:flex-row items-start sm:items-start gap-[15px] sm:gap-[25px] my-[30px] sm:my-[50px]">
                 <img src="/images/icon-blockquote.svg" alt="Quote" className="w-[45px] sm:w-[45px] lg:w-[55px] h-[45px] sm:h-[45px] lg:h-[55px] shrink-0" />
                 <p className="text-[#15224D] font-medium text-[15.5px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] mb-0">
                   {post.content.blockquote}
                 </p>
              </div>

              <p className="font-normal text-[15.5px] leading-[26px] mb-[30px] sm:mb-[50px]">
                {post.content.middleParagraph}
              </p>

              <h2 className="text-[#15224D] font-medium text-[24px] sm:text-[28px] md:text-[34px] tracking-[-0.52px] mb-[15px] sm:mb-[20px]">{post.content.sectionTitle}</h2>
              <p className="font-normal text-[15.5px] leading-[26px] mb-[20px] sm:mb-[30px]">{post.content.sectionSubtitle}</p>
              
              <ul className="space-y-[15px] mb-[40px]">
                {post.content.bulletPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-[12px] font-normal text-[15.5px] leading-[26px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE] mt-[10px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-normal text-[15.5px] leading-[26px]">
                {post.content.finalParagraph}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Tags & Social */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[15px] sm:gap-[20px] mt-[40px] sm:mt-[60px] pb-[30px] sm:pb-[40px] border-b border-[#15224D]/10">
              <div className="flex items-center gap-[10px] sm:gap-[15px] flex-wrap">
                <span className="text-[#15224D] font-bold text-[16px] sm:text-[18px]">Tags:</span>
                {post.content.tags.map((tag) => (
                  <span key={tag} className="bg-[#00ADEE] text-white text-[12px] sm:text-[13px] font-semibold px-[15px] sm:px-[20px] py-[6px] sm:py-[8px] rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-[10px]">
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Facebook className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Twitter className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Linkedin className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Comment Form */}
          <AnimateOnScroll delay={0.3}>
            <div className="pt-[50px]">
              <h3 className="text-[#15224D] font-medium text-[28px] md:text-[34px] tracking-[-0.52px] mb-[15px]">Leave a Reply</h3>
              <p className="text-[#424C6F] font-normal text-[14px] mb-[30px]">Your email address will not be published. Required fields are marked *</p>
              
              <form className="flex flex-col gap-[20px]">
                <textarea 
                  placeholder="Comment *" 
                  className="w-full h-[180px] bg-white rounded-[15px] px-[20px] py-[15px] text-[15px] outline-none border border-transparent shadow-[0_5px_20px_rgba(21,34,77,0.03)] focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE]/30 resize-none transition-all placeholder:text-[#A0A8C3]" 
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
                  <input 
                    type="text" 
                    placeholder="Name *" 
                    className="w-full bg-white rounded-[15px] px-[20px] py-[15px] text-[15px] outline-none border border-transparent shadow-[0_5px_20px_rgba(21,34,77,0.03)] focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE]/30 transition-all placeholder:text-[#A0A8C3]" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="w-full bg-white rounded-[15px] px-[20px] py-[15px] text-[15px] outline-none border border-transparent shadow-[0_5px_20px_rgba(21,34,77,0.03)] focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE]/30 transition-all placeholder:text-[#A0A8C3]" 
                  />
                  <input 
                    type="url" 
                    placeholder="Website" 
                    className="w-full bg-white rounded-[15px] px-[20px] py-[15px] text-[15px] outline-none border border-transparent shadow-[0_5px_20px_rgba(21,34,77,0.03)] focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE]/30 transition-all placeholder:text-[#A0A8C3]" 
                  />
                </div>
                
                <label className="flex items-start gap-[10px] text-[#424C6F] text-[13px] sm:text-[14px] mt-[10px] cursor-pointer">
                  <input type="checkbox" className="w-[16px] h-[16px] rounded border-[#A0A8C3] text-[#00ADEE] focus:ring-[#00ADEE] mt-[2px] shrink-0" />
                  <span className="leading-[20px]">Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
                
                <button 
                  type="submit" 
                  className="bg-[#00ADEE] text-white rounded-full px-[30px] py-[16px] text-[15.5px] font-semibold hover:bg-[#15224D] transition-colors mt-[15px] w-max shadow-[0_5px_15px_rgba(0,173,238,0.2)]"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
