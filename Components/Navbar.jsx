import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
const Navbar = () => {
	const navLinks = [
		{ name: "Home", url: "home" },
		{ name: "About", url: "about" },
		{ name: "Menu", url: "menu" },
		{ name: "Specials", url: "specials" },
		{ name: "Chefs", url: "chefs" },
		{ name: "Gallery", url: "gallery" },
		{ name: "Contact", url: "contact" },
	];
	return (
		<div className="w-full relative z-1">
			<div className="container flex justify-center  md:justify-between items-center">
				<div className="flex justify-center items-center my-2">
					<div className="flex   items-center pr-5">
						<AiOutlineMobile className="text-[#cda45e]" />
						<a href="tel:123-456-7890" className="text-[#ffffff]">
							123-456-7890
						</a>
					</div>

					<div className="flex items-center ">
						<AiOutlineClockCircle className="text-[#cda45e]" />
						<span className="text-[#ffffff]">
							Mon-Sat: 11AM - 23PM
						</span>
					</div>
				</div>
				<div className="hidden md:block">
					<button>En</button> / <button>De</button>
				</div>
			</div>

			<mav className="bg-[#0c0b0999] flex py-4 border-b-1 border-[#0c0b0999] sticky-0 text-[#ffffff] ">
				<div className="container flex justify-between items-center">
					<div>
						<a
							href="#"
							className="font-Poppins font-300 text-[28px] decoration-none ">
							Restaurantly
						</a>
					</div>
					<div className="hidden lg:flex flex-1 justify-evenly items-center ">
						{navLinks.map((link) => (
							<li
								key={link.url}
								className="list-none text-[14px] font-[400]  hover:text-[#d9ba85] hover:transition ease duration-[0.3s]">
								<a href={`#${link.url}`}>{link.name}</a>
							</li>
						))}
					</div>
					<div className="hidden lg:flex border-2 border-[#cda45e] rounded-[50px] hover:bg-[#cda45e] hover:transition ease duration-[0.3s]">
						<button className="uppercase px-5 py-2 ">
							Book A Table
						</button>
					</div>
					<div className="flex lg:hidden ">
						<GoThreeBars className="text-[#ffffff] text-[28px] " />
					</div>
				</div>
			</mav>
		</div>
	);
};

export default Navbar;
