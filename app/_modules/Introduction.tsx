import Image from "next/image";
import DonateButton from "../_components/DonateButton";
const Introduction = () => {
	return (
		<section id="introduction" className="bg-cream">
			<div className="content flex flex-row gap-x-0 md:gap-x-10 lg:gap-x-24 py-16 px-12 md:mt-20  md:pr-0">
				<div
					className="grow basis-0
    flex flex-col items-center md:items-start justify-center  mt-[80px] md:mt-0 "
				>
					<h2
						className="text-black text-4xl md:text-6xl lg:text-7xl font-extrabold
    text-center md:text-start !leading-[1.25]"
					>
						Reimagine Education
					</h2>
					<p
						className="text-black font-normal
    mt-6 mb-5 text-center md:text-start"
					>
						An alternative education platform for marginalized communities in Malaysia
					</p>
					<DonateButton />
				</div>
				<div
					className="grow hidden md:grid
				place-items-center basis-0"
				>
					<Image
						src={"/assets/introduction-image3.png"}
						width={508}
						height={416}
						alt="tree cute girls"
					/>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
