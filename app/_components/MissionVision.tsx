import Image from "next/image";

const MissionVision = () => {
	const contentChildDiv =
		"w-full flex-grow px-12 md:px-10 py-10 flex flex-col justify-center items-center gap-y-7";
	const h2Style = "text-koromikoLight font-extrabold text-4xl md:text-4xl lg:text-5xl text-center";
	const pStyle = "text-center text-caption3 md:text-body2 lg:text-body font-normal";
	return (
		<section id="mission" className="bg-cream">
			<div className="content flex flex-col md:flex-row items-stretch content-stretch max-w-[1280px] m-auto">
				<div className={`left ${contentChildDiv} bg-greenHazeLight`}>
					<h2 className={`${h2Style}`}>
						Our<span className="text-white">Mission</span>
					</h2>
					<p className={`text-white ${pStyle}`}>
						At R.ED, we aim to create a safe space of learning for children to give them the chance
						to learn, explore and thrive in a life of uncertainties.{" "}
					</p>
					<div className="left-bottom w-full h-auto grid px-10">
						<svg
							className="svg w-11/12 mx-auto mt-8 md:mt-12 row-start-1 row-end-2 col-start-1 col-end-2 max-w-full object-cover"
							viewBox="0 0 322 214"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M162.372 4.52266C219.296 -0.201859 286.402 -10.3045 305.898 32.5295C325.395 75.3636 329.253 114.918 305.898 158.149C268.54 227.301 210.491 155.266 108.446 202.218C6.40179 249.171 -1.47967 138.379 0.179571 77.0111C1.83881 15.6431 93.1524 10.2677 162.372 4.52266Z"
								fill="#F47E74"
							/>
						</svg>
						<svg className="svg w-full row-start-1 row-end-2 col-start-1 col-end-2">
							<clipPath id="mission-girl-clip-path" clipPathUnits="objectBoundingBox">
								<path d="M0.504,0.021 C0.681,-0.001,0.889,-0.048,0.95,0.152 C1,0.353,1,0.538,0.95,0.741 C0.834,1,0.654,0.727,0.337,0.947 C0.02,1,-0.005,0.648,0.001,0.361 C0.006,0.073,0.289,0.048,0.504,0.021" />
							</clipPath>
						</svg>
						<Image
							src={"/assets/mission.jpg"}
							alt="Teacher and pupil writing"
							className="mission-image w-full max-w-full object-cover row-start-1 row-end-2 col-start-1 col-end-2"
							width={774}
							height={597}
						/>
					</div>
				</div>
				<div className={`right ${contentChildDiv} `}>
					<div className="right-top w-auto h-auto grid">
						<svg className="svg row-start-1 row-end-2 col-start-1 col-end-2 w-full">
							<clipPath id="mission-boy-clip-path" clipPathUnits="objectBoundingBox">
								<path d="M0.524,0.826 C0.473,1,0.296,1,0.208,0.98 C0.12,0.944,-0.035,0.739,0.011,0.493 C0.057,0.247,0.216,0.153,0.356,0.082 C0.539,-0.011,0.816,-0.013,0.892,0.029 C0.969,0.072,1,0.266,0.892,0.408 C0.688,0.551,0.576,0.616,0.524,0.826" />
							</clipPath>
						</svg>

						<Image
							src={"/assets/vision.jpg"}
							alt="Smiling young asian boy with sunshades"
							className="vision-image w-full max-w-full row-start-1 row-end-2 col-start-1 col-end-2"
							width={799}
							height={730}
						/>
						<h2 className={`${h2Style}`}>
							Our<span className="text-black">Vision</span>
						</h2>
					</div>
					<p className={`text-black ${pStyle}`}>
						All children will be equipped with the values and skills to thrive in any uncertainty or
						journey they go through in order to be the best versions of themselves
					</p>
				</div>
			</div>
		</section>
	);
};

export default MissionVision;
