import Link from "next/link";
import Heading from "@/components/UI/Heading";
import { Card } from "flowbite-react";
import { useState, useEffect } from "react";

const Services = () => {
	const [mappedServices, setMappedServices] = useState();

	const imgTheme = {
		img: { base: "lg:h-52 lg:object-contain" },
	};

	const fetchServiceData = async () => {
		const response = await fetch("/api/products", {
			method: "POST",
		});
		const data = await response.json();
		setMappedServices(
			data.map((service) => {
				return (
					<Link href={service.link} target="_blank" key={service.id}>
						<Card imgAlt={service.imageAlt} imgSrc={service.image} className="" theme={imgTheme}>
							<h5 className="text-1xl font-bold tracking-tight text-lime-800 dark:text-white">
								{service.title}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{service.description}
							</p>
						</Card>
					</Link>
				);
			})
		);
	};

	useEffect(() => {
		fetchServiceData();
	}, []);

	return (
		<>
			<Heading content="Services" />
			<div className="mx-7 mt-10 grid  grid-cols-1 gap-x-8 gap-y-16  md:mx-14  sm:mt-16  lg:mx-7 lg:max-w-none lg:grid-cols-3">
				{mappedServices}
			</div>
		</>
	);
};

export default Services;
