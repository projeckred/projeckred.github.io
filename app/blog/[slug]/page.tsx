import Navbar from "@/app/_components/Navbar";
import type { Metadata, ResolvingMetadata } from "next";
import { blogsData } from "../_blogData/blogDataConfig";
import { NavItemT } from "@/app/_components/Navbar";
import IntroducingRed from "../_blogs/IntroducingRed";
import TransformingCommunities from "../_blogs/TransformingCommunities";

type Props = {
	params: { slug: string };
};

export function generateMetadata({ params }: Props, parent: ResolvingMetadata): Metadata {
	const slug = params.slug;

	return blogsData[slug] && blogsData[slug];
}

export default function Page({ params }: Props) {
	// get contents base on route slug
	if (!blogsData[params.slug]) {
		return <GoBack />;
	}
	return (
		<>
			{params.slug === "introducing-red" ? <IntroducingRed /> : <></>}
			{params.slug === "transforming-communities" ? <TransformingCommunities /> : <></>}
		</>
	);
}

const GoBack = () => {
	return (
		<>
			<section className="p-20 flex flex-col h-[80%] ">
				<div className="m-auto text-center">
					<h1 className="p-10 m-auto">Whooops Pages Does Not Exist!</h1>
					<a
						href="/"
						className="bg-dodgingBlue rounded-[5px] m-auto
					px-5 py-2.5 text-white font-medium text-button
					hover:bg-deepBlue
					transition-all ease-in-out duration-300
					motion-reduce:transition-none"
						rel="noreferrer"
					>
						GO BACK!
					</a>
				</div>
			</section>
		</>
	);
};
