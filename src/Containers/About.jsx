import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import aboutImg from "../Assets/Images/about.jpg";
import { motion } from "framer-motion";
const About = () => {
	return (
		<section id="about" className="relative text-[#ffffff]">
			<div className="container flex flex-col lg:flex-row py-20 items-start">
				<div className="flex-1">
					<h3 className="font-Play-fair text-[26px] lg:text-[28px] 2xl:text-[30px] mb-5">
						Voluptatem dignissimos provident quasi corporis
						voluptates sit assumenda.
					</h3>
					<p className="italic textNormal mb-5">
						Voluptatem dignissimos provident quasi corporis
						voluptates sit assumenda.
					</p>
					<ul className="list-none mb-5 textNormal font-Open-sans">
						<li className=" pb-4 leading-5">
							<AiOutlineCheckCircle className="listIcons inline-block" />
							<span>
								Ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</span>
						</li>
						<li className="  pb-4 leading-5">
							<AiOutlineCheckCircle className="listIcons inline-block" />
							<span>
								Duis aute irure dolor in reprehenderit in
								voluptate velit.
							</span>
						</li>
						<li className=" pb-4 leading-5">
							<AiOutlineCheckCircle className="listIcons inline-block" />
							<span>
								Ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate trideta
								storacalaperda mastiro dolore eu fugiat nulla
								pariatur.
							</span>
						</li>
					</ul>
					<p className="textNormal">
						Ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
				<div className="flex-1 pl-5">
					<motion.div
						className="aboutImage "
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							duration: 0.4,
							when: "beforeChildren",
							ease: "linear",
						}}>
						<motion.img
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.01 }}
							transition={{
								duration: 0.3,
								when: "afterChildren",
							}}
							src={aboutImg}
							alt="about"
							className=" border-4 border-[#ffffff33]"
						/>
					</motion.div>
				</div>
			</div>
			<div className="aboutBg" />
		</section>
	);
};

export default About;
