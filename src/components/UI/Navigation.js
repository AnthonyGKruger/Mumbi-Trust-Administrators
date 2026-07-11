import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/About", label: "About" },
	{ href: "/ContactUs", label: "Contact" },
];

const Navigation = () => {
	const { asPath } = useRouter();

	return (
		<Disclosure as="nav" className="sticky top-0 z-40 border-b border-brand-line bg-white/95 backdrop-blur">
			{({ open }) => (
				<>
					<div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4">
						<Link href="/">
							<Image
								src="/media/images/MTA_Logo.webp"
								alt="Mumbi Trust Administrators"
								width={131}
								height={48}
								priority
								className="block h-12 w-auto"
							/>
						</Link>

						<div className="hidden gap-9 text-[15px] font-semibold md:flex">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`pb-0.5 transition-colors hover:text-[#7a9a4a] ${
										asPath === link.href
											? "border-b-2 border-brand-gold text-brand-green"
											: "text-brand-body"
									}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						<DisclosureButton className="inline-flex items-center justify-center rounded p-2 text-brand-green md:hidden">
							{open ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</DisclosureButton>
					</div>

					<DisclosurePanel className="border-t border-brand-line md:hidden">
						<div className="flex flex-col gap-1 px-6 py-4 text-[15px] font-semibold">
							{links.map((link) => (
								<DisclosureButton
									key={link.href}
									as={Link}
									href={link.href}
									className={`rounded px-2 py-2 ${
										asPath === link.href
											? "bg-brand-cream-light text-brand-green"
											: "text-brand-body"
									}`}
								>
									{link.label}
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default Navigation;
