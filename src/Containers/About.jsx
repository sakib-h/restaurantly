import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import aboutImg from "../Assets/Images/about.jpg";
const About = () => {
	return (
		<section id="about" className="relative text-[#ffffff]">
			<div className="container flex flex-col lg:flex-row py-20 items-start">
				<div className="flex-1">
					<h3 className="font-Play-fair text-[26px] lg:text-[28px] 2xl:text-[30px] mb-2">
						Voluptatem dignissimos provident quasi corporis
						voluptates sit assumenda.
					</h3>
					<p className="italic textNormal mb-5">
						Voluptatem dignissimos provident quasi corporis
						voluptates sit assumenda.
					</p>
					<ul className="list-none mb-5 textNormal">
						<li className="flex items-center justify-start ">
							<AiOutlineCheckCircle /> Ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</li>
						<li className="flex items-center justify-start">
							<AiOutlineCheckCircle /> Duis aute irure dolor in
							reprehenderit in voluptate velit.
						</li>
						<li className="flex items-center justify-start">
							<AiOutlineCheckCircle /> Ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate trideta
							storacalaperda mastiro dolore eu fugiat nulla
							pariatur.
						</li>
					</ul>
					<p>
						Ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
				<div className="flex-1 pl-5">
					<div className="aboutImage ">
						<img
							src={aboutImg}
							alt="about"
							className=" border-4 border-[#ffffff33]"
						/>
					</div>
				</div>
			</div>
			<div className="aboutBg" />
		</section>
	);
};

export default About;
