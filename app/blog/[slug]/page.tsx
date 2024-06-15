import Navbar from "@/app/_components/Navbar";
import type { Metadata, ResolvingMetadata } from "next";
import { blogsMetadata } from "../_blogData/blogDataConfig";
import { title } from "process";
import { NavItemT } from "@/app/_components/Navbar";
const navItems: NavItemT[] = [
	{ id: "introduction", title: "Introducing R.ED" },
	// { id: "how-it-begin", title: "" },
	// { id: "our-why", title: "" },
	{ id: "programmes-and-value", title: "Our Programmes & Core Values" },
	{ id: "whats-new", title: "What's New?" },
	{ id: "our-team", title: "Our Team" },
];

type Props = {
	params: { slug: string };
};

export function generateMetadata({ params }: Props, parent: ResolvingMetadata): Metadata {
	const slug = params.slug;

	return blogsMetadata[slug] && blogsMetadata[slug];
}

export default function Page({ params }: Props) {
	// get contents base on route slug

	return (
		<>
			<Navbar {...{ navItems }} />
			<main className="p-32">{params.slug}</main>
		</>
	);
}

// const blogContent = () => {
// 	<>
// 		<h1>Introducing R.ED: Reimagine Education with us</h1>
// 	</>;
// };
