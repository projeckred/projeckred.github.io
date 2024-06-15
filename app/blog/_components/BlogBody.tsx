import { ReactNode } from "react";

const BlogBody = ({ children }: { children: ReactNode | string }) => {
	return (
		<div className="min-h-screen bg-gray-100 p-6 mt-20 lg:mt-24">
			<main className=" max-w-4xl mx-auto bg-white p-6 md:p-8 pt-10 rounded-lg shadow-lg">
				{children}
			</main>
		</div>
	);
};

export default BlogBody;
