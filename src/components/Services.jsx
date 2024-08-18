import React from "react";
import Service1 from "../assets/images/services/api.png";
import Service2 from "../assets/images/services/database.jpg";
import Service3 from "../assets/images/services/OBH-White-logo.jpeg";
const Services = ({id}) => {
	const serviceList = [
		{
			serviceName: "Web Development",
			serviceDescription:
				"Responsive and dynamic websites, web applications, and backend systems using modern frameworks like React.JS, Vue.JS and Node.JS",
			serviceImage: Service1,
		},
		{
			serviceName: "Database Integration",
			serviceDescription:
				"Designing, implementing, and managing databases to ensure efficient data storage and retrieval for clients' applications in PostgreSQL, MySQL, and MongoDB",
			serviceImage: Service2,
		},
		{
			serviceName: "API Development",
			serviceDescription:
				"Build robust APIs using Node.js and Express, facilitating data exchange between front-end applications and databases, as well as third-party integrations.",
			serviceImage: Service3,
		},
	];
	return (
		<section id={id} className="sm:py-10 sm:px-32 px-4 py-12 bg-black">
			<div>
				<h2 className="text-white text-center sm:text-4xl text-3xl tracking-wide">
					SERVICES
				</h2>
				<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:mt-14 mt-10 gap-10">
					{serviceList.map((service) => (
						<div>
							<div>
								<img
									src={service.serviceImage}
									className="rounded-3xl aspect-video w-full"
									alt="Web Development"
								/>
							</div>
							<div className="px-2 py-4">
								<h3 className="text-lg text-white">{service.serviceName}</h3>
								<p className="text-sm text-white mt-2">
									{service.serviceDescription}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
