import Image from "next/image";
import { teamMetadata } from "../teamConfig";

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

const teamList: TeamMembersT[] = [
	{
		id: 0x11,
		name: "Hilda",
		title: "CEO",

		image: {
			src: "/teams/hilda.png",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
	{
		id: 0x12,
		name: "Hilda2",
		title: "CEO",
		image: {
			src: "/teams/vision.jpg",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
	{
		id: 0x13,
		name: "Hilda3",
		title: "CEO",
		image: {
			src: "/teams/vision.jpg",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
	{
		id: 0x14,
		name: "Hilda4",
		title: "CEO",
		image: {
			src: "/teams/vision.jpg",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
	{
		id: 0x15,
		name: "Hilda5",
		title: "CEO",
		image: {
			src: "/teams/vision.jpg",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
	{
		id: 0x16,
		name: "Hilda6",
		title: "CEO",
		image: {
			src: "/teams/vision.jpg",
			width: 150,
			height: 250,
			alt: "image of a member",
		},
	},
];

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
			<div className="content m-auto py-16 md:p-20">
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
		<section className="flex gap-4 justify-around flex-wrap">
			{teamList.map((member) => (
				<div key={member.id} className="relative">
					<Image
						src={member.image.src}
						width={member.image.width}
						height={member.image.height}
						alt={member.image.alt}
						className="min-w-[150px] min-h-[250px] w-[95%] h-[100%] md:w-[150px] rounded-lg"
					/>
					<h4 className="absolute bottom-[0] left-[50%]  translate-x-[-50%] translate-y-[-50%] bg-mercury p-1 rounded">
						{member.name}
					</h4>
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
			<div className="flex flex-wrap justify-center gap-2">
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
