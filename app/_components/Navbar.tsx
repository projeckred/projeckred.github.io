"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DonateButton from "./DonateButton";
import Link from "next/link";

export type NavItemT = {
	id: string;
	title: string;
};

const Navbar = ({ navItems }: { navItems: NavItemT[] }) => {
	const LinkStyles =
		"p-4 hover:scaleHover scaleHoverT text-base font-light hover:scale-95 transition-all duration-300";

	const [toggle, setToggle] = useState(false);

	const handleClick = () => setToggle((prevToggle: boolean) => !prevToggle);

	// TODO: set default  navbar
	if (!navItems) return <></>;
	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full
    z-20 bg-black shadow-md`}
			>
				<div className="flex flex-row justify-between items-center py-4 gap-x-2.5 w-full md:max-w-screen-xl mx-auto px-8 md:px-16">
					<Link href="/">
						<Image
							src="/logo.png"
							width={798}
							height={410}
							alt="red logo with some text at bottom"
							className="w-24 md:w-32"
						/>
					</Link>
					<div>
						<nav className="hidden md:flex md:justify-around items-center text-white">
							{navItems.map((item: NavItemT) => {
								return (
									<Link key={item.id} className={`${LinkStyles}`} href={`#${item.id}`}>
										{item.title}
									</Link>
								);
							})}
						</nav>
						<BurgerButton {...{ toggle, handleClick }} />
					</div>
					<div className="hidden lg:block">
						<DonateButton />
					</div>
				</div>
				<MobileNavList {...{ toggle, handleClick, navItems }} />
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
				className={`bg-white w-8 h-[2px] rounded-full mb-2  transition-all duration-300 ${
					toggle ? "translate-y-[10px] -rotate-45 " : ""
				}`}
			></div>
			<div
				className={`bg-white w-8 h-[2px] rounded-full mb-2  transition-all duration-300 ${
					toggle ? "opacity-0 " : ""
				}`}
			></div>
			<div
				className={`bg-white w-8 h-[2px] rounded-full  transition-all duration-300 ${
					toggle ? "translate-y-[-10px] rotate-45 " : ""
				}`}
			></div>
		</div>
	);
};

const MobileNavList = ({
	toggle,
	handleClick,
	navItems,
}: burgerButtonProps & { navItems: NavItemT[] }) => {
	const linkStyle =
		"py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm text-white border-mineShaft";
	return (
		<nav
			className={`bg-black w-full fixed md:hidden z-10 flex flex-col justify-end ${
				toggle ? "block" : "hidden"
			}`}
		>
			{navItems.map((item) => {
				return (
					<Link
						key={item.id}
						className={`${linkStyle} border-t-[1px]`}
						onClick={handleClick}
						href={`#${item.id}`}
					>
						{item.title}
					</Link>
				);
			})}
		</nav>
	);
};
export default Navbar;
