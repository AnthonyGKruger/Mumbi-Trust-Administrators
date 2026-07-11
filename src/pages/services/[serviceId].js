import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageHero from "@/components/UI/PageHero";
import services, { getServiceById } from "@/data/services";

const ServiceDetail = ({ service }) => {
	return (
		<main>
			<Head>
				<title>{`Mumbi Trust Administrators - ${service.title}`}</title>
			</Head>

			<div className="bg-brand-green px-6 py-16 text-brand-cream sm:py-20">
				<div className="mx-auto max-w-[1240px]">
					<Link href="/services" className="text-[13px] font-bold text-brand-gold">
						&larr; All Services
					</Link>
					<h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
						{service.title}
					</h1>
				</div>
			</div>

			<div className="mx-auto max-w-[1240px] px-6 pt-16">
				<div className="relative h-56 overflow-hidden rounded sm:h-[340px]">
					<Image
						src={service.image}
						alt={service.title}
						fill
						priority
						sizes="100vw"
						className="object-cover"
					/>
				</div>
			</div>

			<div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-14 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
				<div>
					{service.description.map((p) => (
						<p key={p} className="mb-5 text-base leading-loose text-[#3a4a35]">
							{p}
						</p>
					))}

					<div className="mt-10">
						<h3 className="mb-5 text-sm font-bold tracking-[0.1em] text-brand-gold-dark">
							HIGHLIGHTS
						</h3>
						{service.highlights.map((h) => (
							<div
								key={h}
								className="flex gap-3.5 border-t border-brand-line py-3.5 text-[15px] text-[#3a4a35]"
							>
								<span className="font-extrabold text-brand-gold">&mdash;</span>
								{h}
							</div>
						))}
					</div>
				</div>

				<div className="bg-brand-cream-light px-8 py-9 md:sticky md:top-24">
					<div className="mb-4 text-sm font-bold tracking-[0.1em] text-brand-green">
						READY TO GET STARTED?
					</div>
					<p className="mb-6 text-[14.5px] leading-relaxed text-[#5f6a58]">
						Speak to our team about how {service.title} can fit into your
						estate or trust plan.
					</p>
					<Link
						href="/ContactUs"
						className="block bg-brand-green py-3.5 text-center text-[15px] font-bold text-brand-cream hover:bg-brand-green-dark transition-colors"
					>
						Contact Us
					</Link>
				</div>
			</div>
		</main>
	);
};

export const getStaticPaths = () => ({
	paths: services.map((s) => ({ params: { serviceId: s.id } })),
	fallback: false,
});

export const getStaticProps = ({ params }) => {
	const service = getServiceById(params.serviceId);
	if (!service) {
		return { notFound: true };
	}
	return { props: { service } };
};

export default ServiceDetail;
