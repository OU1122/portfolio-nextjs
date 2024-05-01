"use client";
import React from "react";
import Image from "next/image";
import profilePic from "@/public/profile-pic.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
				Hi, I am Ondrej. I'm a{" "}
				<span className="font-bold">front-end developer.</span> Continue
				reading to learn why I would make a great addition to your
				development team!
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex flex-col sm:flex-row text-center sm:items-center sm:justify-center gap-2 px-4 text-lg font-medium">
				<Link
					className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 transition"
					href="#contact">
					Contact me here{" "}
					<BsArrowRight
						className="group-hover
                    :translate-x-1"
					/>
				</Link>

				<a
					className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 hover:scale-110 transition cursor-pointer"
					href="https://linkedin.com"
					target="_blank">
					<BsLinkedin />
				</a>

				<a className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full text-[1.1rem] outline-none focus:scale-110 active:scale-105 hover:scale-110 transition hover:cursor-pointer">
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
