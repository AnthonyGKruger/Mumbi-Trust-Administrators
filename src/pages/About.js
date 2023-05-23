import Heading from "@/components/UI/Heading";
import { Card } from "flowbite-react";

import classes from "@/styles/About.module.css"

const About = () => {
	return (
		<>
      <Heading content="About Us"/>
			<div className=" mx-7 mt-10 sm:mt-16 xl:mx-72 lg:mx-52 md:mx-16">
				<Card
					horizontal={true}
					imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
          className={classes.card}
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
				</Card>
			</div>
		</>
	);
};

export default About;
