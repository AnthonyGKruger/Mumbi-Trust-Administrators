const PageHero = ({ eyebrow, title, description }) => {
	return (
		<div className="bg-brand-green text-brand-cream px-6 py-16 sm:py-20">
			<div className="mx-auto max-w-[1240px]">
				{eyebrow && (
					<div className="mb-4 text-[13px] font-bold tracking-[0.16em] text-brand-gold">
						{eyebrow}
					</div>
				)}
				<h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
				{description && (
					<p className="mt-4 max-w-xl text-base leading-relaxed text-[#cdd6c6]">
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default PageHero;
