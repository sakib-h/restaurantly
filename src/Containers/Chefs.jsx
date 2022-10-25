import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chefsData } from "../Data/Data";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Chefs = () => {
	const hoverVariants = {
		initial: { opacity: 0, y: "100%" },
		hover: {
			opacity: 1,
			y: 0,
			transition: { type: "tween", duration: 0.3 },
		},
	};
	return (
		<section
			id="chefs"
			className="bg-[#1A1814] relative text-[#ffffff] py-32">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Chefs
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						Our Professional Chefs
					</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					{chefsData.map((data) => (
						<AnimatePresence key={data.id}>
							<motion.div
								initial="initial"
								whileHover="hover"
								exit="initial"
								className=" cursor-pointer relative transition duration-300 overflow-hidden">
								<img
									src={data.img}
									alt={data.name}
									className="w-full h-auto"
								/>
								<motion.div
									className="chefInfo"
									variants={hoverVariants}>
									<div className=" absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center ">
										<h4 className="font-Poly-fair font-[700] text-[18px] pb-1">
											{data.name}
										</h4>
										<span className="font-Open-sans italic font-[400] text-[13px] pb-3">
											{data.role}
										</span>
										<div className="grid grid-cols-4 gap-5 mb-5 ">
											<a
												href={data.twitter}
												className="socialIcon">
												<BsTwitter />
											</a>
											<a
												href={data.facebook}
												className="socialIcon">
												<BsFacebook />
											</a>
											<a
												href={data.instagram}
												className="socialIcon">
												<BsInstagram />
											</a>
											<a
												href={data.linkedin}
												className="socialIcon">
												<BsLinkedin />
											</a>
										</div>
									</div>
								</motion.div>
							</motion.div>
						</AnimatePresence>
					))}
				</div>
			</div>
		</section>
	);
};

export default Chefs;
