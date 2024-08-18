import React from "react";
import Skills from "./Skills";

const About = ({id}) => {
	return (
		<section id={id} className="sm:py-10 sm:px-32 px-4 py-12 bg-black">
			<h2 className="text-center sm:text-4xl text-3xl t tracking-wide text-white">
				About Me
			</h2>
			<div className="mt-4 grid lg:grid-cols-5 gap-10 justify-center items-center ">
				<div className="col-span-5 lg:col-span-2 xl:col-span-3">
					<p className="text-white sm:text-lg text-base font-light lg:text-left text-center ml-auto">
						Hi, I'm a Pakistan-based Full Stack Web Developer skilled in both
						front-end and back-end technologies. Freelancer & Vue.js Developer
						@Teresol since Oct 2022. Let's create something amazing together!
					</p>
				</div>

				<div className="col-span-5 lg:col-span-3 xl:col-span-2 lg:mt-0 mt-8">
					<h2 className="text-3xl tracking-wide text-white mb-4">Skills</h2>
					<Skills />
				</div>
			</div>
		</section>
	);
};

export default About;
