import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {FOCUSABLE_SELECTOR} from "@testing-library/user-event/dist/utils";
const Form = () => {
	// declaring refs
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const dateRef = useRef();
	const timeRef = useRef();
	const peopleRef = useRef();
	const messageRef = useRef();

	// declaring states
	const [isNameValid, setIsNameValid] = useState(false);
	const [nameErrorMessage, setNameErrorMessage] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState("");
	const [isPhoneValid, setIsPhoneValid] = useState(false);
	const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
	const [isDateValid, setIsDateValid] = useState(false);
	const [dateErrorMessage, setDateErrorMessage] = useState("");
	const [isTimeValid, setIsTimeValid] = useState(false);
	const [timeErrorMessage, setTimeErrorMessage] = useState("");
	const [isPeopleAdd, setIsPeopleAdd] = useState(false);
	const [peopleErrorMessage, setPeopleErrorMessage] = useState("");

	// form validation

	// name validation
	const nameValidator = () => {
		if (/^[a-zA-Z ]{2,30}$/.test(nameRef.current.value)) {
			setIsNameValid(true);
		} else {
			setIsNameValid(false);
			setNameErrorMessage("name is invalid");
		}
	};

	// email validation
	const emailValidator = () => {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
			setIsEmailValid(true);
		} else {
			setIsEmailValid(false);
			setEmailErrorMessage("Please enter a Valid Email");
		}
	};

	// phone validation
	const phoneValidator = () => {
		if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phoneRef.current.value)) {
			setIsPhoneValid(true);
		} else {
			setIsPhoneValid(false);
			setPhoneErrorMessage("Please enter a Valid Number");
		}
	};

	// date validation
	const date = new Date().toLocaleDateString().split("/");
	const formattedDate = `${date[2]}-${date[0]}-${date[1]}`;

	// time validation
	// Current time
	const time = new Date()
		.toLocaleTimeString("en-US", {
			hour12: false,
		})
		.split(":");
	const formattedTime = `${time[0]}:${time[1]}`;

	const handleSubmit = (e) => {
		console.log(e);
		e.preventDefault();
		alert("Form Submitted");
		nameRef.current.value = "";
		setIsNameValid(false);
		emailRef.current.value = "";
		setIsEmailValid(false);
		phoneRef.current.value = "";
		setIsPhoneValid(false);
		dateRef.current.value = formattedDate;
		timeRef.current.value = formattedTime;
		peopleRef.current.value = "";
		messageRef.current.value = "";
	};
	return (
		<div className="reservation bg-[#0C0B09] py-20">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Reservation
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						Book a Table
					</h1>
				</div>
				<motion.div
					className="w-full"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<form className="flex flex-col justify-center items-center">
						<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5  gap-y-12">
							<div className="relative">
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Your Name"
									ref={nameRef}
									onChange={nameValidator}
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									Required (*)
								</span>
								{!isNameValid && (
									<span className="absolute bottom-[-20px] left-0 text-red-400 text-[12px] capitalize">
										{nameErrorMessage}
									</span>
								)}
							</div>
							<div className="relative">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email"
									ref={emailRef}
									onChange={emailValidator}
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									Required (*)
								</span>
								{!isEmailValid && (
									<span className="absolute bottom-[-20px] left-0 text-red-400 text-[12px] capitalize">
										{emailErrorMessage}
									</span>
								)}
							</div>
							<div className="relative">
								<input
									type="tel"
									name="phone"
									id="phone"
									placeholder="Your Phone"
									ref={phoneRef}
									onChange={phoneValidator}
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									(With Country Code ) (*)
								</span>
								{!isPhoneValid && (
									<span className="absolute bottom-[-20px] left-0 text-red-400 text-[12px] capitalize">
										{phoneErrorMessage}
									</span>
								)}
							</div>
							<div className="relative">
								<input
									type="date"
									name="date"
									id="date"
									defaultValue={`${formattedDate}`}
									min={`${formattedDate}`}
									max={`${
										new Date().getFullYear() + 1
									}-12-31`}
									ref={dateRef}
									className="cursor-text"
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									Reservation Date (*)
								</span>
							</div>
							<div className="relative">
								<input
									type="time"
									id="time"
									name="time"
									defaultValue={`${formattedTime}`}
									min="10:00"
									max="22:00"
									ref={timeRef}
									className="cursor-text"
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									Time (10:00 AM - 11:00 PM) (*)
								</span>
							</div>
							<div className="relative">
								<input
									type="number"
									name="people"
									min="1"
									max="100"
									id="people"
									ref={peopleRef}
									placeholder="Number of People"
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									Max: 100 Person (*)
								</span>
							</div>

							<div className="relative col-span-1 md:col-span-2 lg:col-span-3 mb-[24px]">
								<textarea
									type="textarea"
									ref={messageRef}
									placeholder="Message (Max Length 500 characters)"
									rows="5"
									maxLength="500"
								/>
								<span className="absolute top-[-20px] left-0 text-[#a49b89] text-[12px] capitalize">
									(Optional)
								</span>
							</div>
						</div>
						<div className="">
							<button
								type="submit"
								className={`bg-primary px-[35px] py-[10px] text-[#ffffff] rounded-[50px] cursor-pointer hover:bg-[#d3af71] transition-all ease-in duration-400 ${
									!isNameValid ||
									!isEmailValid ||
									!isPhoneValid
										? "opacity-50 cursor-not-allowed"
										: " "
								}`}
								onClick={handleSubmit}>
								Book a Table
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default Form;
