import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#000000] relative py-10 text-[#ffffff] flex flex-col justify-center text-center">
			<p className="font-open-sans text-[14px] pb-2">
				{" "}
				© Copyright Restaurantly. All Rights Reserved
			</p>
			<span className="font-open-sans text-[14px]">
				Designed by{" "}
				<a
					href="https://bootstrapmade.com/demo/Restaurantly/"
					title="BootstrapMade"
					className="text-primary italic font-[700]">
					BootstrapMade
				</a>{" "}
				& Developed By{" "}
				<a
					href="https://github.com/sakib-h"
					title="Sakib Hasan "
					className="text-primary italic font-[700]">
					Sakib Hasan
				</a>
			</span>
		</footer>
	);
};

export default Footer;
