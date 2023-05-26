import { Footer } from "flowbite-react";
import {
	BsFacebook,
	BsLinkedin,
} from "react-icons/bs";

const imageTheme = {
	img: "h-16 mt-2 ml-auto mr-auto lg:h-22 xl:h-22"
}

const SiteFooter = () => {
	return (
		<Footer container={true}>
			<div className="w-full">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div className="w-96 md:w-56 xl:w-96">
						<Footer.Brand
							href="/"
							src="/media/images/MTA_Logo.png"
							alt="MTA Logo"
							theme={imageTheme}
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="Office Hours" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Monday - Friday</Footer.Link>
								<Footer.Link href="#">08:00AM - 16:00PM</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Contact Details" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="tel:+27814868538">+27814868538</Footer.Link>
								<Footer.Link href="mailto:admin@mumbi.co.za">
									admin@mumbi.co.za
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Address" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6" target="_blank">70 Markotter Street</Footer.Link>
								<Footer.Link href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6" target="_blank">The Reeds</Footer.Link>
								<Footer.Link href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6" target="_blank">Centurion</Footer.Link>
								<Footer.Link href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6" target="_blank">Pretoria</Footer.Link>
								<Footer.Link href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6" target="_blank">0157</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="Mumbi Trust Administrators"
						year={new Date().getFullYear()}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={BsFacebook} />
						<Footer.Icon href="#" icon={BsLinkedin} />
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default SiteFooter;
