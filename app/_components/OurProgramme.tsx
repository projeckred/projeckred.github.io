import Image from "next/image";

type programmesListT = {
	id: number;
	title: string;
	description: string;
	image: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
	shadow: string;
};

const programmes: programmesListT[] = [
	{
		id: 0xaa,
		title: "THRIVE",
		image: {
			src: "/programmes/thrive.svg",
			width: 200,
			height: 200,
			alt: "a simple image that resembles the title",
		},
		shadow: "rgba(49,104,216,0.2)",
		description:
			"The Thrive classes are our flagship enrichment classes we have been running for the past year. We aim to inculcate the our R.ED values : resilience, problem-solving and emotional intelligence through interactive, project-based lessons.",
	},
	{
		id: 0xbb,
		title: "BLOOM",
		image: {
			src: "/programmes/bloom.png",
			width: 200,
			height: 200,
			alt: "a simple image that resembles the title",
		},
		shadow: "rgba(198,47,106,0.2)",
		description:
			"The BLOOM classes will be for the little ones and will use Montessori methods and games to allow kids to learn about themselves and each other",
	},
	{
		id: 0xcc,
		title: "PLAY",
		image: {
			src: "/programmes/play.png",
			width: 200,
			height: 200,
			alt: "a simple image that resembles the title",
		},
		shadow: "rgba(255,183,44,0.2)",
		description:
			"Sports classes will be organised in collaboration with our partner, SL Raptors, a professional futsal team. We aim to provide a space to play, learn team work and reflect on the R.ED values (resilience, problem-solving and emotional intelligence).",
	},
	{
		id: 0xdd,
		title: "CODE",
		image: {
			src: "/programmes/code.png",
			width: 200,
			height: 200,
			alt: "a simple image that resembles the title",
		},
		shadow: "rgba(5,165,82,0.2)",
		description:
			"CODE is an introductory to computer and coding literacy classes for older students. We aim to teach the fundamentals of coding paired together with our R.ED values through individual and team based projects.",
	},
];
const OurProgramme = () => {
	return (
		<section id="our-programme" className="bg-deepCream">
			<div className="content py-16 md:p-20">
				<h2 className="text-4xl md:text-5xl font-bold text-deepBlue mb-16 text-center lg:text-left">
					Our Programme
				</h2>
				<section className="programmes flex flex-wrap justify-around gap-8">
					{programmes.map((program) => (
						<article
							key={program.id}
							className={`flex flex-col item-center lg:max-w-64 max-w-80 w-10/12 px-8 py-4 rounded-[50px] md:my-0 my-5`}
							style={{ boxShadow: `5px 5px 0 9px ${program.shadow}` }}
						>
							<h3 className={`text-2xl font-bold text-center mt-8`}>{program.title}</h3>
							{/*eslint-disable-next-line*/}
							<Image {...program.image} className="px-8 py-14 self-center" />
							<p className="text-sm">{program.description}</p>
						</article>
					))}
				</section>
			</div>
		</section>
	);
};

export default OurProgramme;
