import Image from "next/image";
import DonateButton from "./DonateButton";
const Introduction = () => {
	return (
		<section className="bg-cream">
			<div
				className="flex flex-row gap-x-0 md:gap-x-10 lg:gap-x-24
    pt-5 pb-10 md:py-5 mt-[70px] md:mt-20 px-12 md:pl-[70px] md:pr-0 max-w-[1280px] m-auto"
			>
				<div
					className="grow basis-0
    flex flex-col items-center md:items-start justify-center"
				>
					<h2
						className="text-black text-header2 md:text-title2 lg:text-title1
    text-center md:text-start"
					>
						Reimagine Education
					</h2>
					<p
						className="text-black text-caption3 md:text-body2 lg:text-body font-normal
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
						src="/assets/introduction-background.svg"
						width={497}
						height={416}
						alt="savy pink background"
						className="w-full h-auto
					row-start-1 row-end-2 col-start-1 col-end-2"
					/>
					<div
						className="w-full h-auto grid pr-12 md:pr-[70px]
    row-start-1 row-end-2 col-start-1 col-end-2"
					>
						<svg className="row-start-1 row-end-2 col-start-1 col-end-2">
							<clipPath id="intro-girls-clip-path" clipPathUnits="objectBoundingBox">
								<path d="M0.984,0.354 C0.888,0.109,0.712,-0.076,0.452,0.036 C0.192,0.148,0.202,0.227,0.096,0.307 C-0.01,0.387,-0.004,0.626,0.009,0.679 C0.023,0.732,0.096,0.901,0.303,0.967 C0.511,1,0.72,0.996,0.793,0.953 C0.865,0.91,0.919,0.855,0.951,0.787 C0.984,0.719,1,0.468,0.984,0.354"></path>
							</clipPath>
						</svg>
						<Image
							src={"/assets/girls.jpg"}
							width={1400}
							height={932}
							alt="Girls posing for the camera"
							className="w-full max-w-full
						row-start-1 row-end-2 col-start-1 col-end-2"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;

{
	/*  */
}
