import PageHero from "@/components/UI/PageHero";

const sections = [
	{
		title: "1. Information We Collect",
		body: [
			"Personal Information Provided by You: We may collect personal information such as your name, email address, contact number, physical address, and any other information you voluntarily provide when you contact us or use our services.",
			"Usage Information: We may collect information about your usage of our website, including your IP address, browser type, referring/exit pages, and operating system. We use this information to analyse trends, administer our website, track user movements, and gather broad demographic information for aggregate use.",
		],
	},
	{
		title: "2. Use of Personal Information",
		body: [
			"Provision of Services: To provide our trust administration services, communicate with you, and respond to your enquiries.",
			"Website Improvement: To analyse and improve our website, enhance user experience, and troubleshoot any technical issues.",
			"Marketing Communication: With your consent, we may send you promotional emails or other marketing materials about our services. You can opt-out of receiving such communications at any time.",
			"Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
		],
	},
	{
		title: "3. Sharing of Personal Information",
		body: [
			"Service Providers: We may engage trusted third-party service providers who assist us in operating our business and providing our services. These service providers are obligated to maintain the confidentiality and security of your personal information.",
			"Legal Requirements: We may disclose your personal information if required to do so by law or in response to a valid request from a governmental authority, court order, or similar legal process.",
			"Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity.",
		],
	},
	{
		title: "4. Data Security",
		body: [
			"We implement reasonable security measures to protect your personal information from unauthorised access, loss, misuse, or alteration. However, please note that no data transmission or storage system can be guaranteed to be 100% secure.",
		],
	},
	{
		title: "5. Your Rights",
		body: [
			"Access and Correction: You have the right to access and correct any personal information we hold about you. If you wish to exercise this right, please contact us using the information provided below.",
			"Opt-out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in the emails or by contacting us directly.",
		],
	},
	{
		title: "6. Children's Privacy",
		body: [
			"Our website and services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected personal information from a child, please contact us immediately, and we will take appropriate measures to delete such information.",
		],
	},
	{
		title: "7. Changes to the Privacy Policy",
		body: [
			"We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post any revised Privacy Policy on our website and indicate the effective date. Your continued use of our website and services after the effective date constitutes your acceptance of the revised Privacy Policy.",
		],
	},
];

const PrivacyPolicy = () => {
	return (
		<main>
			<PageHero title="Privacy Policy" />

			<article className="mx-auto max-w-[760px] px-6 py-20 md:py-24">
				<p className="mb-10 text-sm text-[#8a8f80]">Last updated: July 2026</p>

				{sections.map((s) => (
					<div key={s.title} className="mb-9">
						<h2 className="mb-3 text-lg font-bold text-brand-green">
							{s.title}
						</h2>
						{s.body.map((p) => (
							<p
								key={p}
								className="mb-3 text-[15px] leading-relaxed text-[#54604e]"
							>
								{p}
							</p>
						))}
					</div>
				))}

				<div className="mb-9">
					<h2 className="mb-3 text-lg font-bold text-brand-green">
						8. Contact Us
					</h2>
					<p className="text-[15px] leading-relaxed text-[#54604e]">
						If you have any questions or concerns about this Privacy Policy or
						our data practices, please contact us at:
						<br />
						<br />
						Mumbi Trust Administrators
						<br />
						70 Markotter Street
						<br />
						Centurion, Gauteng
						<br />
						<a href="mailto:admin@mumbi.co.za" className="underline">
							admin@mumbi.co.za
						</a>
						<br />
						<a href="tel:+27814868538" className="underline">
							+27 81 486 8538
						</a>
					</p>
				</div>
			</article>
		</main>
	);
};

export default PrivacyPolicy;
