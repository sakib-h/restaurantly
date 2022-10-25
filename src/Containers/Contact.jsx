import React, { useRef, useState } from "react";
import { BiMap } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { BiMobileAlt } from "react-icons/bi";
const Contact = () => {
	// declaring refs
	const nameRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();

	// declaring states

	const [isEmailValid, setIsEmailValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// email validation
	const emailValidator = () => {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
			setIsEmailValid(true);
		} else {
			setIsEmailValid(false);
			setErrorMessage("Please enter a Valid Email");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Form Submitted");
		nameRef.current.value = "";
		emailRef.current.value = "";
		subjectRef.current.value = "";
		messageRef.current.value = "";
	};
	return (
		<div id="contact" className=" text-[#ffffff] bg-[#0C0B09] py-32">
			<div className="events relative  ">
				<div className="container">
					<div className="title mb-[40px]">
						<div className="flex flex-row items-center justify-start">
							<h2 className="text-Poppins textNormal uppercase pr-3">
								Contact
							</h2>
							<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
						</div>
						<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
							Contact Us
						</h1>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div>
							<div className="lg:col-span-1">
								<div className="flex flex-row  items-center mb-10">
									<div className="bg-primary rounded-full text-[#ffffff] w-[44px] h-[44px] relative mr-5">
										<BiMap className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[28px]" />
									</div>
									<div>
										<h4 className="font-Poppins font-[500] text-[18px] mb-1">
											Location:
										</h4>
										<p className="font-Open-sans font-[400] text-[14px] text-[#bab3a6]">
											A108 Adam Street, New York, NY
											535022
										</p>
									</div>
								</div>

								<div className="flex flex-row  items-start mb-10">
									<div className="bg-primary rounded-full text-[#ffffff] w-[44px] h-[44px] relative mr-5">
										<BiTime className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[28px]" />
									</div>
									<div>
										<h4 className="font-Poppins font-[500] text-[18px] mb-1">
											Open Hours:
										</h4>
										<p className="font-Open-sans font-[400] text-[14px] text-[#bab3a6]">
											Monday-Saturday:
											<br /> 11:00 AM - 2300 PM
										</p>
									</div>
								</div>

								<div className="flex flex-row  items-center mb-10">
									<div className="bg-primary rounded-full text-[#ffffff] w-[44px] h-[44px] relative mr-5">
										<GoMail className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[28px]" />
									</div>
									<div>
										<h4 className="font-Poppins font-[500] text-[18px] mb-1">
											Email:
										</h4>
										<p className="font-Open-sans font-[400] text-[14px] text-[#bab3a6]">
											info.email@gmail.com
										</p>
									</div>
								</div>

								<div className="flex flex-row  items-center mb-10">
									<div className="bg-primary rounded-full text-[#ffffff] w-[44px] h-[44px] relative mr-5">
										<BiMobileAlt className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[28px]" />
									</div>
									<div>
										<h4 className="font-Poppins font-[500] text-[18px] mb-1">
											Call:
										</h4>
										<p className="font-Open-sans font-[400] text-[14px] text-[#bab3a6]">
											+1 5589 55488 55s
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:col-span-2">
							<form
								className="flex flex-col justify-center items-center"
								onSubmit={handleSubmit}>
								<div className="w-full grid grid-cols-1 md:grid-cols-2  gap-5">
									<div className="relative">
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Your Name"
											ref={nameRef}
											required
										/>
									</div>
									<div className="relative">
										<input
											type="email"
											name="email"
											id="email"
											placeholder="email"
											ref={emailRef}
											onChange={emailValidator}
											required
										/>

										{!isEmailValid && (
											<span className="absolute bottom-[-20px] left-0 text-red-400 text-[12px] capitalize">
												{errorMessage}
											</span>
										)}
									</div>
									<div className="relative col-span-1 md:col-span-2">
										<input
											type="text"
											name="subject"
											id="subject"
											placeholder="Subject"
											ref={subjectRef}
											required
										/>
									</div>

									<div className="relative col-span-1 md:col-span-2 mb-[24px]">
										<textarea
											type="textarea"
											ref={messageRef}
											placeholder="Message (Max Length 500 characters)"
											rows="5"
											maxLength="500"
											required
										/>
									</div>
								</div>
								<div>
									{!isEmailValid ? (
										<button
											type="submit"
											className="bg-primary px-[35px] py-[10px] text-[#ffffff] rounded-[50px]  hover:bg-[#d3af71] transition-all ease-in duration-400 opacity-50"
											disabled>
											Send Message
										</button>
									) : (
										<button
											type="submit"
											className="bg-primary px-[35px] py-[10px] text-[#ffffff] rounded-[50px] cursor-pointer hover:bg-[#d3af71] transition-all ease-in duration-400 ">
											Send Message
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
