"use client";

const StayConnected = () => {
	function handleSubmit(e: any): void {
		e.preventDefault();
		const data = new FormData(e.target as HTMLFormElement);
		const action = e.target.action;
		const currentTime = new Date();
		data.append("Date", currentTime.toString());
		e.target.reset();
		fetch(action, {
			method: "post",
			body: data,
		}).then(() => {
			alert("Thank you for reaching out!");
		});
	}
	const inputStyle =
		"bg-transparent border-solid border-2 border-white outline-none rounded-2xl font-extrabold text-center text-lg \
      placeholder:text-white placeholder:font-extrabold focus:border-white placeholder:opacity-60 py-4 px-10 md:p-0";
	return (
		<section id="stay-connected" className="bg-oyen">
			<div className="content m-auto py-16 md:p-20 text-white px-6 md:px-0">
				<h2 className="font-bold text-4xl md:text-5xl text-center mb-16">Stay Connected</h2>
				<form
					className="flex lg:flex-row justify-around flex-col gap-4"
					onSubmit={handleSubmit}
					action="https://script.google.com/macros/s/AKfycbxon2evMguAiLi3pPhYOozYVSoQMnOvpp8THcltxiEbOA8NccmLfsr2fv_pr8McDNPx/exec"
					method="post"
				>
					<input
						className={inputStyle}
						type="text"
						name="First Name"
						placeholder="FIRST NAME"
						required
					/>
					<input
						className={inputStyle}
						type="text"
						name="Last Name"
						placeholder="LAST NAME"
						required
					/>
					<input className={inputStyle} type="email" name="Email" placeholder="EMAIL" required />
					<input
						type="submit"
						value="SUBSCRIBE"
						className="bg-dodgingBlue font-extrabold text-xl py-4 px-10 rounded-2xl hover:cursor-pointer hover:scale-95 transition-all duration-300"
					/>
				</form>
			</div>
		</section>
	);
};

export default StayConnected;
