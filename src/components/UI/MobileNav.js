import { Dropdown } from "flowbite-react";
import classes from "@/styles/Navigation.module.css";

const MobileNav = () => {
	const icon = (
		<svg
			className="w-6 h-6"
			ariaHidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
		</svg>
	);
	return (
		<div className={`float-right mt-8 ${classes.mobileNav}`}>
			<Dropdown color="lime" label={icon} dismissOnClick={true} placement={""}>
				<Dropdown.Item>Home</Dropdown.Item>
				<Dropdown.Item>Services</Dropdown.Item>
				<Dropdown.Item>About Us</Dropdown.Item>
				<Dropdown.Item>Contact Us</Dropdown.Item>
				<Dropdown.Item>Privacy Policy</Dropdown.Item>
			</Dropdown>
		</div>
	);
};

export default MobileNav;
