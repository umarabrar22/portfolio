import React from 'react'
import heroImg from "../assets/kevinRushProfile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faFacebook,
	faInstagram,
	faWhatsapp,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = ({id}) => {
    const socialIconList = [
		{
			socialIcon: faLinkedin,
		},
		{
			socialIcon: faGithub,
		},
		{
			socialIcon: faFacebook,
		},
		{
			socialIcon: faInstagram,
		},
		{
			socialIcon: faWhatsapp,
		},
	];
  return (
    <section id={id} className="sm:py-32 sm:px-32 px-4 py-12 bg-black">
        <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-4 items-center justify-center">
            <div className="text-center">
                <h1 className=" tracking-wide text-6xl font-normal text-white">
                    MAJID ALI
                </h1>
                <p className="text-white text-lg font-light mt-4 ">
                    Full Stack Developer, Freelancer
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                    {socialIconList.map((icon) => (
                        <div className=" rounded-2xl hover:scale-105 hover:transition-transform transition-transform  flex items-center p-4 shadow-[0_0_5px_rgb(256,256,256,0.8)]">
                            <FontAwesomeIcon
                                icon={icon.socialIcon}
                                className="sm:w-10 w-6 sm:h-10 h-6 text-white"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <img
                    className="h-96 w-96 m-auto rounded-full object-cover object-center lg:mt-0 mt-4"
                    src={heroImg}
                    alt="Profile of Umar Abrar"
                />
            </div>
        </div>
    </section>
  )
}

export default Hero