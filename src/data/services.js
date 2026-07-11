const services = [
	{
		id: "trust-formation",
		title: "Trust Formation",
		image: "/media/images/Trust-formation.webp",
		cardDescription:
			"Drafting and registering trusts tailored to your family or business goals.",
		description: [
			"We draft and register trusts tailored to your family or business goals, ensuring the founding documents reflect exactly how you want assets managed and distributed.",
			"From choosing the right trust structure to appointing trustees, we guide you through every decision so the trust is built on a solid legal foundation from day one.",
		],
		highlights: [
			"Trust deed drafting",
			"Master's Office registration",
			"Trustee appointment guidance",
			"Structuring for your specific goals",
		],
	},
	{
		id: "trust-administration",
		title: "Trust Administration",
		image: "/media/images/Trust-administration.webp",
		cardDescription:
			"Ongoing management, accounting and compliance for existing trusts.",
		description: [
			"Ongoing, hands-on management of your trust — from record-keeping and compliance to coordinating distributions to beneficiaries.",
			"We keep your trust in good standing year after year, so you never have to worry about missed filings or lapsed governance.",
		],
		highlights: [
			"Annual compliance & filings",
			"Beneficiary distributions",
			"Trustee meeting coordination",
			"Ongoing regulatory monitoring",
		],
	},
	{
		id: "independent-trusteeship",
		title: "Independent Trusteeship",
		image: "/media/images/independant-trusteeship.webp",
		cardDescription:
			"Impartial, professional trustees for objective decision-making.",
		description: [
			"We act as an impartial, professional trustee — bringing objective, fiduciary decision-making free from family or business conflicts of interest.",
			"As an independent trustee we owe a duty of care, prudence and transparency to every beneficiary equally.",
		],
		highlights: [
			"Objective, conflict-free decisions",
			"Fiduciary duty of care",
			"Transparent reporting to beneficiaries",
			"Experienced trust governance",
		],
	},
	{
		id: "trust-financials",
		title: "Trust Accounting & Financials",
		image: "/media/images/Trust-Financials.webp",
		cardDescription:
			"Clear financial record-keeping and reporting for every trust.",
		description: [
			"Clear, accurate financial record-keeping for every trust we administer, from bookkeeping to annual financial statements.",
			"Beneficiaries and founders alike get full visibility into how trust assets are performing and being managed.",
		],
		highlights: [
			"Bookkeeping & reconciliations",
			"Annual financial statements",
			"Asset performance reporting",
			"Audit-ready records",
		],
	},
	{
		id: "income-tax-returns",
		title: "Income Tax Returns",
		image: "/media/images/income-tax-returns.webp",
		cardDescription:
			"Accurate, timely tax filing for trusts and their beneficiaries.",
		description: [
			"We prepare and submit accurate, timely tax returns for trusts and their beneficiaries, keeping you compliant with SARS requirements.",
			"Our team stays current on tax legislation affecting trusts, so your filings are always correct and optimised.",
		],
		highlights: [
			"SARS-compliant filings",
			"Beneficiary tax coordination",
			"Up-to-date on tax legislation",
			"Deadline management",
		],
	},
	{
		id: "risk-management",
		title: "Risk Management",
		image: "/media/images/risk-management.webp",
		cardDescription:
			"Identifying and mitigating risk across trust assets and structures.",
		description: [
			"We identify and mitigate risk across trust assets and structures — protecting what the trust was built to preserve.",
			"From asset protection strategies to insurance review, we help you plan for the unexpected.",
		],
		highlights: [
			"Asset protection strategy",
			"Insurance & cover review",
			"Creditor protection planning",
			"Ongoing risk monitoring",
		],
	},
	{
		id: "association-with-attorneys",
		title: "Association with Attorneys",
		image: "/media/images/association-with-attorneys.webp",
		cardDescription:
			"Coordinated legal support across estate and trust matters.",
		description: [
			"We work alongside attorneys to coordinate legal support across estate and trust matters, so nothing falls between the cracks.",
			"This partnership means legal, tax and administrative advice stay aligned throughout your trust's life.",
		],
		highlights: [
			"Coordinated legal support",
			"Estate planning alignment",
			"Dispute resolution guidance",
			"Single point of contact",
		],
	},
	{
		id: "bond-origination",
		title: "Bond Origination",
		image: "/media/images/bond-originating.webp",
		cardDescription:
			"Assistance securing bonds for trust-owned property.",
		description: [
			"We assist trusts in securing bonds for property held in trust, coordinating with lenders on your behalf.",
			"We help structure financing in a way that supports the trust's long-term financial health.",
		],
		highlights: [
			"Lender coordination",
			"Property finance structuring",
			"Rate & term negotiation support",
			"Documentation handling",
		],
	},
	{
		id: "life-cover",
		title: "Life Cover",
		image: "/media/images/life-cover.webp",
		cardDescription:
			"Guidance on life cover to protect trust beneficiaries.",
		description: [
			"We provide guidance on life cover to protect trust beneficiaries and ensure liquidity when it's needed most.",
			"The right policy, held correctly within the trust, can fund obligations without forcing a sale of trust assets.",
		],
		highlights: [
			"Cover needs assessment",
			"Policy structuring within the trust",
			"Beneficiary protection planning",
			"Liquidity planning",
		],
	},
];

export const getServiceById = (id) => services.find((s) => s.id === id);

export default services;
