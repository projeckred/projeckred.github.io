import Image from "next/image";

const About = () => {
	return (
		<section id="about" className="bg-black px-12 md:px-[70px] py-10 ">
			<div
				className="flex flex-col md:flex-row md:justify-between items-center
    gap-y-5 md:gap-y-0 max-w-[1280px] m-auto"
			>
				<Image
					src={"/assets/what-is-red.png"}
					alt="what is red in cute font"
					width={855}
					height={703}
					className="w-full h-auto grow basis-0
          max-w-full md:max-w-[40%]"
				/>
				<p
					className="grow basis-0
    max-w-full md:max-w-[40%] text-caption3 md:text-body2 lg:text-body text-white font-normal
    text-center md:text-left"
				>
					R.ED stands for Reimagine Education. And we are reimagining the type of education that
					refugee children in Malaysia need in order to thrive through the challenges and
					uncertainties that awaits them.
					<br />
					<br />
					We aim to provide a safe space of learning in character development and exposure that will
					empower every child to thrive and be the best versions of themselves no matter where they
					may be.
				</p>
			</div>
		</section>
	);
};

export default About;
