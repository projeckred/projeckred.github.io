import Image from "next/image";
import { teamMetadata } from "../_imageConfigs/teamConfig";

type TeamMembersT = {
	id: number;
	name: string;
	title: string;
	image: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
};

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
		<section id="our-team" className="bg-deepCream">
			<div className="max-w-[1420px] m-auto py-16 md:p-20 ">
				<h2 className="font-bold text-4xl md:text-5xl text-center mb-16 text-[#2887BF]">
					Our Team
				</h2>
				<TeamGallery />
				<section className="flex md:justify-around justify-center py-12 flex-col md:flex-row ">
					<EffortGallery {...partnersList} />
					<EffortGallery {...appearanceList} />
					<EffortGallery {...collaborationList} />
				</section>
			</div>
		</section>
	);
};

const TeamGallery = () => {
	return (
		<section className="flex gap-2 lg:gap-4 justify-around flex-wrap w-[95%] m-auto">
			{teamMetadata.map((member) => (
				<div key={member.id} className="relative group">
					<Image
						src={member.image.src}
						width={member.image.width * 0.8}
						height={member.image.height * 0.8}
						alt={member.image.alt}
						className="rounded-lg"
					/>
					<div className="rounded-b-lg absolute w-full h-full bottom-0 left-0 duration-300 ease-in-out transform transition lg:group-hover:bg-black lg:group-hover:bg-opacity-30">
						<h4 className="rounded-b-lg absolute bottom-0 left-0 w-full bg-black bg-opacity-50 opacity-100 text-white text-center p-2 lg:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
							{member.name}
						</h4>
					</div>
				</div>
			))}
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
const EffortGallery = ({ title, logos }: LogoGalleryProps) => {
	return (
		<div className="md:w-1/3 mx-auto mb-12">
			<h4 className="text-lg font-bold text-center md:mb-12 mb-4">{title}</h4>
			<div className="flex gap-2 justify-around flex-wrap">
				{logos.map((logo) => (
					<Image key={logo.id} src={logo.src} width={216} height={270} alt={logo.alt} />
				))}
			</div>
		</div>
	);
};

export default OurTeam;
