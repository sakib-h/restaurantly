import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
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
		<div className="navbar">
			<div className="topInfo">
				<div className="topContent">
					<div className="info pr-5">
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
				<div className="language">
					<span className="cursor-pointer text-primary">En</span>{" "}
					<span className="px-2">/</span>
					<span className="cursor-pointer">De</span>
				</div>
			</div>

			<nav className="navigation">
				<div className="navContainer">
					<div className="logo">
						<a href="/" title="Restaurantly">
							Restaurantly
						</a>
					</div>
					<div className="navLinks">
						<div className="linksContainer">
							{navLinks.map((link) => (
								<li key={link.id} className="link">
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
		</div>
	);
};

export default Navbar;
