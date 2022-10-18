import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import ScrollspyNav from "react-scrollspy-nav";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isAtTop, setIsAtTop] = useState(false);
	window.addEventListener("scroll", () => {
		if (window.scrollY >= 45) {
			setIsAtTop(true);
		} else {
			setIsAtTop(false);
		}
	});

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
		<>
			<div className="container relative  flex justify-center lg:justify-between items-center text-[#ffffff] transition ease-out duration-[0.3s]">
				<div className=" flex flex-1 justify-evenly lg:justify-start items-center  my-3">
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
					<div className="flex justify-center items-center">
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
			<nav
				className={`w-full  sticky top-0 z-50  text-[#ffffff] py-3 transition ease-out duration-[0.5s] ${
					isAtTop ? " bg-[#000000f2]  " : " bg-[#0c0b0999]  "
				} `}>
				<div className="container flex justify-between items-center">
					<div className="font-Poppins text-[28px] lg:text-[32px]">
						<a href="/" title="Restaurantly">
							Restaurantly
						</a>
					</div>
					<div className="hidden lg:flex flex-1 justify-between items-center">
						<div className="flex flex-1 justify-evenly items-center px-10">
							{navLinks.map((link) => (
								<ScrollspyNav
									key={link.id}
									scrollTargetIds={[
										"home",
										"about",
										"menu",
										"specials",
										"events",
										"chefs",
										"gallery",
										"contact",
									]}
									offset={-130}
									activeNavClass="text-[#d9ba85]"
									scrollDuration="300">
									<li className="link">
										<a
											href={`#${link.id}`}
											onScroll={(e) => console.log(e)}>
											{link.name}
										</a>
									</li>
								</ScrollspyNav>
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
							className="icon"
							onClick={() => {
								setIsOpen(true);
							}}
						/>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						className="bg-[#000000e6] w-full h-screen fixed top-0 left-0 bottom-0 right-0 lg:hidden z-50"
						initial={{ opacity: 0, y: "100vh" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100vh" }}>
						<div className="absolute top-20 right-5 left-5 bottom-20 bg-white rounded-lg p-10  text-[#1a1814]">
							<div>
								{navLinks.map((link) => (
									<li key={link.id} className="link my-5">
										<a
											href={`#${link.id}`}
											onClick={() => setIsOpen(false)}>
											{link.name}
										</a>
									</li>
								))}
							</div>
						</div>
						<div className="icon absolute right-10 top-5">
							<IoMdClose
								className="icon"
								onClick={() => {
									setIsOpen(false);
								}}
							/>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
