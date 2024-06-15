import Introduction from "./_modules/Introduction";
import About from "./_modules/About";
import MissionVision from "./_modules/MissionVision";
import Programmes from "./_modules/Programmes";
import Resources from "./_modules/Resources";
import OurTeam from "./_modules/OurTeam";
import StayConnected from "./_modules/StayConnected";
import Navbar from "./_components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Introduction />
				<About />
				<MissionVision />
				<Programmes />
				<Resources />
				<OurTeam />
				<StayConnected />
			</main>
		</>
	);
}
