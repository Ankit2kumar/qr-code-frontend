/** @format */

export default function SignUp() {
	return (
		<>
			<div className="flex flex-row min-h-[80vh]  justify-center items-center">
				<div className="w-[460px]  bg-slate-300 rounded-xl">
					<form className="mx-auto py-8 flex flex-col gap-5 w-[330px]">
						<h3 className="text-center font-bold text-[#1E0E62] text-4xl mb-6">
							Sign Up Now
						</h3>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
							className="pl-2 py-2 rounded-lg "
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="password"
							required
							className="pl-2 py-2 rounded-lg"
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="confirm password"
							required
							className="pl-2 py-2 rounded-lg"
						/>
						<button className="bg-indigo-600 font-medium text-white rounded-xl p-3 text-center justify-center items-center">
							{' '}
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
