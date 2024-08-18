import React from "react";

import { motion } from "framer-motion";

import Services from "../components/Services";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import About from "../components/About";

const HomePage = () => {
	return (
		<>
			<Hero id={"hero"} />
			<About id={"about"} />

			<Services id={"services"} />

			<Projects id={"projects"} />
		</>
	);
};

export default HomePage;
