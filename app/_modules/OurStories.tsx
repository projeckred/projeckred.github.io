import { BlogCard } from "../blog/_components/BlogCard";
import { blogsCardData } from "../blog/_blogData/blogData";

const OurStories = () => {
	return (
		<section
			id="our-stories"
			className="bg-koromiko bg-[url(/our-stories/background-vertical.png)] lg:bg-[url(/resources/background.png)] bg-cover"
		>
			<div className="content m-auto py-16 md:p-20">
				<h2 className="font-bold text-4xl md:text-5xl text-center mb-16">Our Stories</h2>
				<section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
					{/* {blogsCardDataOld.map((data) => (
						<BlogCardOld
							key={data.id}
							title={data.title}
							excerpt={data.excerpt}
							link={data.link}
							image={data.image}
							imagePosition={data.imagePosition}
							bgColor={data.bgColor}
						/>
					))} */}
					{blogsCardData.map((blog) => (
						<BlogCard
							key={blog.title}
							title={blog.title}
							image={blog.image}
							excerpt={blog.excerpt}
							link={blog.link}
						/>
					))}
				</section>
			</div>
		</section>
	);
};

export default OurStories;
