import Image from "next/image";

const partnersList: LogoGalleryProps = {
	title: "Partners",
	logos: [
		{
			id: 0xaa,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xbb,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
	],
};

const appearanceList: LogoGalleryProps = {
	title: "We appeared on:",
	logos: [
		{
			id: 0xaa,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xbb,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xcc,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
	],
};

const collaborationList: LogoGalleryProps = {
	title: "We collaborated with:",
	logos: [
		{
			id: 0xaa,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xbb,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xcc,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xdd,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xee,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xff,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
		{
			id: 0xf1,
			src: "/teams/vision.jpg",
			width: 100,
			height: 100,
			alt: "logo of a boy",
		},
	],
};

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
								width={100}
								height={100}
								alt="image of our partners"
							/>
							<Image
								src={"/teams/vision.jpg"}
								width={100}
								height={100}
								alt="image of our partners"
							/>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

type LogoGalleryProps = {
	title: string;
	logos: {
		id: number;
		src: string;
		width: number;
		height: number;
		alt: string;
	}[];
};

const LogoGallery = ({ title, logos }: LogoGalleryProps) => {
	return (
		<div>
			<h4>{title}</h4>
			<div>
				{logos.map((logo) => (
					<Image
						key={logo.id}
						src={logo.src}
						width={logo.width}
						height={logo.height}
						alt={logo.alt}
					/>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
