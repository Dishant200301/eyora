import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import { blogDetailsData } from '../data';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/modules/core/components/ArrowIcon';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import AppointmentSection from '@/modules/core/components/AppointmentSection';

const Blog = () => (
  <>
    <Helmet>
      <title>Insights & Articles - Eyora Eye Care</title>
      <meta name="description" content="Explore expert insights, eye health tips, and the latest updates from the Eyora Eye Care team." />
    </Helmet>
    <div className="pt-0">
      <PageBanner title="Insights & Articles" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights & Articles' }]} />

      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {blogDetailsData.map((post, i) => (
            <AnimateOnScroll key={post.id} delay={(i % 3) * 0.1}>
              <Link to={`/blog/${post.id}`} className="group block bg-white rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="mx-[10px] mt-[10px] overflow-hidden h-[220px] sm:h-[240px] md:h-[260px] rounded-[12px]">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-4 sm:px-5 pt-5 sm:pt-[30px] pb-5">
                  <h3 className="text-[#15224D] font-semibold text-[17px] sm:text-[19px] leading-[26px] sm:leading-[28px] mb-4 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[#15224D] font-semibold text-[14px] sm:text-[16px] leading-[21px]">Read More</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00ADEE] flex items-center justify-center group-hover:bg-[#15224D] transition-colors">
                      <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default Blog;
