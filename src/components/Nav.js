import coverImg from "../assets/4k-background.jpg"

function Nav(props) {
	const navLinks = [ // #1 eventually convert so its taken from props
		"About",
		"Portfolio",
		"Resume"
	]

	return (
		<nav className="bg-oxford text-white flex-col ">
			<div className="flex items-center">
				<h1 className="px-5 text-5xl">Casen</h1>
				<ul className="grow flex justify-end items-center h-20 text-3xl ">
					{navLinks.map((link) => (
					<li className="px-5 hover:text-lavender" onClick={() => props.setCurrentPage(link)}>
						{link}
					</li>
					))}
				</ul>
			</div>
			<div>
				<img src={coverImg} className="object-cover w-full"></img>
			</div>
		</nav>
	)
}

export default Nav;