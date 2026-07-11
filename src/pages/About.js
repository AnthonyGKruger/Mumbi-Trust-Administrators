import Image from "next/image";
import PageHero from "@/components/UI/PageHero";
import ContactCta from "@/components/UI/ContactCta";

const commitments = [
	{
		n: "01",
		title: "Expertise & Knowledge",
		desc: "Deep experience in trust law, taxation and estate planning, kept current with industry regulation.",
	},
	{
		n: "02",
		title: "Personalised Approach",
		desc: "Every trust strategy is built around your specific circumstances and goals.",
	},
	{
		n: "03",
		title: "Confidentiality",
		desc: "Sensitive information is handled with the strictest discretion and security.",
	},
	{
		n: "04",
		title: "Transparent Communication",
		desc: "Regular updates and clear answers throughout the life of your trust.",
	},
	{
		n: "05",
		title: "Long-Term Partnership",
		desc: "We remain your trusted advisors well beyond the initial setup.",
	},
];

const About = () => {
	return (
		<main>
			<PageHero eyebrow="ABOUT US" title="Mumbi Trust Administrators" />

			<div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-16 px-6 py-20 md:grid-cols-2 md:py-24">
				<div className="relative h-72 overflow-hidden rounded md:sticky md:top-24 md:h-[420px]">
					<Image
						src="/media/images/carousel-image-4.webp"
						alt="A person embracing freedom, arms outstretched at sunrise"
						fill
						priority
						sizes="(min-width: 768px) 45vw, 100vw"
						className="object-cover"
					/>
				</div>
				<div>
					<p className="mb-8 text-lg leading-relaxed text-[#3a4a35]">
						We specialise in professional, personalised trust administration
						for individuals, families and organisations who want to manage
						and protect their assets with clarity and care.
					</p>
					<p className="mb-11 text-[15.5px] leading-relaxed text-[#54604e]">
						Establishing and maintaining a robust trust takes more than
						paperwork — it takes an experienced hand navigating legal,
						financial and fiduciary complexity, so your assets stay
						safeguarded and your legacy is preserved for the generations who
						follow.
					</p>

					<div className="mb-7 text-[13px] font-bold tracking-[0.14em] text-brand-gold-dark">
						OUR COMMITMENT
					</div>
					{commitments.map((c) => (
						<div
							key={c.n}
							className="flex gap-5 border-t border-brand-line py-6"
						>
							<div className="w-7 flex-shrink-0 text-sm font-extrabold text-brand-gold">
								{c.n}
							</div>
							<div>
								<div className="mb-2 text-base font-bold text-brand-green">
									{c.title}
								</div>
								<div className="text-[14.5px] leading-relaxed text-[#5f6a58]">
									{c.desc}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<ContactCta
				title="Let's talk about your trust."
				description="We're here to help you secure your legacy and protect your assets."
			/>
		</main>
	);
};

export default About;
