import Link from "next/link";

type DonateButtonProps = {
	text?: string;
};

const DonateButton = ({ text = "Donate Now" }) => {
	return (
		<Link
			href="https://docs.google.com/forms/d/e/1FAIpQLSfNdxpuKbsNqgBAx_to1Sgkl4q_n4wdlErPjVWPHsC-w4n_qQ/viewform?usp=sf_link"
			target="_blank"
			className="bg-greenHaze rounded-[5px]
            px-5 py-2.5 text-white font-medium text-button
            hover:bg-[#039154]
            transition-all ease-in-out duration-300
            motion-reduce:transition-none"
			rel="noreferrer"
		>
			{text}
		</Link>
	);
};

export default DonateButton;
