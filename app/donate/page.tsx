import { Metadata } from "next";
import Navbar from "../_components/Navbar";

export const metadata: Metadata = {
	title: "R.ED",
	description: "Every little bit counts!",
	icons: "/logo.png",
};

const navItems = [
	{ id: "introduction", title: "About Us" },
	{ id: "programmes", title: "Programmes" },
	{ id: "our-stories", title: "Our Stories" },
	{ id: "our-team", title: "Our Team" },
	{ id: "stay-connected", title: "Contact Us" },
];

const DonatePage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<Navbar {...{ navItems }} />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-4xl font-bold mt-12">Support Our Cause</h1>
				<p className="mt-6">Scan the QR code or use the bank details below to make a donation.</p>
				<img src="/path-to-your-qr-code.png" alt="QR Code" className="mt-8 w-64 h-64" />
				<div className="mt-8 text-left">
					<h2 className="text-2xl font-semibold">Bank Transfer Details:</h2>
					<p className="mt-4">
						Account Name: Your Organization Name
						<br />
						Account Number: XXXXXXXXXXXXXXX
						<br />
						Bank Name: XYZ Bank
						<br />
						SWIFT/BIC Code: ABCDEF123456
					</p>
				</div>
			</main>
		</div>
	);
};

export default DonatePage;
