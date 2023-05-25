import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import carouselImage1 from "@/media/images/carousel-image-1.jpg";
import carouselImage2 from "@/media/images/carousel-image-2.jpg";
import carouselImage3 from "@/media/images/carousel-image-3.jpg";
import carouselImage4 from "@/media/images/carousel-image-4.jpg";
import classes from "@/styles/CallToAction.module.css";

const CallToAction = () => {
	const containerClasses = `${classes.container}`;
	// const bannerContainerClasses = `absolute z-10 w-full  bg-neutral-800 opacity-40 rounded ${classes.bannerContainer}`;
	// const bannerContainerClasses = `absolute z-10 w-full h-full bg-neutral-800 opacity-40 rounded `;
	const bannerClasses = `rounded xl:backdrop-blur md:backdrop-blur absolute z-20 p-5 mt-14 ml-16 xl:mt-32 xl:ml-20 md:mt-24`;
	// const companyNameClasses = `text-lime-400 my-2 xl:text-4xl text-2xl`;
	const companySloganClasses = `text-amber-500 my-2 xl:text-4xl text-2xl`;
	const buttonClasses = `text-lime-400 border-2 rounded border-lime-400 p-1.5 my-2 hover:text-2xl duration-500 ease-in-out`;

	return (
		<div className={containerClasses}>
			
			<div className={bannerClasses}>
				{/* <p className={companyNameClasses}>Mumbi Trust Administrators</p> */}
				<p className={companySloganClasses}>Build a Legacy. Touch Freedom</p>
				<button className={buttonClasses}><Link href="/Services">View Our Services</Link></button>
			</div>

			<Carousel>
				<Image
					src={carouselImage1}
					width={100}
					height={100}
					alt="Property"
					unoptimized
				/>

				<Image
					src={carouselImage2}
					width={100}
					height={100}
					alt="Family"
					unoptimized
				/>

				<Image
					src={carouselImage3}
					width={100}
					height={100}
					alt="Cars"
					unoptimized
				/>

				<Image
					src={carouselImage4}
					width={100}
					height={100}
					alt="financial wellness"
					unoptimized
				/>
			</Carousel>
		</div>
	);
};

export default CallToAction;
