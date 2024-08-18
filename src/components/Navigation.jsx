import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import {
	Navbar,
	MobileNav,
	Typography,
	IconButton,
} from "@material-tailwind/react";

const Navigation = ({ title = "M.A" }) => {
	const [openNav, setOpenNav] = useState(false);
	const linkList = [
		{
			linkName: "Home",
			linkUrl: "hero",
		},
		{
			linkName: "about",
			linkUrl: "about",
		},
		{
			linkName: "Services",
			linkUrl: "services",
		},
		{
			linkName: "Projects",
			linkUrl: "projects",
		},
	];

	
  
	

	return (
		<Navbar
    color="blue-gray"
    variant="filled"
    className="sticky top-0 z-50 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 bg-black"
		>
			<div className="flex items-center justify-between text-white ">
				<Link
					
					to="/"
					className="mr-4 cursor-pointer py-1.5 font-medium text-4xl"
				>
					{title}
				</Link>
				<div className="flex items-center gap-4">
					<div className="mr-4 hidden lg:block">
						<ul className="mt-2 mb-4 flex flex-col gap-10 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
							{linkList.map((link,index) => {
								return (
									<Link id={index}
									to={link.linkUrl}
										className= "cursor-pointer"
										smooth={true}
										duration={400}
										spy={true}
										activeClass="active"
									>
											{link.linkName}
									
									</Link>
								);
							})}
						</ul>
					</div>
					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			
			<MobileNav open={openNav}>
				<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
					{linkList.map((link, index) => {
						return (
							<Link id={index}
									to={link.linkUrl}
										className= "cursor-pointer font-light"
										smooth={true}
										duration={400}
										spy={true}
										activeClass="active"
									>
											{link.linkName}
									
									</Link>
						);
					})}
				</ul>
			</MobileNav>
		</Navbar>
	);
};

export default Navigation;
