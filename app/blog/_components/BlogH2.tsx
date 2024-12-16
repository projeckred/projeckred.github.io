import { ReactNode } from "react";

const BlogH2 = ({
	children,
	className,
	mb = "mb-4",
	mt = "mt-12",
}: {
	children: ReactNode | string;
	className?: string;
	mb?: string;
	mt?: string;
}) => {
	// original color: text-gray-900
	return (
		<h2 className={`${className} text-3xl font-semibold ${mt} text-[#FF5757] ${mb}`}>{children}</h2>
	);
};

export default BlogH2;
