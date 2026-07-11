const faqs = [
	{
		q: "Why have a trust?",
		a: "Trusts aren't only for large or complicated estates — they can help many individuals protect and pass on assets with more control than a will alone. A trust is an agreement between a founder and a trustee, who manages and distributes assets according to the trust's instructions, always in the interest of its beneficiaries. As a fiduciary, the trustee must act with reasonable care, avoid conflicts of interest, and administer the trust with obedience, prudence, objectivity and transparency.",
	},
	{
		q: "What are the benefits of a trust?",
		a: "Trusts can protect beneficiaries from poor financial decisions, avoid court-supervised probate, shield assets from creditors, support incapacitated founders, manage complex or shared assets, fund closely-held business succession, provide a vehicle for charitable gifting, and reduce estate and income taxes — all while keeping your affairs private.",
	},
];

const MoreOnTrusts = () => {
	return (
		<div className="mx-auto max-w-[840px] px-6 py-20 sm:py-24">
			<div className="mb-12 text-center">
				<div className="mb-4 text-[13px] font-bold tracking-[0.14em] text-brand-gold-dark">
					FAQ
				</div>
				<h2 className="text-3xl font-extrabold text-brand-green">
					More on Trusts
				</h2>
			</div>
			{faqs.map((f) => (
				<details key={f.q} className="border-b border-brand-line py-6">
					<summary className="flex items-center justify-between text-lg font-bold text-brand-green">
						{f.q}
						<span className="faq-plus text-2xl font-normal text-brand-gold-dark transition-transform">
							+
						</span>
					</summary>
					<p className="mt-4 text-[15px] leading-relaxed text-[#5f6a58]">
						{f.a}
					</p>
				</details>
			))}
		</div>
	);
};

export default MoreOnTrusts;
