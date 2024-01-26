import Image from "next/image";
import Introduction from "./_components/Introduction";
import About from "./_components/About";
export default function Home() {
	return (
		<main>
			<Introduction />
			<About />
		</main>
	);
}
