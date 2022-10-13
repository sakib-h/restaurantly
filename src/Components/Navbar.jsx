import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{
			name: "Home",
			id: "home",
		},
		{
			name: "About",
			id: "about",
		},
		{
			name: "Menu",
			id: "menu",
		},
		{
			name: "Specials",
			id: "specials",
		},
		{
			name: "Events",
			id: "events",
		},
		{
			name: "Chefs",
			id: "chefs",
		},
		{
			name: "Gallery",
			id: "gallery",
		},
		{
			name: "Contact",
			id: "contact",
		},
	];
	return (
		<div className="relative w-full cursor-pointer">
			<div className="container flex justify-center lg:justify-between items-center text-[#ffffff]">
				<div className="flex flex-1 justify-evenly lg:justify-start items-center  my-3">
					<div className="flex justify-center items-center pr-5">
						<AiOutlineMobile className="topIcon" />
						<span>
							<a
								href="tel:+1 5589 55488 55"
								className="textNormal">
								+1 5589 55488 55
							</a>
						</span>
					</div>
					<div className="info">
						<AiOutlineClockCircle className="topIcon" />
						<span className="textNormal">Mon-Sat: 11AM - 23PM</span>
					</div>
				</div>
				<div className="hidden lg:flex text-[14px] 2xl:text-[16px]">
					<span className="cursor-pointer text-primary">En</span>{" "}
					<span className="px-2">/</span>
					<span className="cursor-pointer">De</span>
				</div>
			</div>

			<nav className="w-full bg-[#0c0b0999] text-[#ffffff] py-3 sticky top-0">
				<div className="container flex justify-between items-center">
					<div className="font-Poppins text-[28px] lg:text-[32px]">
						<a href="/" title="Restaurantly" alt="Restaurantly">
							Restaurantly
						</a>
					</div>
					<div className="hidden lg:flex flex-1 justify-between items-center">
						<div className="flex flex-1 justify-evenly items-center px-10">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className="link hover:text-[#d9ba85] ">
									<a href={`#${link.id}`}>{link.name}</a>
								</li>
							))}
						</div>
						<div>
							<button type="button" className="button">
								Book a Table
							</button>
						</div>
					</div>
					<div className="block lg:hidden">
						<GoThreeBars
							className="navIcon"
							onClick={() => {
								setIsOpen(true);
							}}
						/>
					</div>
				</div>
			</nav>

			<nav>
				{isOpen && (
					<div className="bg-[#000000e6] w-full h-screen absolute top-0 left-0 bottom-0 right-0 lg:hidden">
						<div className="absolute top-20 right-5 left-5 bottom-20 bg-white rounded-lg p-10  text-[#1a1814]">
							<div>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className="link my-5 hover:text-[#cda45e]">
										<a href={`#${link.id}`}>{link.name}</a>
									</li>
								))}
							</div>
						</div>
						<div className="icon absolute right-10 top-5">
							<IoMdClose
								className="navIcon"
								onClick={() => {
									setIsOpen(false);
								}}
							/>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
