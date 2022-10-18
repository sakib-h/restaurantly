import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const isLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setIsOpen(true);
			setLoading(false);
		}, 1500);
	};

	return (
		<>
			<motion.div
				className="home relative container flex flex-col  lg:flex-row items-center justify-center lg:justify-between min-h-screen overflow-hidden"
				id="home"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}>
				<div className=" flex flex-col items-center lg:items-start justify-center  pb-10 lg:pb-0">
					<h1 className="font-Poppins text-center lg:text-start  text-[#ffffff] text-[36px] md:text-[42px] lg:text-[44px] 2xl:text-[48px] leading-[56px] font-[700] pb-3">
						Welcome to{" "}
						<span className="text-primary">Restaurantly</span>
					</h1>
					<h2 className="font-Play-fair text-center lg:text-start  text-[#eeeeee] text-[20px] lg:text-[22px] pb-10">
						Delivering great food for more than 8 years!
					</h2>
					<div className="flex items-center text-[#ffffff]">
						<button className="button mr-5">Our Menu</button>
						<button className="button">Book a Table</button>
					</div>
				</div>
				<div>
					<button
						className="playBtn"
						onClick={() => {
							isLoading();
						}}
					/>
				</div>
			</motion.div>

			{loading && (
				<motion.div
					className="bg-[#000000f2] w-full h-screen fixed top-0 left-0  z-20"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>
					<ClipLoader
						color="#ffffff"
						size="24px"
						className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
					/>
				</motion.div>
			)}
			{isOpen && (
				<div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{ duration: 0.5 }}
					className="bg-[#000000f2] w-full h-screen fixed top-0 left-0
						bottom-0 right-0 z-10">
					<div className="icon absolute right-10 top-5 z-20">
						<IoMdClose
							className="icon"
							onClick={() => {
								setIsOpen(false);
							}}
						/>
					</div>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
						controls={true}
						width="95%"
						height="80%"
						playing={true}
						className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-none outline-none"
					/>
				</div>
			)}
			<div className="overlay"></div>
		</>
	);
};

export default Home;
