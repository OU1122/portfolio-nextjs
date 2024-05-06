"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Skills() {
	const { ref, inView } = useInView({
		threshold: 0.8,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Skills");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<section
			id="skills"
			ref={ref}
			className="max-w-[45rem]  px-1 sm:px-6 py-4 scroll-mt-28">
			<SectionHeading>My Skills</SectionHeading>
			<ul className="flex flex-wrap justify-center items-center">
				{skillsData.map((skill, index) => (
					<motion.li
						className="dark:bg-white/10 hover:dark:bg-white/15 dark:text-white/80 hover:dark:text-white/95 text-slate-900 p-2 sm:px-4 hover:scale-[1.07] hover:bg-slate-200 sm:py-2 text-l sm:text-xl border my-2 mx-2 sm:mx-3 sm:my-3 rounded-full"
						key={index}
						whileInView="animate"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
