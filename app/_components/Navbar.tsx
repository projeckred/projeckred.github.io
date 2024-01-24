"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DonateButton from "./DonateButton";
const Navbar = () => {
	const LinkStyles = "p-4 hover:scaleHover scaleHoverT font-medium text-sm";
	const activeStyle = "bg-transparent lg:bg-black/10 font-semibold";
	const sectionIds = ["introduction", "mission", "what-we-do", "donation", "testimonial", "footer"];

	const [toggle, setToggle] = useState(false);
	const [activeSection, setActiveSection] = useState(sectionIds[0]);

	const handleClick = () => setToggle((prevToggle: boolean) => !prevToggle);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.6,
			},
		);

		sectionIds.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => {
			sectionIds.forEach((id) => {
				const section = document.getElementById(id);
				if (section) observer.unobserve(section);
			});
		};
		// eslint-disable-next-line
	}, [activeSection]);
	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full
    z-10 ${toggle ? "bg-black" : "bg-cream"} shadow-md`}
			>
				<div className="flex flex-row justify-between items-center py-4 gap-x-2.5 w-full md:max-w-screen-xl mx-auto px-8 md:px-16">
					<a href="#introduction">
						<Image
							src="/logo.png"
							width={64}
							height={64}
							alt="red logo with some text at bottom"
							className="w-10 md:w-16"
						/>
					</a>
					<div>
						<nav className="hidden md:flex md:justify-around items-center">
							<a
								className={`${LinkStyles} ${activeSection === "introduction" ? activeStyle : ""}`}
								href="#introduction"
							>
								Introduction
							</a>
							<a
								className={`${LinkStyles} ${activeSection === "mission" ? activeStyle : ""}`}
								href="#mission"
							>
								Mission
							</a>
							<a
								className={`${LinkStyles} ${activeSection === "what-we-do" ? activeStyle : ""}`}
								href="#what-we-do"
							>
								What We Do
							</a>
							<a
								className={`${LinkStyles} ${activeSection === "testimonials" ? activeStyle : ""}`}
								href="#testimonials"
							>
								Testimonials
							</a>
							<a
								className={`${LinkStyles} ${activeSection === "contact" ? activeStyle : ""}`}
								href="#contact"
							>
								Contact
							</a>
						</nav>
						<BurgerButton {...{ toggle, handleClick }} />
					</div>
					<div className="hidden lg:block">
						<DonateButton />
					</div>
				</div>
				<MobileNavList {...{ toggle, handleClick }} />
			</header>
		</>
	);
};

type burgerButtonProps = {
	toggle: boolean;
	handleClick: () => void;
};

const BurgerButton = ({ toggle, handleClick }: burgerButtonProps) => {
	return (
		<div onClick={handleClick} className={`md:hidden transition-all duration-300`}>
			<div
				className={`${
					toggle ? "bg-white" : "bg-black"
				} w-8 h-[2px] rounded-full mb-2  transition-all duration-300 ${
					toggle ? "translate-y-[10px] -rotate-45 " : ""
				}`}
			></div>
			<div
				className={`${
					toggle ? "bg-white" : "bg-black"
				} w-8 h-[2px] rounded-full mb-2  transition-all duration-300 ${toggle ? "opacity-0 " : ""}`}
			></div>
			<div
				className={`${
					toggle ? "bg-white" : "bg-black"
				} w-8 h-[2px] rounded-full  transition-all duration-300 ${
					toggle ? "translate-y-[-10px] rotate-45 " : ""
				}`}
			></div>
		</div>
	);
};

const MobileNavList = ({ toggle, handleClick }: burgerButtonProps) => {
	const linkStyle =
		"py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm text-white border-mineShaft";
	return (
		<nav
			className={`bg-black w-full fixed md:hidden z-10 flex flex-col justify-end ${
				toggle ? "block" : "hidden"
			}`}
		>
			<a className={`${linkStyle} border-t-[1px]`} onClick={handleClick} href="#introduction">
				Introduction
			</a>
			<a className={`${linkStyle}`} onClick={handleClick} href="#mission">
				Mission
			</a>
			<a className={`${linkStyle}`} onClick={handleClick} href="#what-we-do">
				What We Do
			</a>
			<a className={`${linkStyle}`} onClick={handleClick} href="#testimonials">
				Testimonials
			</a>
			<a className={`${linkStyle} shadow-xl`} onClick={handleClick} href="#contact">
				Contact
			</a>
		</nav>
	);
};
export default Navbar;
