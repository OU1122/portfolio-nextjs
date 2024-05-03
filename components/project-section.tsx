"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	return (
		<section className="group bg-slate-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-7 last:mb-0 hover:bg-slate-200 transition rounded-xl">
			<div className=" pt-5 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-slate-700 ">
					{description}
				</p>
				<ul className="flex flex-wrap gap-2 mt-auto">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
							key={index}>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				className="absolute top-8 -right-40 w-[28.25rem] rounded-t-2xl  shadow-2xl py-4 group-even:right-[initial] group-even:-left-40 
                
                group-hover:scale-[1.04]
                group-hover:-translate-x-3 group-hover:translate-y-3
                group-hover:-rotate-2 transition

                group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                "
				src={imageUrl}
				alt={title}
				quality={95}
			/>
		</section>
	);
}