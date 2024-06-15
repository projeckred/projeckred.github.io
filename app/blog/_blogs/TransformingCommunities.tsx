import BlogH1 from "../_components/BlogH1";
import BlogBody from "../_components/BlogBody";
import Navbar from "@/app/_components/Navbar";
import { NavItemT } from "@/app/_components/Navbar";
import Image from "next/image";
import BlogP from "../_components/BlogP";
import BlogH2 from "../_components/BlogH2";
const navItems: NavItemT[] = [
	{ id: "transform", title: "Transforming Communities" },
	{ id: "pilot-programme", title: "The Pilot Programme" },
	{ id: "the-plan", title: "The Plan For 2024" },
];
const TransformingCommunities = () => {
	return (
		<>
			<Navbar {...{ navItems }} />
			<BlogBody>
				<section id="transform">
					<BlogH1>Transforming Communities Through Education: R.ED & Our Beginnings</BlogH1>
					<Image
						src="/blogs/transforming-communities/tiny-human-writing.webp"
						alt="Tiny human writing"
						className="mb-6 mx-auto"
						width={1599}
						height={1066}
					/>
					<BlogP>
						Growing up as a refugee, education has always been the pinnacle focus of my life.
						Despite my parents&apos; limited access to education in their times, they prioritised
						education for me and my siblings. Thanks to their dedication, I am the first person in
						my family, from both sides, to pursue tertiary education and graduate from a university.
						Today, I am proud to be pursuing a Master&apos;s in Global Diplomacy at the University
						of London. These achievements made me who I am today and gave me the confidence to
						thrive in our highly competitive society.
					</BlogP>
					<BlogP>
						My first experience of volunteering started in my second year of university. Greatly
						troubled by the lack of access to education by refugee children, I decided to dedicate
						my time to volunteering at a small NGO called Myanmar Ethnic Women Refugee Organisation
						(MEWRO). They provided support to children who needed additional assistance with their
						homework with a weekly class. This program continued for a while, with a little break in
						between due to the pandemic and resumed after things got eased up.
					</BlogP>
					<BlogP>
						In 2021, I graduated and got my first job at a local non-profit organisation.
						That&apos;s where I met Hilda, my co-founder of R.ED. She was one of the most wholesome
						people I have ever met and we became close in such a short time. I was still teaching
						and volunteering at MEWRO at the time. Knowing that she had some teaching experience, I
						asked if she would like to join me to teach the kids. We started volunteering together
						and discussed more about the different subjects and values we wanted to teach the kids.
						The whole process was very informal.
					</BlogP>
					<BlogP>
						Unfortunately, we had no idea the programme would be ending very soon. When we found
						out, we just knew that there must be something we could do to continue this effort. So
						we made a decision to come up with a proper programme and structure for the kids and
						brainstormed our ideas, visions, and goals more in depth.
					</BlogP>
				</section>
				<section id="pilot-programme">
					<BlogH2>Project R.Ed: The Pilot Programme</BlogH2>
					<Image
						src="/blogs/transforming-communities/bw-class-room.webp"
						alt="Tiny human writing"
						className="mb-6 mx-auto"
						width={1004}
						height={590}
					/>
					<BlogP>
						Project R.ED was born out of all this brainstorming we did. We launched our first-ever
						pilot programme in 2022, with 8 committed volunteers teaching 5 subjects - Maths,
						English, Malay, Science, and Humanities. About 30 wonderful students attended our weekly
						classes for 6 months and this pilot programme was concluded with a small leadership camp
						for the kids with a mini-graduation ceremony at the end. The camp was the right way to
						end it; all the kids were dancing and having so much fun, and as the kids would say “the
						vibes were immaculate”.
					</BlogP>
					<BlogP>
						At the end of our programme, we started collecting feedback about our programme and the
						satisfaction rates from the parents. One of the most commonly received feedback from the
						parents was that they wished their kids had access to extracurricular activities, such
						as music classes, sports or coding. They expressed that the community schools that their
						kids are attending could be more extensive in terms of providing these extracurricular
						activities,but sadly, had been facing a limited supply of teachers and resources. Our
						meetings with the school principals and community leaders confirmed this statement. We
						then started researching some ways to design these classes to cater to their needs.
						Based on this research, we came up with 3 main programmes in 2023: English
						Communication, Sustainability education, and Entrepreneurship.
					</BlogP>
				</section>
				<section id="established-organisation">
					<BlogH2>From A Pilot To A Fully Established Organisation</BlogH2>
					<BlogP>
						Today, we have expanded from a team of 8 to over 40 volunteers. Looking back, I would
						have never imagined we would get this far, and I can confidently say that without our
						network friends and of volunteers believing in the work that we do, we would be nowhere
						near where we are now.
					</BlogP>
					<BlogP>
						Drawing from my schooling experience, I firmly believe that extracurricular activities
						are crucial for a child&apos;s development. Solely prioritising academic aspects in
						education leads to stressed and unmotivated students and increases dropout rates. Not
						everyone excels academically; after all, each student possesses unique strengths.
						Traditional schools emphasise academic excellence, measuring success solely by grades.
						However, extracurricular activities hone students&apos; soft skills, and strengths, and
						nurture confidence.
					</BlogP>
					<BlogP>
						Ultimately, our aim is that the students, through our programmes, would know themselves
						better and be able to realise their full potential. We also want to help them understand
						that they should not feel unworthy or stupid just because they do not excel
						academically.
					</BlogP>
				</section>
				<section id="the-plan">
					<Image
						src="/blogs/transforming-communities/group-pic.jpg"
						alt="Tiny human writing"
						className="mx-auto mt-12"
						width={1004}
						height={590}
					/>
					<BlogH2 mt="mt-4">The Plan For 2024</BlogH2>
					<BlogP>
						In 2024, R.ED proudly presents four main programmes – BLOOM, our Montessori programme,
						and THRIVE, a subject themed around Global Citizenship, CODE, coding, and PLAY for
						sports. Paired with our three core student values – Resilience, Problem-Solving and
						Emotional Intelligence, we aim to mould our students and be as bulletproof as they can
						be wherever they may be in the future.
					</BlogP>
					<BlogP>
						What&apos;s unique about our approach this year is that we pivoted from having our own
						classroom space to partnering up with an existing community school to support their
						students in their pursuit of education through alternative teaching. We believe this
						would be the most effective way of educating the students, even with the limited
						resources we have. This win-win approach was highly endorsed by the school principals
						and community school leaders as well.
					</BlogP>
					<BlogP>
						As a start, we have partnered up with 2 schools; Destiny C3 Education Centre and Elom
						Initiatives. We are very excited going into the year with all the new students, teachers
						and volunteers involved. Working with this team has been such a pleasure and privilege,
						and I&apos;m so grateful to have such a wonderful team.
					</BlogP>
					<BlogP>
						From the bottom of my heart thank you all – Hilda, May, Deepa, Faris, Zin, Thet, Kelly,
						Rebekah, Sarah, Beatrice, Tien Sing, Zhen and Thanussha, and the rest of our volunteers
						for your hard work and dedication, and for believing in the work that we do at R.ED.
					</BlogP>
				</section>
			</BlogBody>
		</>
	);
};

export default TransformingCommunities;
