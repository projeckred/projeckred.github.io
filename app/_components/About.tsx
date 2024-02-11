import Image from "next/image";

const About = () => {
	return (
		<section id="about" className="bg-deepBlue px-12 md:px-[70px] py-10 ">
			<div
				className="content flex flex-col md:flex-row md:justify-between items-center
    gap-y-5 md:gap-y-0"
			>
				<Image
					src={"/assets/what-is-red.png"}
					alt="what is red in cute font"
					width={1080}
					height={1080}
					className="w-full h-auto grow basis-0
          max-w-full md:max-w-[40%]"
				/>
				<article
					className="grow basis-0 max-w-full md:max-w-[50%] 
				text-white  text-center md:text-left"
				>
					<h2 className="text-3xl font-extrabold">
						<span className="text-carnation">R.ED</span> stands for{" "}
						<span className="text-koromikoDark">Reimagine Education.</span>
					</h2>
					<br />
					<p className="text-base font-normal">
						R.ED stands for Reimagine Education. And we are reimagining the type of education that
						refugee children in Malaysia need in order to thrive through the challenges and
						uncertainties that awaits them.
						<br />
						<br />
						We aim to provide a safe space of learning in character development and exposure that
						will empower every child to thrive and be the best versions of themselves no matter
						where they may be.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
