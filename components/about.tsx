"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
	const { ref, inView } = useInView({
		threshold: 0.8,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("About");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<motion.section
			ref={ref}
			id="about"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className=" scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
			<SectionHeading>About me</SectionHeading>

			<p className="mb-3">
				I&apos;m a passionate Front End Developer based in the vibrant city
				of London. With a background in{" "}
				<span className="font-bold">
					Web, Frontend & Ecommerce Development
				</span>
				, I&apos;m all about creating visually stunning and user-friendly
				web experiences that leave a lasting impression. I geek out over
				modern web and e-commerce technologies like JavaScript, React.js,
				HTML/CSS, and Shopify, and I&apos;ve got a knack for crafting
				responsive, reusable, and lightning-fast user interfaces.
			</p>
			<p className="mt-6">
				I bring not just technical expertise, but also a passion for design
				and user experience. I thrive in collaborative environments, have a
				strong background in project management, and am committed to
				delivering high-quality solutions while continuously learning and
				adapting to new technologies and industry best practices. Let&apos;s
				build something awesome together!
			</p>
		</motion.section>
	);
}
