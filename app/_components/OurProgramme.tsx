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
};

const programmes: programmesListT[] = [
	{
		id: 0xaa,
		title: "THRIVE",
		image: {
			src: "/programmes/thrive.svg",
			width: 250,
			height: 250,
			alt: "a simple image that resembles the title",
		},
		description:
			"The Thrive Classes are our flagship enrichment classes we have been running for the past year. We aim to inculcate the our R.ED values : resilience, problem-solving and emotional intelligence through interactive, project-based lessons.",
	},
	{
		id: 0xbb,
		title: "BLOOM",
		image: {
			src: "/programmes/bloom.png",
			width: 250,
			height: 250,
			alt: "a simple image that resembles the title",
		},
		description:
			"The BLOOM classes will be for the little ones and will use Montessori methods and games to allow kids to learn about themselves and each other",
	},
	{
		id: 0xcc,
		title: "PLAY",
		image: {
			src: "/programmes/play.png",
			width: 250,
			height: 250,
			alt: "a simple image that resembles the title",
		},
		description:
			"Sports classes will be organised in collaboration with our partner, SL Raptors, a professional futsal team. We aim to provide a space to play, learn team work and reflect on the R.ED values (resilience, problem-solving and emotional intelligence).",
	},
	{
		id: 0xdd,
		title: "CODE",
		image: {
			src: "/programmes/code.png",
			width: 250,
			height: 250,
			alt: "a simple image that resembles the title",
		},
		description:
			"CODE is an introductory to computer and coding literacy classes for older students. We aim to teach the fundamentals of coding paired together with our R.ED values through individual and team based projects.",
	},
];
const OurProgramme = () => {
	return (
		<section id="our-programme" className="bg-cream">
			<div className="content">
				<h2 className="text-header2 ">Our Programme</h2>
				<section className="programmes flex flex-wrap justify-around">
					{programmes.map((program) => (
						<article key={program.id} className="max-w-64">
							<h3 className="text-header3">{program.title}</h3>
							{/*eslint-disable-next-line*/}
							<Image {...program.image} />
							<p>{program.description}</p>
						</article>
					))}
				</section>
			</div>
		</section>
	);
};

export default OurProgramme;
