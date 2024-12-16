import Image from "next/image";
import { teamMetadata } from "../_imageConfigs/teamConfig";
import { partnersMetadata } from "../_imageConfigs/partnersConfig";
import { appearancesMetadata } from "../_imageConfigs/appearancesConfig";
import { collaborationsMetadata } from "../_imageConfigs/collaborationsConfig";
type ConfigMetadataT = {
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

const OurTeam = () => {
	return (
		<section id="our-team" className="bg-deepCream">
			<div className="max-w-[1640px] m-auto py-16 md:p-20 ">
				<h2 className="font-bold text-4xl md:text-5xl text-center mb-16 text-[#2887BF]">
					Our Team
				</h2>
				<TeamGallery />
				<section className="flex md:justify-around justify-center py-12 flex-col md:flex-row ">
					<EffortGallery title="Partners" displayLists={partnersMetadata} />
					<EffortGallery title="Appearances" displayLists={appearancesMetadata} />
					<EffortGallery title="Collaborations" displayLists={collaborationsMetadata} />
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
						<div className="rounded-b-lg absolute bottom-0 left-0 w-full bg-black bg-opacity-50 opacity-100 text-white text-center p-2 lg:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
							<h4 className="">{member.name}</h4>
							<hr className="w-1/3 my-2 m-auto"></hr>
							<p>{member.title}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

const EffortGallery = ({
	title,
	displayLists,
}: {
	title: string;
	displayLists: ConfigMetadataT[];
}) => {
	return (
		<div className="md:w-1/3 mx-auto mt-12">
			<h4 className="text-lg font-bold text-center md:mb-12 mb-4">{title}</h4>
			<div className={`flex gap-4 justify-center flex-wrap`}>
				{displayLists.map((effort: ConfigMetadataT) => (
					<Image
						key={effort.id}
						src={effort.image.src}
						width={effort.image.width * 0.5}
						height={effort.image.height * 0.5}
						alt={effort.image.alt}
					/>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
