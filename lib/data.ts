import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import colapzImg from "@/public/colapz.png";
import bbImg from "@/public/bb.png";
import properMove from "@/public/proper-move.jpg";
import calleJara from "@/public/calle-jara.png";
import devJobs from "@/public/devjobs.png";

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
		title: "Graduated College in Information Technology",
		location: "Sumperk, Czech Republic.",
		description:
			"Course with focus on Programming, Databases, and Server Management. I have gained number of relevant skills, such as:  Software Development, Database Administration and Network Security",
		icon: React.createElement(LuGraduationCap),
		date: "Aug 2012 - Jun 2016",
	},
	{
		title: "Web Developer",
		location: "Prague, Czech Republic",
		description:
			"Enhanced user experience and conversion rates by strategically designing landing pages and implementing UX improvements. Quickly built new commercial websites to client specifications using HTML, CSS, PHP, and JavaScript, and translated designs into robust UIs on WordPress and PrestaShop. Achieved significant conversion rate boosts through targeted landing page optimizations and UX enhancements.",
		icon: React.createElement(CgWorkAlt),
		date: "2017 - 2020",
	},
	{
		title: "E-commerce & Digital Marketing Specialist",
		location: "London, UK",
		description:
			"At Siech Cycles, I specialised in e-commerce management, focusing on WordPress platform and leveraging my expertise in HTML, CSS, and JavaScript, while delivering on website optimisation through A/B testing and Heatmap analysis to enhance user experience and improve conversion rates.",
		icon: React.createElement(FaWordpress),
		date: "July 2021 - February 2023",
	},
	{
		title: "Ecommerce & Digital Marketing Manager",
		location: "London, UK",
		description:
			"Led the development and launch of high-performance e-commerce websites for brands like BAKBLADE, TagBand, Colapz, and Driftsun on Shopify, utilizing Liquid, HTML, CSS, and JavaScript. Enhanced website performance through SEO analysis, A/B testing, and UX monitoring, achieving a 20% improvement in page load times, a 15% reduction in bounce rates, and a 20% increase in session length. Optimized Core Web Vitals and JavaScript codebase, resulting in a 1% uplift in conversion rate and 140% growth in CM3. Collaborated with cross-functional teams to ensure seamless project execution.",
		icon: React.createElement(FaShopify),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
	{
		title: "ProperMove",
		description:
			"Property search made easy. Personal project built for the purpose of testing JWT authentication, new React Router and Prisma ORM",
		tags: ["React", "TypeScript", "NodeJS", "Express", "MongoDB", "Prisma"],
		imageUrl: properMove,
		link: "https://proper-move.netlify.app",
	},
	{
		title: "Calle Jara",
		description:
			"Static website created to promote a holiday rental business in Spain. With a user-friendly interface, visitors can easily learn about the property and contact the owner directly to facilitate bookings.",
		tags: ["React", "Next.js", "Tailwind", "MUI", "Zod", "Framer Motion"],
		imageUrl: calleJara,
		link: "/",
	},
	{
		title: "DevJobs",
		description:
			"Job Board Frontend App Concept. Currently using local .json data file - Work in progress to turn this into an Full Stack App.",
		tags: ["React", "TypeScript"],
		imageUrl: devJobs,
		link: "https://66e142fc39d2e6a7708ad8a9--sunny-scone-9a0760.netlify.app/",
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
		link: "https://colapz.co.uk",
	},
	{
		title: "BAKBLADE",
		description:
			"7 Figure Ecommerce website selling mens grooming tools to men in the US 🇺🇸. Developed and Managed by me and my team. Improved website loading speed, SEO ranking, UX & conversion rate (60% uplift).",
		tags: ["Shopify", "Liquid", "Project Management", "GitHub", "API"],
		imageUrl: bbImg,
		link: "https://bakblade.com",
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
