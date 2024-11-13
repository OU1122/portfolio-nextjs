"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectSection from "@/components/project-section";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.1,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28">
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<ProjectSection {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
