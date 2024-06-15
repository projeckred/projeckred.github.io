import Navbar from "@/app/_components/Navbar";
import type { Metadata, ResolvingMetadata } from "next";
import { blogsMetadata } from "../_blogData/blogDataConfig";
const sectionIds = [
	"introduction",
	"how-it-begin",
	"our-why",
	"our-programmes",
	"whats-new",
	"our-team",
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
			<Navbar {...{ sectionIds }} />
			<main className="p-32">{params.slug}</main>
		</>
	);
}

// const blogContent = () => {
// 	<>
// 		<h1>Introducing R.ED: Reimagine Education with us</h1>
// 	</>;
// };
