"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
			className="bg-slate-200 my-20 w-1 h-16 rounded-full hidden sm:block "></motion.div>
	);
}
