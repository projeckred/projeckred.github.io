import DonateButton from "../_components/DonateButton";
import Image from "next/image";

let socials = [
	{
		title: "Linktree",
		link: "https://linktr.ee/projectr.ed",
		image: "/icons/icons8-linktree-48.png",
		alt: "Linktree icon by Icons8",
		key: 0xaa,
	},
	{
		title: "Email",
		link: "mailto: helloprojectred@gmail.com",
		image: "/icons/icons8-email-49.png",
		alt: "Mail icon by Icons8",
		key: 0xaa,
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com/projectr.ed/",
		image: "/icons/icons8-instagram-48.png",
		alt: "Instagram icon by Icons8",
		key: 0xbb,
	},

	{
		title: "Linked In",
		link: "https://www.linkedin.com/company/projectr-ed",
		image: "/icons/icons8-linked-in-48.png",
		alt: "Mail icons by Icons8",
		key: 0xdd,
	},
];

const Footer = () => {
	let year = new Date().getFullYear();
	const rightStyleP = "text-caption5 md:text-caption4 lg:text-caption font-normal text-white mb-2";
	return (
		<section id="footer" className="bg-black">
			<div
				className="content w-4/5 flex flex-col justify-center
    mx-auto"
			>
				<div
					className="container w-full flex flex-col md:flex-row gap-3 justify-center md:justify-between
    mt-10 mb-4 md:mb-7"
				>
					<div
						className="left flex flex-col items-center md:items-start
    gap-0.5 md:gap-3 lg:gap-4 lg:w-1/2"
					>
						<h4
							className="text-caption md:text-body2 lg:text-header5 text-koromikoLight
    text-center md:text-start font-bold"
						>
							Reimagine Education <span className="text-carnation">FOR THEM</span>
							<br />
							Reimagine Education <span className="text-dodgerBlue">WITH US</span>
						</h4>
						<p
							className="text-caption5 md:text-caption4 lg:text-caption font-normal text-white
    mb-3.5 text-center md:text-start w-5/6"
						>
							R.ED is registered as a non profit organisation in Malaysia under PERTUBUHAN
							PENGEMBARAAN BILIK DARJAH (PPM-013-10-23082022)
						</p>
						<span className="hidden md:block">
							<DonateButton />
						</span>
					</div>
					<div className="right flex flex-col items-center my-auto">
						<div className="footer-social-icon-div flex ">
							{socials.map((social) => (
								<a
									href={social.link}
									target="_blank"
									rel="noreferrer"
									key={social.key}
									title={social.title}
								>
									<Image
										src={social.image}
										alt={social.alt}
										width={40}
										height={40}
										className="w-10 h-10 mr-4 hover:scale-110 hover:rotate-6 transition-all duration-300"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
				<p
					className={`copyright ${rightStyleP} text-center text-caption5 md:text-caption3 text-mercury
    pb-3.5 pt-6 border-t border-mineShaft font-light`}
				>
					&copy; {year}, R.ED. All Rights Reserved.
				</p>
			</div>
		</section>
	);
};

export default Footer;
