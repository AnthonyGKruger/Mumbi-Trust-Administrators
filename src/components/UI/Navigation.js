import Image from "next/image";
import Link from "next/link";
// import logo from "@/media/images/MTA_Logo.png";
import MobileNav from "@/components/UI/MobileNav";
import classes from "@/styles/Navigation.module.css";
import { Navbar } from "flowbite-react";

const Navigation = () => {
	const headerClasses = `flex justify-center w-full sticky top-0 z-50 bg-white`;

	const linkClasses = `active:border-b active:border-lime-400 hover:border-b hover:border-amber-500 md:hover:text-lime-600 transition-all ease-in-out delay-75`;

	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand href="/">
				<img
					src="/media/images/MTA_Logo.png"
					className="mr-3 h-20"
					alt="MTA Logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse >
				<Navbar.Link
					className={linkClasses}
					href="/"
					color={`text-lime-600`}
				>
					Home
				</Navbar.Link>
				<Navbar.Link className={linkClasses} href="/Services">
					Services
				</Navbar.Link>
				<Navbar.Link className={linkClasses} href="/About">
					About Us
				</Navbar.Link>
				<Navbar.Link className={linkClasses} href="/ContactUs">
					Contact Us
				</Navbar.Link>
				<Navbar.Link className={linkClasses} href="/PrivacyPolicy">
					Privacy Policy
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
