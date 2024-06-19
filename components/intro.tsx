"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "@/public/profile-pic.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
	const { ref, inView } = useInView({
		threshold: 0.4,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Home");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2 }}>
						<Image
							src={profilePic}
							alt="profile picture"
							width="192"
							height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl"
						/>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className="absolute bottom-0 right-0 text-4xl ">
						🧑🏻‍💻
					</motion.span>
				</div>
			</div>
			<motion.p
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
				Hi, I&apos;m Ondrej. I am a
				<span className="font-bold"> front-end developer.</span> Continue
				reading to learn more about me, my experience and my projects.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex flex-col sm:flex-row text-center sm:items-center sm:justify-center gap-2 px-4 text-lg font-medium">
				<Link
					className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 transition"
					href="#contact">
					Get in Touch{" "}
					<BsArrowRight
						className="group-hover
                    :translate-x-1"
					/>
				</Link>

				<a
					className="bg-white dark:bg-white/10 dark:text-white text-slate-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 hover:scale-110 transition cursor-pointer"
					href="https://www.linkedin.com/in/ondrej-urgosik/"
					target="_blank">
					<BsLinkedin />
				</a>

				<a
					href="https://github.com/OU1122/"
					className="bg-white  dark:bg-white/10 dark:text-white text-slate-700 p-4 flex items-center gap-2 rounded-full text-[1.1rem] outline-none focus:scale-110 active:scale-105 hover:scale-110 transition hover:cursor-pointer">
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
