"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			id="about"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className=" scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
			<SectionHeading>About me</SectionHeading>

			<p className="mb-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ullam
				sit dolore nostrum obcaecati, voluptate saepe non, in odit iure,
				quam officia inventore deleniti. Exercitationem delectus ullam ipsa
				numquam mollitia?
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
				velit totam eveniet, iure, mollitia sapiente sequi quam recusandae
				debitis atque dolor adipisci obcaecati quidem laboriosam illo.
				Necessitatibus excepturi consequatur voluptatibus!
			</p>
		</motion.section>
	);
}
