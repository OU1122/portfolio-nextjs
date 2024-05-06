import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/components/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ondrej Urgosik | Personal Portfolio",
	description:
		"Fron-end Developer with number of years of experience working with JS, React, CSS, HTML, WordPress and Shopify",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="!scroll-smooth">
			<body
				className={`${inter.className} relative dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-90 bg-slate-50 text-slate-950 pt-28 sm:pt-36`}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] dark:bg-[#676394] lg:left-[-28rem] xl:left-[-15rem] -z-10"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
