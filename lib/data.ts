import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import colapzImg from "@/public/colapz.png";
import bbImg from "@/public/bb.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated bootcamp",
		location: "Miami, FL",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "ProperMove",
		description:
			"Property search made easy. Personal project built for the purpose of testing JWT authentication, new React Router and Prisma ORM",
		tags: ["React", "TypeScript", "NodeJS", "Express", "MongoDB", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Calle Jara",
		description:
			"Static website created to promote a holiday rental business in Spain. With a user-friendly interface, visitors can easily learn about the property and contact the owner directly to facilitate bookings.",
		tags: ["React", "Next.js", "Tailwind", "MUI", "Zod", "Framer Motion"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Colapz",
		description:
			"Ecommerce website selling innovative and save-spacing in the Camping, Motorhome & Campervan niche. Leading on the website development, implementation of the design, social proof features, upsell & cross-sell and more.",
		tags: [
			"Shopify",
			"Liquid",
			"Project Management",
			"GitHub",
			"Monday.com",
			"API",
		],
		imageUrl: colapzImg,
	},
	{
		title: "BAKBLADE",
		description:
			"7 Figure Ecommerce website selling mens grooming tools to men in the US 🇺🇸. Developed and Managed by me and my team. Improved website loading speed, SEO ranking, UX & conversion rate (60% uplift).",
		tags: ["Shopify", "Liquid", "Project Management", "GitHub", "API"],
		imageUrl: bbImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Redux",
	"GraphQL",
	"PostgreSQL",
	"SEO",
	"Framer Motion",
] as const;
