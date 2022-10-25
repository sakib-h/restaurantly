import React from "react";
import { motion } from "framer-motion";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import testimonial1 from "../Assets/Images/testimonials/testimonials-1.jpg";
import testimonial2 from "../Assets/Images/testimonials/testimonials-2.jpg";
import testimonial3 from "../Assets/Images/testimonials/testimonials-3.jpg";
import testimonial4 from "../Assets/Images/testimonials/testimonials-4.jpg";
import testimonial5 from "../Assets/Images/testimonials/testimonials-5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
const Testimonials = () => {
	return (
		<div className="testimonials bg-[#1A1814] py-20">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Testimonials
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						What they're saying about us
					</h1>
				</div>
				<motion.div
					className="w-full"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<Swiper
						modules={[Pagination, Autoplay]}
						pagination={{
							clickable: true,
						}}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							100: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						className="mySwiper">
						<SwiperSlide className="relative mb-5">
							<div className=" bg-[#26231D] px-5 pt-5 pb-20 rounded-[6px] font-Open-sans text-[14px] italic font-[480] leading-[21px] text-[#ffffff] ">
								<p className="relative text-start">
									<ImQuotesLeft className="quoteIcon top-[-10px] left-0 mr-4" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper . Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Id, vitae!
									<ImQuotesRight className="quoteIcon bottom-[-10px] right-0 ml-4" />
								</p>
							</div>
							<div className=" relative  bottom-[45px]  left-5 z-[2]">
								<img
									src={testimonial1}
									alt="testimonial1"
									className="avatar"
								/>
								<h3 className="font-Play-fair font-[700] text-[18px] text-[#ffffff] mt-5 mb-1">
									Saul Goodman
								</h3>
								<h4 className="font-Play-fair font-[500] text-[14px] text-[#ffffff99]">
									Ceo & FounderCeo & Founder
								</h4>
							</div>
						</SwiperSlide>

						<SwiperSlide className="relative mb-5">
							<div className=" bg-[#26231D] px-5 pt-5 pb-20 rounded-[6px] font-Open-sans text-[14px] italic font-[480] leading-[21px] text-[#ffffff] ">
								<p className="relative text-start">
									<ImQuotesLeft className="quoteIcon top-[-10px] left-0 mr-4" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper . Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Id, vitae!
									<ImQuotesRight className="quoteIcon bottom-[-10px] right-0 ml-4" />
								</p>
							</div>
							<div className=" relative  bottom-[45px]  left-5 z-[2]">
								<img
									src={testimonial2}
									alt="testimonial2"
									className="avatar"
								/>
								<h3 className="font-Play-fair font-[700] text-[18px] text-[#ffffff] mt-5 mb-1">
									Sara Wilsson
								</h3>
								<h4 className="font-Play-fair font-[500] text-[14px] text-[#ffffff99]">
									Lawyer
								</h4>
							</div>
						</SwiperSlide>

						<SwiperSlide className="relative mb-5">
							<div className=" bg-[#26231D] px-5 pt-5 pb-20 rounded-[6px] font-Open-sans text-[14px] italic font-[480] leading-[21px] text-[#ffffff] ">
								<p className="relative text-start">
									<ImQuotesLeft className="quoteIcon top-[-10px] left-0 mr-4" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper . Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Id, vitae!
									<ImQuotesRight className="quoteIcon bottom-[-10px] right-0 ml-4" />
								</p>
							</div>
							<div className=" relative  bottom-[45px]  left-5 z-[2]">
								<img
									src={testimonial3}
									alt="testimonial3"
									className="avatar"
								/>
								<h3 className="font-Play-fair font-[700] text-[18px] text-[#ffffff] mt-5 mb-1">
									Jena Karlis
								</h3>
								<h4 className="font-Play-fair font-[500] text-[14px] text-[#ffffff99]">
									Real Estate Investor
								</h4>
							</div>
						</SwiperSlide>

						<SwiperSlide className="relative mb-5">
							<div className=" bg-[#26231D] px-5 pt-5 pb-20 rounded-[6px] font-Open-sans text-[14px] italic font-[480] leading-[21px] text-[#ffffff] ">
								<p className="relative text-start">
									<ImQuotesLeft className="quoteIcon top-[-10px] left-0 mr-4" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper . Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Id, vitae!
									<ImQuotesRight className="quoteIcon bottom-[-10px] right-0 ml-4" />
								</p>
							</div>
							<div className=" relative  bottom-[45px]  left-5 z-[2]">
								<img
									src={testimonial4}
									alt="testimonial4"
									className="avatar"
								/>
								<h3 className="font-Play-fair font-[700] text-[18px] text-[#ffffff] mt-5 mb-1">
									Matt Brandon
								</h3>
								<h4 className="font-Play-fair font-[500] text-[14px] text-[#ffffff99]">
									Neuron Surgeon, NY Hospital
								</h4>
							</div>
						</SwiperSlide>

						<SwiperSlide className="relative mb-5">
							<div className=" bg-[#26231D] px-5 pt-5 pb-20 rounded-[6px] font-Open-sans text-[14px] italic font-[480] leading-[21px] text-[#ffffff] ">
								<p className="relative text-start">
									<ImQuotesLeft className="quoteIcon top-[-10px] left-0 mr-4" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper . Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Id, vitae!
									<ImQuotesRight className="quoteIcon bottom-[-10px] right-0 ml-4" />
								</p>
							</div>
							<div className=" relative  bottom-[45px]  left-5 z-[2]">
								<img
									src={testimonial5}
									alt="testimonial5"
									className="avatar"
								/>
								<h3 className="font-Play-fair font-[700] text-[18px] text-[#ffffff] mt-5 mb-1">
									John Larson
								</h3>
								<h4 className="font-Play-fair font-[500] text-[14px] text-[#ffffff99]">
									Entrepreneur
								</h4>
							</div>
						</SwiperSlide>
					</Swiper>
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
