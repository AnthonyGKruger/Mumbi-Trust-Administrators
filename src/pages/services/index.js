import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/UI/PageHero";
import ContactCta from "@/components/UI/ContactCta";
import services from "@/data/services";

const Services = () => {
	return (
		<main>
			<PageHero
				eyebrow="WHAT WE DO"
				title="Services"
				description="Independent, comprehensive trust administration — from formation through to ongoing compliance and reporting."
			/>

			<div className="mx-auto max-w-[1240px] px-6 py-20 md:py-24">
				<div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s) => (
						<Link
							key={s.id}
							href={`/services/${s.id}`}
							className="block overflow-hidden bg-brand-cream-light hover:shadow-md transition-shadow"
						>
							<div className="relative h-[170px] overflow-hidden">
								<Image
									src={s.image}
									alt={s.title}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									className="object-cover"
								/>
							</div>
							<div className="border-t-[3px] border-brand-gold px-6 py-7">
								<div className="mb-2.5 text-lg font-bold text-brand-green">
									{s.title}
								</div>
								<div className="text-sm leading-relaxed text-[#6b7362]">
									{s.cardDescription}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			<ContactCta
				title="Not sure which service you need?"
				description="Tell us about your situation and we'll recommend the right structure."
			/>
		</main>
	);
};

export default Services;
