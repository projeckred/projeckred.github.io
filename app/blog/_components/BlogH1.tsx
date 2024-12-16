import { ReactNode } from "react";

const BlogH1 = ({
	children,
	className,
	mb = "mb-6",
}: {
	children: ReactNode | string;
	className?: string;
	mb?: string;
}) => {
	// original color: text-gray-900
	return (
		<h1
			className={`${className} text-4xl font-bold text-center mx-auto text-[#FF5757] mb-6 w-[100%] md:w-[80%] ${mb}`}
		>
			{children}
		</h1>
	);
};

export default BlogH1;
