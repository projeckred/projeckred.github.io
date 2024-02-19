import Image from "next/image";
import Introduction from "./_components/Introduction";
import About from "./_components/About";
import MissionVision from "./_components/MissionVision";
import Programmes from "./_components/Programmes";
import Resources from "./_components/Resources";
export default function Home() {
	return (
		<main>
			<Introduction />
			<About />
			<MissionVision />
			<Programmes />
			<Resources />
		</main>
	);
}
