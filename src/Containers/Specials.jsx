import React, { useEffect, useState } from "react";
import { specialItems } from "../Data/Data";
const Specials = () => {
	// Setting active item
	const [active, setActive] = useState(1);

	// Filter items from data
	const [filterItem, setFilterItem] = useState(
		specialItems.filter((item) => item.id === active)
	);
	// Render every time when active menu is changed
	useEffect(() => {
		setFilterItem(specialItems.filter((item) => item.id === active));
	}, [active]);

	return (
		<div id="specials" className="bg-[#0C0B09] py-32 text-[#ffffff]">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Specials
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						Check Our Specials
					</h1>
				</div>

				<div className="flex flex-col lg:flex-row lg:items-start justify-between">
					<div className="specialMenu relative w-full lg:w-[25%]">
						{[
							"Modi sit est",
							"Unde praesentium sed",
							"Pariatur explicabo vel",
							"Nostrum qui quasi",
							"Iusto ut expedita aut",
						].map((item, index) => (
							<div
								key={index}
								id={index + 1}
								className={`p-[15px] transition duration-300 font-Open-sans font-[600] text-[15px] cursor-pointer  ${
									active === index + 1
										? "bg-primary text-[#1a1814]"
										: "text-[#ffffff] hover:text-primary"
								}`}
								onClick={(e) => setActive(Number(e.target.id))}>
								{item}
							</div>
						))}
					</div>
					<div className="flex-1">
						{filterItem.map((item) => (
							<div
								className="flex flex-col-reverse lg:flex-row lg:pl-5 transition duration-300"
								key={item.id}>
								<div className="lg:basis-[65%]">
									<h3 className="text-[26px] font-[600] font-Play-fair leading-[32px] mb-5">
										{item.title}
									</h3>
									<p className="italic text-[#aaaaaa] font-Open-sans textNormal leading-[21px] mb-3">
										{item.note}
									</p>
									<p className=" text-[#aaaaaa] font-Open-sans textNormal leading-[21px] mb-3">
										{item.description}
									</p>
								</div>
								<div className="lg:basis-[35%]">
									<img
										src={item.img}
										alt={item.title}
										className="w-full p-10"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Specials;
