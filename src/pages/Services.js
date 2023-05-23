import Link from "next/link";
import Heading from "@/components/UI/Heading";
import { Card } from "flowbite-react";
// import eventsImage from "@/media/images/events.jpg";
// import Image from "next/image";

const Services = () => {
	const services = [
		{
			id: "s1",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
		{
			id: "s2",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
		{
			id: "s3",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
		{
			id: "s4",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
		{
			id: "s5",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
		{
			id: "s6",
			title: "Service Title",
			description:
				"this is the description. this is the description. this is the description. this is the description. this is the description. this is the description.",
			link: "https://ezdev.solutions",
			image: "/media/images/events.jpg",
		},
	];

	const mappedServices = services.map((service) => {
		return (
			<Link href={service.link} target="_blank" key={service.id}>
				<Card
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc={service.image}
				>
					<h5 className="text-2xl font-bold tracking-tight text-lime-800 dark:text-white">
						{service.title}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{service.description}
					</p>
				</Card>
			</Link>
		);
	});

	return (
		<>
			<Heading content="Services" />
			<div className="mx-7 mt-10 grid  grid-cols-1 gap-x-8 gap-y-16   sm:mt-16  lg:mx-7 lg:max-w-none lg:grid-cols-3">
				{mappedServices}
			</div>
		</>
	);
};

export default Services;
