"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Contact");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return (
		<section
			ref={ref}
			id="contact"
			className="text-center w-[min(100%,38rem)]">
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-slate-700">
				Please contact me at{" "}
				<a
					className="underline"
					href="mailto:ondrej@eliquinox.co.uk">
					ondrej@eliquinox.co.uk
				</a>{" "}
				or through the form below.
			</p>

			<form
				action={sendEmail}
				className="mt-10 flex flex-col">
				<input
					name="email"
					required
					maxLength={500}
					placeholder="Your email"
					className=" h-14 rounded-lg border borer-black/10 px-4
                    outline-slate-700"
					type="email"
				/>
				<textarea
					name="message"
					required
					maxLength={2000}
					placeholder="Your message"
					className="h-52 my-3 rounded-lg border outline-slate-700 border-black/10 p-4"
				/>
				<button
					className="flex gap-2 items-center justify-center h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all hover:scale-[1.05] "
					type="submit">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
