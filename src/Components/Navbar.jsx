import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
const Navbar = () => {
	return (
		<div className="relative w-full z-1 cursor-pointer">
			<div className="info container flex justify-center lg:justify-between items-center text-[#ffffff]">
				<div className="flex  my-3">
					<div className="flex justify-center items-center pr-5">
						<AiOutlineMobile className="text-primary" />
						<span>
							<a href="tel:+1 5589 55488 55">+1 5589 55488 55</a>
						</span>
					</div>
					<div className="flex justify-center items-center">
						<AiOutlineClockCircle className="text-primary" />
						<span>Mon-Sat: 11AM - 23PM</span>
					</div>
				</div>
				<div className="hidden lg:flex ">
					<span className="cursor-pointer text-primary">En</span>{" "}
					<span className="px-2">/</span>
					<span className="cursor-pointer">De</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
