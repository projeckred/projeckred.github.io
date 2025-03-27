import Image from "next/image";
import Link from "next/link";
export function BlogCard({
	title,
	image,
	excerpt,
	link,
}: {
	title: any;
	image: any;
	excerpt: any;
	link: any;
}) {
	return (
		<div className="bg-cream rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 max-w-[95%] m-auto">
			<div className="relative h-48">
				<Image src={image} alt={title} className="object-cover" fill />
			</div>
			<div className="p-6">
				<h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
				<p className="text-gray-700 text-base mb-4">{excerpt}</p>
				<Link
					href={link}
					className="inline-block text-white bg-dodgingBlue hover:bg-deepBlue transition-colors duration-300 font-semibold py-2 px-4 rounded"
				>
					Read More
				</Link>
			</div>
		</div>
	);
}

export type BlogCardOldProps = {
	id?: number;
	bgColor?: string;
	title: string;
	excerpt: string;
	link: string;
	image: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
	imagePosition: "top" | "bottom";
};

export const BlogCardOld = ({
	title,
	excerpt,
	link,
	image,
	imagePosition,
	bgColor,
}: BlogCardOldProps) => {
	// eslint-disable-next-line
	const featuredImage = <Image className="w-[100%] rounded-lg" {...image} />;
	return (
		<article
			className="flex flex-col gap-5 lg:w-80 w-10/12 max-w-[500px] rounded-3xl p-10 text-white m-auto"
			style={{ backgroundColor: bgColor ? bgColor : "#2A4674" }}
		>
			{imagePosition === "top" && featuredImage}
			<h3 className="text-2xl font-extrabold">{title}</h3>
			<p>{excerpt}</p>
			{imagePosition === "bottom" && featuredImage}
			<Link
				href={link}
				className="text-white bg-dodgingBlue hover:bg-deepBlue transition-colors duration-300 font-semibold py-2 px-4 rounded"
			>
				Read More
			</Link>
		</article>
	);
};
