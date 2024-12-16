import { ReactNode } from "react";

const BlogP = ({
	children,
	className,
	mb = "mb-6",
}: {
	children: ReactNode | string;
	className?: string;
	mb?: string;
}) => {
	return <p className={`${className} text-gray-700 text-lg leading-relaxed ${mb}`}>{children}</p>;
};

export default BlogP;
