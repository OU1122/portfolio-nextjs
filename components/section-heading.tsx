import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<h2 className=" dark:bg-opacity-50 text-center text-3xl font-medium capitalize mb-8">
			{children}
		</h2>
	);
}
