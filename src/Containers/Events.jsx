import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import event1 from "../Assets/Images/event-custom.jpg";
import event2 from "../Assets/Images/event-birthday.jpg";
import event3 from "../Assets/Images/event-private.jpg";
import Form from "../Components/Form";
import Testimonials from "../Components/Testimonials";

const Events = () => {
	return (
		<section id="events" className=" text-[#ffffff]">
			<div className="events relative py-32">
				<div className="container">
					<div className="title mb-[40px]">
						<div className="flex flex-row items-center justify-start">
							<h2 className="text-Poppins textNormal uppercase pr-3">
								Events
							</h2>
							<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
						</div>
						<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
							Organize Your Events in our Restaurant
						</h1>
					</div>

					<Swiper
						pagination={{
							clickable: true,
						}}
						modules={[Pagination, Autoplay]}
						loop={true}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						speed={1000}>
						<SwiperSlide>
							<div className="flex flex-col lg:flex-row justify-between lg:items-start pb-12">
								<div className="mb-3">
									<img
										src={event1}
										alt="custom party"
										className="fit-contain"
									/>
								</div>
								<div className="lg:pl-5">
									<h3 className="font-Play-fair leading-[32px] text-[26px] font-[600] text-primary mb-4">
										Custom Parties
									</h3>
									<p className="font-Open-sans text-[26px] font-[700] leading-[40px] border-b-2 border-primary mb-4 inline-block">
										$99
									</p>
									<p className="font-Open-sans italic textNormal leading-[21px] mb-4">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul className="font-Open-sans textNormal mb-[14px]">
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
										<li className="pb-3">
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p className="font-Open-sans  textNormal leading-[21px] ">
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col lg:flex-row justify-between lg:items-start pb-12">
								<div className="mb-3">
									<img
										src={event2}
										alt="custom party"
										className=" w-full h-auto"
									/>
								</div>
								<div className="lg:pl-5">
									<h3 className="font-Play-fair leading-[32px] text-[26px] font-[600] text-primary mb-4">
										Birthday Parties
									</h3>
									<p className="font-Open-sans text-[26px] font-[700] leading-[40px] border-b-2 border-primary mb-4 inline-block">
										$189
									</p>
									<p className="font-Open-sans italic textNormal leading-[21px] mb-4">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul className="font-Open-sans textNormal mb-[14px]">
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
										<li className="pb-3">
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p className="font-Open-sans  textNormal leading-[21px] ">
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col lg:flex-row justify-between lg:items-start pb-12">
								<div className="mb-3">
									<img
										src={event3}
										alt="custom party"
										className=" w-full h-auto"
									/>
								</div>
								<div className="lg:pl-5">
									<h3 className="font-Play-fair leading-[32px] text-[26px] font-[600] text-primary mb-4">
										Birthday Parties
									</h3>
									<p className="font-Open-sans text-[26px] font-[700] leading-[40px] border-b-2 border-primary mb-4 inline-block">
										$290
									</p>
									<p className="font-Open-sans italic textNormal leading-[21px] mb-4">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul className="font-Open-sans textNormal mb-[14px]">
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
										<li className="pb-3">
											Duis aute irure dolor in
											reprehenderit in voluptate velit.
										</li>
										<li className="pb-3">
											Ullamco laboris nisi ut aliquip ex
											ea commodo consequat.
										</li>
									</ul>
									<p className="font-Open-sans  textNormal leading-[21px] ">
										Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor
										in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="eventsBg" />
			</div>
			<Form />
			<Testimonials />
		</section>
	);
};

export default Events;
