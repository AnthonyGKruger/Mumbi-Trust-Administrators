import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
	return (
		<footer className="bg-brand-green-dark px-6 pb-8 pt-14 text-[#a8b39c]">
			<div className="mx-auto max-w-[1240px]">
				<div className="flex flex-wrap justify-between gap-10 border-b border-[#2c3d24] pb-10">
					<div className="h-fit rounded bg-brand-cream-light px-4 py-3">
						<Image
							src="/media/images/MTA_Logo.webp"
							alt="Mumbi Trust Administrators"
							width={110}
							height={40}
							className="block h-10 w-auto"
						/>
					</div>

					<div className="flex flex-wrap gap-16">
						<div>
							<div className="mb-3.5 text-[13px] font-bold tracking-[0.08em] text-brand-gold">
								OFFICE HOURS
							</div>
							<div className="text-sm leading-loose">
								Monday &ndash; Friday
								<br />
								08:00 &ndash; 16:00
							</div>
						</div>
						<div>
							<div className="mb-3.5 text-[13px] font-bold tracking-[0.08em] text-brand-gold">
								CONTACT
							</div>
							<div className="text-sm leading-loose">
								<a href="tel:+27814868538" className="hover:text-brand-gold">
									+27 81 486 8538
								</a>
								<br />
								<a
									href="mailto:admin@mumbi.co.za"
									className="hover:text-brand-gold"
								>
									admin@mumbi.co.za
								</a>
							</div>
						</div>
						<div>
							<div className="mb-3.5 text-[13px] font-bold tracking-[0.08em] text-brand-gold">
								ADDRESS
							</div>
							<div className="text-sm leading-loose">
								<a
									href="https://goo.gl/maps/XVKNaVvEYhYGwBQM6"
									target="_blank"
									rel="noreferrer"
									className="hover:text-brand-gold"
								>
									70 Markotter Street
									<br />
									Centurion
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px]">
					<span>
						&copy; {new Date().getFullYear()} Mumbi Trust Administrators
					</span>
					<div className="flex gap-6">
						<Link href="/PrivacyPolicy" className="text-brand-gold hover:underline">
							Privacy Policy
						</Link>
						<a
							href="https://ezdev.solutions"
							target="_blank"
							rel="noreferrer"
							className="hover:text-brand-gold"
						>
							Developed by EZdev Solutions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
