import { ReactNode } from "react";

const BlogH2 = ({
	children,
	className,
	mb = "mb-4",
}: {
	children: ReactNode | string;
	className?: string;
	mb?: string;
}) => {
	return (
		<h2 className={`${className} text-3xl font-semibold text-gray-900 mt-12 ${mb}`}>{children}</h2>
	);
};

export default BlogH2;
