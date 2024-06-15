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
	return (
		<h1
			className={`${className} text-4xl font-bold text-center text-gray-900 mx-auto  mb-6 w-[100%] md:w-[80%] ${mb}`}
		>
			{children}
		</h1>
	);
};

export default BlogH1;
