import Image from "next/image";
import { ReactNode } from "react";

const resourceList: ResourceCardProps[] = [
	{
		id: 0xaa,
		title: "Your Article Title Goes Here",
		description: (
			<>
				<p>
					This page is a great space to share what&apos;s new and what&apos;s happening with the
					students in the class.
				</p>
				<p>
					Keep updates short and easy to read. You can also ask the students to share their stories
					or photos.
				</p>
			</>
		),
		image: {
			src: "/resources/girls.jpg",
			width: 500,
			height: 500,
			alt: "string",
		},
		imagePosition: "bottom",
		bgColor: "#FF9039",
	},
	{
		id: 0xbb,
		title: "Your Article Title Goes Here",
		description: (
			<>
				<p>
					This page is a great space to share what&apos;s new and what&apos;s happening with the
					students in the class.
				</p>
				<p>
					Keep updates short and easy to read. You can also ask the students to share their stories
					or photos.
				</p>
			</>
		),
		image: {
			src: "/resources/girls.jpg",
			width: 500,
			height: 500,
			alt: "string",
		},
		imagePosition: "top",
		bgColor: "#05A552",
	},
	{
		id: 0xcc,
		title: "Your Article Title Goes Here",
		description: (
			<>
				<p>
					This page is a great space to share what&apos;s new and what&apos;s happening with the
					students in the class.
				</p>
				<p>
					Keep updates short and easy to read. You can also ask the students to share their stories
					or photos.
				</p>
			</>
		),
		image: {
			src: "/resources/girls.jpg",
			width: 500,
			height: 500,
			alt: "string",
		},
		imagePosition: "bottom",
		bgColor: "#2A4674",
	},
];
const Resources = () => {
	return (
		<section
			id="resources"
			className="bg-koromiko bg-[url(/resources/background-vertical.png)] lg:bg-[url(/resources/background.png)] bg-cover"
		>
			<div className="content m-auto py-16 md:p-20">
				<h2 className="font-bold text-4xl md:text-5xl text-center mb-16">Our Stories</h2>
				<section className="flex justify-around flex-col content-center gap-10 lg:flex-row lg:gap-0">
					{resourceList.map((resource) => (
						<ResourceCard
							key={resource.id}
							title={resource.title}
							description={resource.description}
							image={resource.image}
							imagePosition={resource.imagePosition}
							bgColor={resource.bgColor}
						/>
					))}
				</section>
			</div>
		</section>
	);
};

type ResourceCardProps = {
	id?: number;
	bgColor?: string;
	title: string;
	description: ReactNode;
	image: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
	imagePosition: "top" | "bottom";
};

const ResourceCard = ({ title, description, image, imagePosition, bgColor }: ResourceCardProps) => {
	// eslint-disable-next-line
	const featuredImage = <Image className="w-[100%] rounded-lg" {...image} />;
	return (
		<article
			className="flex flex-col gap-5 lg:w-80 w-10/12 max-w-[500px] rounded-3xl p-10 text-white m-auto"
			style={{ backgroundColor: bgColor ? bgColor : "#2A4674" }}
		>
			{imagePosition == "top" && featuredImage}
			<h3 className="text-2xl font-extrabold">{title}</h3>
			<div className="flex flex-col gap-5 text-sm">{description}</div>
			{imagePosition == "bottom" && featuredImage}
		</article>
	);
};

export default Resources;
