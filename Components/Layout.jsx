import React from "react";
import Hero from "../Sections/Hero";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Hero />

			{children}
		</>
	);
};

export default Layout;
