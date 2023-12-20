/** @format */

export default function Navbar() {
	return (
		<div>
			<nav className="grid grid-cols-3 justify-between font-medium">
				<h2 className=" py-3 px-6 items-center justify-start">Coursera</h2>
				<div className="flex flex-row font-medium gap-4 py-3 px-6 justify-center items-center">
					<div>Home</div>
					<div>Courses</div>
					<div>Add Courses</div>
				</div>
				<div className="flex flex-row font-medium gap-2 py-3 px-6 justify-end items-center ">
					<button>SignUp</button>
					<button className="bg-lime-400 rounded-full p-3 text-center">
						Sign In
					</button>
				</div>
			</nav>
		</div>
	);
}
