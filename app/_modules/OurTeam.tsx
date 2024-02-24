import Image from "next/image";

const OurTeam = () => {
	return (
		<section id="our-team">
			<div className="content">
				<section></section>
				<section>
					<div>
						<h4>Partners</h4>
						<div>
							<Image
								src={"/teams/vision.jpg"}
								width={150}
								height={150}
								alt="image of our partners"
							/>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default OurTeam;
