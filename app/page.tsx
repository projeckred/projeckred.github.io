import Introduction from "./_modules/Introduction";
import About from "./_modules/About";
import MissionVision from "./_modules/MissionVision";
import Programmes from "./_modules/Programmes";
import Resources from "./_modules/Resources";
import OurTeam from "./_modules/OurTeam";
import StayConnected from "./_modules/StayConnected";
import Navbar from "./_components/Navbar";

// const sectionIds = [
// 	"introduction",
// 	"mission",
// 	"programmes",
// 	"our-team",
// 	"stay-connected",
// ];

const navItems = [
	{ id: "introduction", title: "About Us" },
	{ id: "mission", title: "Vision & Mission" },
	{ id: "programmes", title: "Programmes" },
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
				<Resources />
				<OurTeam />
				<StayConnected />
			</main>
		</>
	);
}
