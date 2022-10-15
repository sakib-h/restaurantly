import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import { ClipLoader } from "react-spinners";
const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const isLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setIsOpen(true);
			setLoading(false);
		}, 2000);
	};
	console.log(loading);
	return (
		<>
			<section
				className="home container flex items-center justify-between"
				id="home">
				<div className=" flex flex-col items-start justify-center h-screen">
					<h1 className="font-Poppins text-[#ffffff] text-[48px] lg:text-[52px] 2xl:text-[58px] leading-[56px] font-[700] pb-3">
						Welcome to{" "}
						<span className="text-[#cda45e]">Restaurantly</span>
					</h1>
					<h2 className="font-Play-fair text-[#eeeeee] text-[22px] pb-10">
						Delivering great food for more than 8 years!
					</h2>
					<div className="flex items-center text-[#ffffff]">
						<button className="button mr-5">Our Menu</button>
						<button className="button">Book a Table</button>
					</div>
				</div>
				<div>
					<div className="playBtn">
						<FiPlay
							className="icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
							onClick={() => {
								isLoading();
							}}
						/>
					</div>
				</div>
			</section>

			{loading && (
				<div className="bg-[#000000e6] w-full h-screen fixed top-0 left-0">
					<ClipLoader
						color="#ffffff"
						size="24"
						className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
					/>
				</div>
			)}
			{isOpen && (
				<>
					<div
						className="bg-[#000000e6] w-full h-screen fixed top-0 left-0
					bottom-0 right-0">
						<div className="icon absolute right-10 top-5">
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
							width="50%"
							height="45%"
							playing={true}
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%,-50%)",
								border: "none",
								outline: "none",
							}}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
