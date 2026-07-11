import Image from "next/image";
import Link from "next/link";
import MoreOnTrusts from "@/components/UI/MoreOnTrusts";
import ContactCta from "@/components/UI/ContactCta";
import services from "@/data/services";

const homeServices = services.slice(0, 6);

const Home = () => {
	return (
		<main>
			{/* hero */}
			<div className="bg-brand-green text-brand-cream">
				<div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
					<div>
						<div className="mb-6 text-[13px] font-bold tracking-[0.16em] text-brand-gold">
							TRUST ADMINISTRATION &middot; ESTATE PLANNING &middot; RISK
						</div>
						<h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[54px]">
							Build a legacy.
							<br />
							Touch freedom.
						</h1>
						<p className="mb-9 max-w-[480px] text-[17px] leading-relaxed text-[#cdd6c6]">
							Independent trusteeship for families and businesses — trust
							formation, administration and protection, handled with rigour
							and transparency.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/services"
								className="bg-brand-gold px-7 py-3.5 text-[15px] font-bold text-brand-green hover:bg-white transition-colors"
							>
								View Our Services
							</Link>
							<Link
								href="/ContactUs"
								className="border border-brand-cream/50 px-7 py-3.5 text-[15px] font-semibold text-brand-cream hover:bg-white/10 transition-colors"
							>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="relative h-72 overflow-hidden rounded border border-brand-cream/25 md:h-[360px]">
						<Image
							src="/media/images/carousel-image-2.webp"
							alt="A family enjoying time together"
							fill
							priority
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				</div>
			</div>

			{/* about */}
			<div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-24">
				<div className="relative order-2 h-64 overflow-hidden rounded md:order-1 md:h-80">
					<Image
						src="/media/images/events.webp"
						alt="Mumbi Trust Administrators team in consultation"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-cover"
					/>
				</div>
				<div className="order-1 md:order-2">
					<div className="mb-4 text-[13px] font-bold tracking-[0.14em] text-brand-gold-dark">
						ABOUT MUMBI
					</div>
					<h2 className="mb-5 text-3xl font-extrabold leading-snug text-brand-green">
						Rigorous fiduciary care, personalised for every trust.
					</h2>
					<p className="mb-4 text-[15.5px] leading-relaxed text-[#54604e]">
						Mumbi Trust Administrators provides professional, independent
						trustee services to individuals, families and organisations
						managing their assets through trust structures.
					</p>
					<p className="mb-7 text-[15.5px] leading-relaxed text-[#54604e]">
						Our team combines legal, tax and administrative expertise with a
						personalised approach — so every trust we manage is set up for
						clarity, compliance and long-term protection.
					</p>
					<Link
						href="/About"
						className="border-b-2 border-brand-gold pb-0.5 text-[15px] font-bold text-brand-green"
					>
						More about us &rarr;
					</Link>
				</div>
			</div>

			{/* services */}
			<div className="bg-brand-cream-light py-24 md:py-28">
				<div className="mx-auto max-w-[1240px] px-6">
					<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
						<div>
							<div className="mb-4 text-[13px] font-bold tracking-[0.14em] text-brand-gold-dark">
								WHAT WE DO
							</div>
							<h2 className="text-3xl font-extrabold text-brand-green">
								Services
							</h2>
						</div>
						<Link
							href="/services"
							className="border-b-2 border-brand-gold pb-0.5 text-[15px] font-bold text-brand-green"
						>
							View all services &rarr;
						</Link>
					</div>
					<div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
						{homeServices.map((s) => (
							<Link
								key={s.id}
								href={`/services/${s.id}`}
								className="block border-t-[3px] border-brand-gold bg-white px-7 py-8 hover:shadow-md transition-shadow"
							>
								<div className="mb-2.5 text-lg font-bold text-brand-green">
									{s.title}
								</div>
								<div className="text-sm leading-relaxed text-[#6b7362]">
									{s.cardDescription}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<MoreOnTrusts />

			<ContactCta />
		</main>
	);
};

export default Home;
