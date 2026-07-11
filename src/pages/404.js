import Link from "next/link";

const Error = () => {
	return (
		<main className="grid min-h-[70vh] place-items-center bg-white px-6 py-24">
			<div className="text-center">
				<p className="text-base font-bold text-brand-gold-dark">404</p>
				<h1 className="mt-4 text-3xl font-extrabold text-brand-green sm:text-5xl">
					Page not found
				</h1>
				<p className="mt-6 text-base leading-7 text-[#54604e]">
					Sorry, we couldn&apos;t find the page you&apos;re looking for.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/"
						className="bg-brand-gold px-6 py-3 text-sm font-bold text-brand-green hover:bg-brand-gold-dark hover:text-white transition-colors"
					>
						Go back home
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Error;
