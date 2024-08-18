import React from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faNodeJs,
	faJs,
	faHtml5,
	faCss3,
	faNode,
	faVuejs,
	faBlackTie,
	faGithub,
	faGit,
	faGitlab,
	faGithubAlt,
	faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGitlabSquare } from "@fortawesome/free-brands-svg-icons/faGitlabSquare";
const Skills = () => {
	const skillsList = [
		{
			value: "frontend",
			skillCategory: "Front End",
			skillIcons: [faReact, faVuejs, faJs, faCss3, faHtml5],
		},
		{
			value: "backend",
			skillCategory: "Back End",
			skillIcons: [faNodeJs],
		},
		{ value: "database", skillCategory: "Database", skillIcons: [faDatabase] },
		{
			value: "versionControl",
			skillCategory: "Version Control",
			skillIcons: [faGithub, faGitAlt, faGitlabSquare],
		},
	];
	const [activeTab, setActiveTab] = React.useState(skillsList[0].value);
	console.log(activeTab);
	return (
		<Tabs id="custom-animation" value={activeTab}>
			<TabsHeader>
				{skillsList.map((skill, index) => (
					<Tab className="text-black  md:text-base text-xs md:px-1 px-0 " key={index} value={skill.value}>
						{skill.skillCategory}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody
				animate={{
					initial: { y: 250 },
					mount: { y: 0 },
					unmount: { y: 250 },
				}}
			>
				{skillsList.map((skill, index) => (
					<TabPanel key={index} value={skill.value}>
						<div className="flex flex-wrap items-center  gap-4 mt-4">
							{skill.skillIcons.map((icon) => (
								<div className="hover:scale-105 hover:transition-transform transition-transform rounded-2xl flex items-center  p-4 shadow-[0_0_5px_rgb(256,256,256,0.8)]">
									<FontAwesomeIcon
										icon={icon}
										className="sm:w-10 w-6 sm:h-10 h-6 text-white"
									/>
								</div>
							))}
						</div>
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
};

export default Skills;
