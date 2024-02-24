import Image from "next/image";
import Introduction from "./_modules/Introduction";
import About from "./_modules/About";
import MissionVision from "./_modules/MissionVision";
import Programmes from "./_modules/Programmes";
import Resources from "./_modules/Resources";
import OurTeam from "./_modules/OurTeam";
export default function Home() {
	return (
		<main>
			<Introduction />
			<About />
			<MissionVision />
			<Programmes />
			<Resources />
			<OurTeam />
		</main>
	);
}
