import React from "react";
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
				<div className="w-full">
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						loop={true}
						modules={[Pagination, Autoplay]}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							100: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						className="mySwiper">
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center lg:flex">
									<ImQuotesLeft className="quote quote-left" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial1}
									alt=""
									className="avatar"
								/>
								<h3>Saul Goodman</h3>
								<h4>Ceo & FounderCeo & Founder</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Export tempor illum tamen malis malis eram
									quae irure esse labore quem cillum quid
									cillum eram malis quorum velit fore eram
									velit sunt aliqua noster fugiat irure amet
									legam anim culpa.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial2}
									alt=""
									className="avatar"
								/>
								<h3>Sara Wilsson</h3>
								<h4>Designer</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Enim nisi quem export duis labore cillum
									quae magna enim sint quorum nulla quem
									veniam duis minim tempor labore quem eram
									duis noster aute amet eram fore quis sint
									minim.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial3}
									alt=""
									className="avatar"
								/>
								<h3>Jena Karlis</h3>
								<h4>Store Owner</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Fugiat enim eram quae cillum dolore dolor
									amet nulla culpa multos export minim fugiat
									minim velit minim dolor enim duis veniam
									ipsum anim magna sunt elit fore quem dolore
									labore illum veniam.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial4}
									alt=""
									className="avatar"
								/>
								<h3>Matt Brandon</h3>
								<h4>Freelancer</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Quis quorum aliqua sint quem legam fore sunt
									eram irure aliqua veniam tempor noster
									veniam enim culpa labore duis sunt culpa
									nulla illum cillum fugiat legam esse veniam
									culpa fore nisi cillum quid.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial5}
									alt=""
									className="avatar"
								/>
								<h3>John Larson</h3>
								<h4>Entrepreneur</h4>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
