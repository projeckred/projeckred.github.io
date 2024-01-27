import Image from "next/image";
import Introduction from "./_components/Introduction";
import About from "./_components/About";
import MissionVision from "./_components/MissionVision";
import OurProgramme from "./_components/OurProgramme";
export default function Home() {
	return (
		<main>
			<Introduction />
			<About />
			<MissionVision />
			<OurProgramme />
		</main>
	);
}
