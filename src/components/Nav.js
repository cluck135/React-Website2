import coverImg from "../assets/about/4k-background.jpg"

function Nav({ currentPage, setCurrentPage}) {
	const navLinks = [ // #1 eventually convert so its taken from props
		"About",
		"Portfolio",
		"Resume"
	]

	return (
		<nav className="bg-oxford text-white flex-col ">
			<div className="flex items-center p-5">
				<h1 className="text-5xl p-5 bg-cornflower mx-5 rounded-xl shadow-lg shadow-white">Casen Luck</h1>
				<ul className="grow flex justify-end items-center h-20 text-3xl ">
					{navLinks.map((link) => (
					<li className={`p-2 bg-cornflower mx-5 rounded-xl ${currentPage === link ? "shadow-lg shadow-lavender" : "hover:shadow-lg hover:shadow-lavender"}`} onClick={() => setCurrentPage(link)}>
						{link}
					</li>
					))}
				</ul>
			</div>
			<div>
				<img src={coverImg} className="object-cover w-full h-[300px]"></img>
			</div>
			{/* <div class="relative w-40 h-40 rounded-full overflow-hidden">
  					<img src={coverImg} alt="Avatar" class="object-cover w-full h-full" />
  					<div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-center ">this is a text</div>
				 	</div> Use this later to figure out how to have the nav links inside the cover image */}
		</nav>
	)
}

export default Nav;