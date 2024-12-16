import Introduction from "./_modules/Introduction";
import About from "./_modules/About";
import MissionVision from "./_modules/MissionVision";
import Programmes from "./_modules/Programmes";
import OurTeam from "./_modules/OurTeam";
import StayConnected from "./_modules/StayConnected";
import Navbar from "./_components/Navbar";
import OurStories from "./_modules/OurStories";

const navItems = [
	{ id: "introduction", title: "About Us" },
	{ id: "programmes", title: "Programmes" },
	{ id: "our-stories", title: "Our Stories" },
	{ id: "our-team", title: "Our Team" },
	{ id: "stay-connected", title: "Contact Us" },
];

export default function Home() {
	return (
		<>
			<Navbar {...{ navItems }} />
			<main>
				<Introduction />
				<About />
				<MissionVision />
				<Programmes />
				<OurStories />
				<OurTeam />
				<StayConnected />
			</main>
		</>
	);
}
