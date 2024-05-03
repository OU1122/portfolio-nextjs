import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import ProjectSection from "@/components/project-section";

export default function Projects() {
	return (
		<section
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
