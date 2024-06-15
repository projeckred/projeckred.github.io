import Introduction from "./_modules/Introduction";
import About from "./_modules/About";
import MissionVision from "./_modules/MissionVision";
import Programmes from "./_modules/Programmes";
import Resources from "./_modules/Resources";
import OurTeam from "./_modules/OurTeam";
import StayConnected from "./_modules/StayConnected";
import Navbar from "./_components/Navbar";

const sectionIds = [
	"introduction",
	"mission",
	"programmes",
	"our-team",
	"stay-connected",
	"footer",
];

// const sectionIds = [
// 	{id:"introduction", title:""},
// 	{id:"mission", title:""},
// 	{id:"programmes", title:""},
// 	{id:"our-team", title:""},
// 	{id:"stay-connected", title:""},
// 	{id:"footer", title:""},
// ]

export default function Home() {
	return (
		<>
			<Navbar {...{ sectionIds }} />
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
