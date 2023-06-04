import Heading from "@/components/UI/Heading";
import Image from "next/image";

const product = {
	name: "Basic Tee 6-Pack",
	images: [
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
			alt: "Model wearing plain white basic tee.",
		},
	],

	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		"Hand cut and sewn locally",
		"Dyed with our proprietary colors",
		"Pre-washed & pre-shrunk",
		"Ultra-soft 100% cotton",
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

export default function Example() {
	return (
		<div className="bg-white">
			<div className="pt-6">
				<Heading content="Service Title" />
				{/* Image gallery */}
				<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:px-8">
					<div className="aspect-h-5 aspect-w-4  sm:overflow-hidden sm:rounded-lg">
						{/* <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"> */}
						<Image
							width={50}
							height={50}
							src={"/media/images/events.jpg"}
							alt={product.images[0].alt}
							className="h-full w-full object-cover object-center"
							unoptimized
						/>
					</div>
				</div>

				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6  lg:max-w-7xl   lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2  lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							{product.name}
						</h1>
					</div>

					<div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
									{product.highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">Details</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{product.details}</p>
							</div>
							<a href="/ContactUs">
								<button
									type="button"
									className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-lime-400 px-8 py-3 text-base font-medium  hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2  text-amber-800 hover:text-amber-400"
								>
									Contact Us
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
