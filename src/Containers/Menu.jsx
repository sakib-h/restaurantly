import React, { useState } from "react";
import { menuItems } from "../Data/Menu";

console.log(menuItems);
const Menu = () => {
	const [active, setActive] = useState("all");
	return (
		<section id="menu" className="bg-[#1a1814] py-32 text-[#ffffff]">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Menu
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						Check Our Tasty Menu
					</h1>
				</div>

				<div className="flex flex-row justify-center items-center pb-20">
					{["all", "starters", "salad", "specialty"].map(
						(item, index) => (
							<li
								key={index}
								id={item}
								className={`list-none capitalize mx-5 hover:text-primary cursor-pointer transition-all ease-in-out duration-300 font-Play-fair font-[500] text-[16px] ${
									active === item
										? "text-primary"
										: "text-[#ffffff] "
								} `}
								onClick={(e) => setActive(e.target.id)}>
								{item}
							</li>
						)
					)}
				</div>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
					{menuItems.map((item) => (
						<div key={item.id}>
							<div className="flex flex-row justify-between items-start">
								<div className="pr-5">
									<img
										src={item.img}
										alt={item.title}
										className="w-[70px] h-[70px] rounded-[50%] border-[5px] border-[#ffffff33]"
									/>
								</div>
								<div className="flex-1">
									<div className="flex relative flex-row justify-between dotBg">
										<h4 className="cursor-pointer hover:text-primary transition-all ease-out duration-300 font-Open-sans text-[12px] 2xl:text-[14px] font-[700] bg-[#1a1814]  pr-3 z-[3]">
											{item.title}
										</h4>
										<p className="text-primary font-[600] font-Open-sans textNormal bg-[#1a1814] pl-3 z-[3]">
											{item.price}
										</p>
									</div>
									<div>
										<p className="italic textNormal text-[#ffffff80] font-Poppins">
											{item.ingredient}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Menu;
