import Image from "next/image";
import BlogH2 from "../_components/BlogH2";
import BlogP from "../_components/BlogP";
import { teamMetadata } from "@/app/_imageConfigs/teamConfig";
import Navbar, { NavItemT } from "@/app/_components/Navbar";
import BlogH1 from "../_components/BlogH1";
import BlogBody from "../_components/BlogBody";

const navItems: NavItemT[] = [
	{ id: "introduction", title: "Introducing R.ED" },
	// { id: "how-it-begin", title: "" },
	// { id: "our-why", title: "" },
	{ id: "programmes-and-value", title: "Our Programmes & Core Values" },
	{ id: "whats-new", title: "What's New?" },
	{ id: "our-team", title: "Our Team" },
];

const IntroducingRed = () => {
	return (
		<>
			<Navbar {...{ navItems }} />
			<BlogBody>
				<section id="introduction">
					<BlogH1>Introducing R.ED: Reimagine Education with us</BlogH1>
					<Image
						src="/blogs/introducing-red/red-logo.png"
						alt="R.ED Logo"
						className="mb-6 mx-auto"
						width={1080}
						height={451}
					/>

					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						Every child has the right to quality education, among other fundamental rights. However,
						refugee children are often denied such rights, affecting their need to prepare for an
						uncertain future.
					</p>

					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						In Malaysia, there are over 50,000 refugee children under the age of 18. As Malaysia is
						a non-signatory in the 1951 UN Refugee Convention, these children and youth cannot
						receive formal education at any level; instead, they only have access to informal
						education through community-based learning centres. Usually, these centres are supported
						by UNHCR and other UN agencies, but still, they lack the resources which affects the
						quality of education delivered.
					</p>

					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						The unknown nature of the future requires more than just textbooks and parroting after
						teachers, even more so for these refugee children who are living in volatile
						circumstances. The needs vary with each child. But what we know is that refugee children
						need a form of education that will equip them with the necessary skills to not just
						survive, but thrive in any uncertain future.
					</p>
					<BlogH2>R.ED: Reimagine Education</BlogH2>
					<Image
						src="/blogs/introducing-red/tiny-women-coloring.jpg"
						alt="tiny human coloring"
						className="mb-6 mx-auto"
						width={1600}
						height={1066}
					/>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						And this is where R.ED comes in. R.ED stands for Reimagine Education, and that’s exactly
						what we are doing. We are taking advantage of the transformative power of education,
						moving beyond traditional classroom learning and fostering an environment where refugee
						children can learn, explore, build resilience, and become the best versions of
						themselves.
					</p>

					<BlogH2>How Did It Begin?</BlogH2>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						R.ED was founded by Hilda Paviter, an educator at heart and in profession, and Aunger
						Aung, an advocate passionate in youth empowerment and a refugee herself. They first met
						through a short volunteering stint which developed into them talking, and then later,
						planning activities that incorporated different values to ensure a more valuable
						learning experience for the students.
					</p>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						Understanding the lack of access to quality education for refugee children, this passion
						developed into something even more solid – a whole programme that focuses on empowering
						children to thrive through alternative learning. After all, education isn&apos;t just
						about acquiring knowledge; it is about empowerment. It is the key that unlocks a world
						of possibilities, allowing children to navigate uncertainties and build a meaningful
						life. Since the very beginning of R.ED, we believe every child deserves this
						opportunity, regardless of their background.
					</p>
					<BlogH2>Our Why - Mission & Vision</BlogH2>
					<p className="text-gray-700 text-lg leading-relaxed mb-4">
						<span className="font-bold">Our Vision</span>- All children will be equipped with the
						values and skills to thrive in any uncertainty or journey they go through in order to be
						the best versions of themselves.
					</p>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						<span className="font-bold">Our Mission</span> - At R.ED, we aim to create a safe space
						of learning for children to give them the chance to learn, explore and thrive in a life
						of uncertainties.
					</p>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						We recognize that these children have experienced circumstances far from normalcy, often
						without the opportunity for a typical childhood or formal education.A safe space that
						allows them to share their ideas and ask questions without any judgement will create a
						more comfortable learning environment. With R.ED, the students will be learning more
						than academics, and it is important that the classroom environment facilitates learning
						that allows them to be lifelong learners.
					</p>
					<Image
						src="/blogs/introducing-red/tiny-man-drawing.jpg"
						width={1600}
						height={1066}
						className="mb-6 mx-auto"
						alt="tiny human drawing"
					/>
				</section>
				<section id="programmes-and-value">
					<BlogH2>Our Programmes & Core Values</BlogH2>
					<p className="text-gray-700 text-lg leading-relaxed mb-6">
						Traditional classroom learning tends to focus on memorization and standardised tests,
						often neglecting the need for creativity and emotional intelligence for the students.
						R.ED’s dynamic learning programme features weekly classes centred around different
						subject themes while tailoring them to our core student values.
					</p>

					<p className="text-gray-700 text-lg leading-relaxed mb-2 font-bold">Student Values:</p>
					<ul>
						<li className="text-gray-700 text-lg leading-relaxed mb-2 list-disc ml-5 ">
							<span className="font-bold">Resilience</span> - the ability to cope with stress and
							adversity.
							<br />
							Our students will learn tohandle difficult situations and challenges, and to bounce
							back from setbacks or failures.
						</li>
						<li className="text-gray-700 text-lg leading-relaxed mb-2 list-disc ml-5 ">
							<span className="font-bold">Problem Solving skills</span> - identify problems and come
							up with effective solutions.
							<br />
							Our students will learn to think critically and creatively to find ways to overcome
							challenges.
						</li>
						<li className="text-gray-700 text-lg leading-relaxed mb-2 list-disc ml-5 ">
							<span className="font-bold">Emotional intelligence</span> - regulate their emotions
							and behaviours effectively.
							<br />
							Our students will learn to manage their own actions and reactions, even in stressful
							or challenging situations.
						</li>
					</ul>
				</section>
				<section id="whats-new">
					<BlogH2>What&apos;s New?</BlogH2>
					<BlogP>
						The programme has gone through several updates since it first began. This is to ensure
						what we are delivering is suitable and beneficial for the students. Our first programme
						started with academic subjects, and in the following year, it transformed into adynamic
						course with 3 subject themes - English Communication, Sustainability Education and
						Entrepreneurship.{" "}
					</BlogP>
					<BlogP>
						In 2024, as we move towards a school partnering model with refugee schools around Klang
						Valley, the programme has gone through an even bigger update. While our thematic class
						is still maintained (and renamed THRIVE), we now provide 3 more classes on coding,
						sports and sensorial education (CODE, PLAY and BLOOM)
					</BlogP>
				</section>
				<section id="our-team">
					<BlogH2>Our Team</BlogH2>
					<TeamGallery />
					<BlogP>
						R.ED started off with 8 team members managing weekly classes for 30 students, ages 7-13.
						In 2024, R.ED has now grown into a dedicated team of 49 volunteers (including the 14 who
						form the core team) who recognized the value of our work and were eager to contribute
						their expertise and time. The team comprises individuals from diverse occupational
						backgrounds, including coding, marketing, education and full/part-time students pursuing
						their degrees and masters.
					</BlogP>
					<BlogP>
						We also have a diverse range of nationalities including young refugees who wants to give
						back to their community. This diverse team enriches our approach to holistic learning
						and allows us to offer a wide range of skills and knowledge to support refugee education
						in Malaysia.
					</BlogP>
					<BlogP>
						We are happy to work with partners and members, past and present, who share the same
						values and vision as R.ED to empower youth from marginalised communities. The truth is
						that we can’t do this alone. We know that an issue like this requires all hands on deck.
						<br />
						As we explore this wicked problem, we warmly invite you whether as a
						partner/champion/volunteer/funder, both past and present, who resonate with R.ED&apos;s
						mission to join us in Reimagining Education.
					</BlogP>
				</section>
			</BlogBody>
		</>
	);
};

const TeamGallery = () => {
	return (
		<>
			<section className="flex m-auto max-w-[100%]">
				{teamMetadata.map(
					(member, i) =>
						i < 7 && (
							<Image
								key={member.id}
								src={member.image.src}
								width={member.image.width * 0.5}
								height={member.image.height * 0.5}
								alt={member.image.alt}
								className="w-[14.2%]"
							/>
						),
				)}
			</section>
			<section className="flex m-auto max-w-[100%] mb-6">
				{teamMetadata.map(
					(member, i) =>
						i >= 7 && (
							<Image
								key={member.id}
								src={member.image.src}
								width={member.image.width * 0.5}
								height={member.image.height * 0.5}
								alt={member.image.alt}
								className="w-[14.2%]"
							/>
						),
				)}
			</section>
		</>
	);
};

export default IntroducingRed;
