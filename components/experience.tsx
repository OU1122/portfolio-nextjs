"use client";
import React, { useEffect } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Experience() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Experience");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<section
			ref={ref}
			id="experience"
			className="scroll-mt-28C">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor="#f3f4f6">
				{experiencesData.map((experience, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								boxShadow: "none",
								border: "1px solid rgba(0,0,0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
								visibility: "visible",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={experience.date}
							icon={experience.icon}
							visible={true}
							iconStyle={{
								visibility: "visible",
								background: "white",
								fontSize: "1.5rem",
							}}>
							<h3 className="font-semibold capitalize">
								{experience.title}
							</h3>
							<p className="font-normal !mt-0">{experience.location}</p>
							<p className="!mt-1 !font-normal text-slate-700">
								{experience.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
