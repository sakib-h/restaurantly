import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
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
		<div className="w-full ">
			<div className="container flex justify-between items-center mx-auto">
				<div className="flex items-center">
					<div className="flex items-center pr-5">
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
				<div>
					<button>En</button> / <button>De</button>
				</div>
			</div>

			<mav className="bg-[#0c0b0999] flex py-4 border-b-1 border-[#0c0b0999] sticky-0">
				<div className="container flex justify-between items center ">
					<div>
						<a
							href="#"
							className="font-Poppins text-[#ffffff] font-300 text-[28px] decoration-none ">
							Restaurantly
						</a>
					</div>
					<div className="flex flex-1 justify-evenly items-center ">
						{navLinks.map((link) => (
							<li key={link.url} className="list-none">
								<a href={`#${link.url}`}>{link.name}</a>
							</li>
						))}
					</div>
					<div></div>
				</div>
			</mav>
		</div>
	);
};

export default Navbar;
