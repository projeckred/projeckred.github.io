import BlogH1 from "../_components/BlogH1";
import BlogBody from "../_components/BlogBody";
import Navbar from "@/app/_components/Navbar";
import { NavItemT } from "@/app/_components/Navbar";

const navItems: NavItemT[] = [{ id: "transform", title: "Transforming Communities" }];
const TransformingCommunities = () => {
	return (
		<>
			<Navbar {...{ navItems }} />
			<BlogBody>
				<BlogH1>Transforming Communities Through Education: R.ED & Our Beginnings</BlogH1>
			</BlogBody>
		</>
	);
};

export default TransformingCommunities;
