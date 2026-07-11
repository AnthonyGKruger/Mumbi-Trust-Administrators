import Link from "next/link";

const ContactCta = ({
	title = "Ready to build your legacy?",
	description = "Get in touch and we'll walk you through your options.",
}) => {
	return (
		<div className="bg-brand-green px-6 py-20 text-center text-brand-cream">
			<h2 className="mb-4 text-3xl font-extrabold">{title}</h2>
			<p className="mb-8 text-base text-[#cdd6c6]">{description}</p>
			<Link
				href="/ContactUs"
				className="inline-block bg-brand-gold px-8 py-3.5 text-[15px] font-bold text-brand-green hover:bg-white transition-colors"
			>
				Contact Us
			</Link>
		</div>
	);
};

export default ContactCta;
