import { Footer } from "flowbite-react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const imageTheme = {
	img: "md:h-22 lg:h-22 xl:h-22 mt-2 ml-auto mr-auto",
};

const linkClasses = `hover:text-lime-600 transition-all ease-in-out delay-75 text-gray-500 text-sm`;

const SiteFooter = () => {
	return (
		<Footer container={true} className="border-t-2 shadow mt-10">
			<div className="w-full">
				<div className="w-52 mb-12 md:mb-5 md:w-64 xl:w-96 mr-auto ml-auto">
					<Footer.Brand
						href="/"
						src="/media/images/MTA_Logo.webp"
						alt="MTA Logo"
						theme={imageTheme}
					/>
				</div>
				<div className="grid w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 w-full text-center">
						<div>
							<Footer.Title title="Office Hours" />
							<Footer.LinkGroup col={true}>
								<Footer.Link
									className={linkClasses}
									href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6"
									target="_blank"
								>
									Monday - Friday
								</Footer.Link>
								<Footer.Link
									className={linkClasses}
									href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6"
									target="_blank"
								>
									08:00AM - 16:00PM
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Contact Details" />
							<Footer.LinkGroup col={true}>
								<Footer.Link className={linkClasses} href="tel:+27814868538">
									+27814868538
								</Footer.Link>
								<Footer.Link
									className={linkClasses}
									href="mailto:admin@mumbi.co.za"
								>
									admin@mumbi.co.za
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Address" />
							<Footer.LinkGroup col={true}>
								<Footer.Link
									href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6"
									target="_blank"
									className={linkClasses}
								>
									70 Markotter Street
								</Footer.Link>

								<Footer.Link
									href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6"
									target="_blank"
									className={linkClasses}
								>
									Centurion
								</Footer.Link>
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
					<a
							href="/PrivacyPolicy"
							className={linkClasses}
						>
							Privacy Policy
						</a>
					</div>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<a
							href="https://ezdev.solutions"
							target="_blank"
							className={linkClasses}
						>
							Developed by EZdev Solutions
						</a>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default SiteFooter;
