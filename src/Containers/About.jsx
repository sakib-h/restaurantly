import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import aboutImg from "../Assets/Images/about.jpg";
import { motion } from "framer-motion";
const About = () => {
	const whiteColor = {
		hover: {
			color: "#ffffff",
			translateY: -10,
			transition: {
				duration: 0.5,
			},
		},
	};
	const backGroundColor = {
		hover: {
			backgroundColor: "#cda45e",
		},
	};

	const aboutCards = [
		{
			index: "01",
			title: "Lorem Ipsum",
			description:
				"Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat.",
		},
		{
			index: "02",
			title: "Repellat Nihil",
			description:
				"Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest.",
		},
		{
			index: "03",
			title: " Ad ad velit qui",
			description:
				"Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis.",
		},
	];
	return (
		<section id="about" className="relative text-[#ffffff]">
			<div className="container flex flex-col lg:flex-row py-32 items-start">
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

			<div className="bg-[#0c0b09] w-screen py-20">
				<div className="container ">
					<div className="title mb-[40px]">
						<div className="flex flex-row items-center justify-start">
							<h2 className="text-Poppins textNormal uppercase pr-3">
								Why Us
							</h2>
							<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
						</div>
						<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
							Why Choose Our Restaurant
						</h1>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
						{aboutCards.map((card) => (
							<motion.div
								key={card.index}
								whileHover="hover"
								variants={backGroundColor}
								className="bg-[#1a1814] py-12 px-8 w-full h-full">
								<motion.span
									className="text-primary font-bold text-[1.75rem] font-Open-sans leading-[2.5rem]"
									variants={whiteColor}>
									{card.index}
								</motion.span>
								<motion.h4
									className="font-Play-fair text-[#ffffffcc] text-[1.3rem] lg:text-[1.4rem]  2xl:text-[1.5rem] font-semibold my-[1.25rem]"
									variants={whiteColor}>
									{card.title}
								</motion.h4>
								<p className="text-[#ffffff] font-normal text-[13px] lg:text-[14px] 2xl:text-[15px] font-Open-sans leading-[1.40rem]">
									{card.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className="aboutBg" />
		</section>
	);
};

export default About;
