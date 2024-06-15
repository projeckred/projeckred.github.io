import { Metadata } from "next";
import { ReactNode } from "react";

// type BlogsDataT = {
// 	title: string;
// 	description: string;
// 	icons: string;
// };

export const blogsData: { [key: string]: Metadata } = {
	"introducing-red": {
		title: "Introducing R.ED: Reimagine Education with us",
		description: "An alternative education platform for marginalized communities in Malaysia",
		icons: "/logo.png",
	},
	"transforming-communities": {
		title: "Transforming Communities Through Education",
		description: "An alternative education platform for marginalized communities in Malaysia",
		icons: "/logo.png",
	},
};
