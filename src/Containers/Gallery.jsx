import React from "react";
import { galleryData } from "../Data/Data";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const Gallery = () => {
	return (
		<section
			id="gallery"
			className="bg-[#0C0B09] relative text-[#ffffff] py-32">
			<div className="container">
				<div className="title mb-[40px]">
					<div className="flex flex-row items-center justify-start">
						<h2 className="text-Poppins textNormal uppercase pr-3">
							Gallery
						</h2>
						<div className="border-t-2 border-[#ffffff33] w-[120px]"></div>
					</div>
					<h1 className="font-Play-fair text-[28px] lg:text-[32px]  2xl:text-[36px] text-primary font-bold leading-[54px]">
						Some photos from Our Restaurant
					</h1>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}>
				<LightGallery speed={500} plugins={[lgZoom, lgThumbnail]}>
					{galleryData.map((data) => (
						<a
							href={data.img}
							key={data.id}
							className="border-[2px] border-[#454035] overflow-hidden">
							<motion.img
								src={data.img}
								alt={data.alt}
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3 }}
							/>
						</a>
					))}
				</LightGallery>
			</motion.div>
		</section>
	);
};

export default Gallery;
