import { Metadata } from "next";
import { BlogCardOldProps } from "../_components/BlogCard";
import tinyWomenColoring from "@/public/blogs/introducing-red/tiny-women-coloring.jpg";
import tinyHumanColoring from "@/public/blogs/transforming-communities/tiny-human-writing.webp";
// type blogsMetadataT = {
// 	title: string;
// 	description: string;
// 	icons: string;
// };

export const blogsMetadata: { [key: string]: Metadata } = {
	"introducing-red": {
		title: "Introducing R.ED: Reimagine Education with us",
		description: "An alternative education platform for marginalized communities in Malaysia",
		icons: "/logo.png",
	},
	"transforming-communities": {
		title: "Transforming Communities Through Education",
		description: "An alternative education platform for marginalized communities in Malaysia",
		icons: "/logo.png",
	},
};

export const blogsCardData = [
	{
		title: "Introducing R.ED: Reimagine Education with us",
		image: tinyHumanColoring,
		excerpt:
			"Every child has the right to quality education, among other fundamental rights. However, refugee children are often denied such rights...",
		link: "/blog/introducing-red",
	},
	{
		title: "Transforming Communities Through Education: R.ED & Our Beginnings",
		image: tinyWomenColoring,
		excerpt:
			"Today, we have expanded from a team of 8 to over 40 volunteers. Looking back, I would have never imagined we would get this far...",
		link: "/blog/transforming-communities",
	},
];

export const blogsCardDataOld: BlogCardOldProps[] = [
	{
		id: 0xaa,
		title: "Introducing R.ED: Reimagine Education with us",
		excerpt:
			"Every child has the right to quality education, among other fundamental rights. However, refugee children are often denied such rights...",
		link: "/blog/introducing-red",
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
		title: "Transforming Communities Through Education: R.ED & Our Beginnings",
		excerpt:
			"Today, we have expanded from a team of 8 to over 40 volunteers. Looking back, I would have never imagined we would get this far...",
		link: "/blog/transforming-communities",
		image: {
			src: "/resources/girls.jpg",
			width: 500,
			height: 500,
			alt: "string",
		},
		imagePosition: "top",
		bgColor: "#05A552",
	},
];
