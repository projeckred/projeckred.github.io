import DonateButton from "./DonateButton";
import Image from "next/image";
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
    gap-0.5 md:gap-3 lg:gap-4"
					>
						<h4
							className="text-caption md:text-body2 lg:text-header5 text-koromiko
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
					<div className="right flex flex-col items-center md:items-end">
						<p className={`${rightStyleP}`}>Pudu, Kuala Lumpur, Malaysia</p>
						<p className={`${rightStyleP}`}>helloprojectred@gmail.com</p>
						<p className={`${rightStyleP}`}>@projectr.ed</p>
						<Image
							src={"/logo.png"}
							alt="Logo"
							className="w-10 aspect-auto md:mt-4 mt-7
              hidden md:block"
							width={512}
							height={462}
						/>
						<div
							className="motto text-caption3 text-white
    hidden md:block"
						>
							<span className="font-semibold">R</span>EIMAGINE{" "}
							<span className="font-semibold">ED</span>UCATION
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
