import Heading from "@/components/UI/Heading";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Error from "../404";
import Services from "/";

const Product = () => {
	const router = useRouter();
	const serviceId = router.query.serviceId;
	const [service, setService] = useState();

	const fetchServiceData = async () => {
		const response = await fetch(`/api/products`, {
			method: "POST",
			body: JSON.stringify({ id: serviceId }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setService(data);
	};

	let serviceElement;

	useEffect(() => {
		if (serviceId !== undefined) {
			fetchServiceData();
		}
	}, [serviceId]);

	if (service) {
		if (service.error) {
			serviceElement = <Error />;
		} else {
			serviceElement = (
				<div className="bg-white">
					<div className="pt-6">
						<Heading content={service.title} />
						{/* Image gallery */}
						<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:px-8">
							<div className="aspect-h-4 aspect-w-6  sm:overflow-hidden sm:rounded-lg">
								{/* <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"> */}
								<Image
									width={50}
									height={50}
									src={service.image}
									alt={service.imageAlt}
									className="h-full w-full object-cover object-center"
									unoptimized
									priority
								/>
							</div>
						</div>

						{/* Product info */}
						<div className="mx-auto max-w-2xl px-4  pt-10 sm:px-6  lg:max-w-7xl lg:px-8 lg:pt-16">
							<div className="lg:col-span-2  lg:pr-8">
								<h1 className="text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
									{service.title}
								</h1>
							</div>

							<div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
								{/* Description and details */}
								<div>
									<h3 className="sr-only">Description</h3>

									<div className="space-y-6">
										{service.description.map((paragraph) => (
											<p
												key={Math.floor(Math.random() * 100)}
												className="text-sm text-gray-600"
											>
												{paragraph}
											</p>
										))}
									</div>
								</div>

								<div className="mt-10">
									<h3 className="text-sm font-medium text-amber-900">
										{service.highlightTitle}
									</h3>

									<div className="mt-4">
										<ul
											role="list"
											className="list-disc space-y-2 pl-4 text-sm"
										>
											{service.highlights.map((highlight) => (
												<li
													key={Math.floor(Math.random() * 100)}
													className="text-gray-400"
												>
													<span className="text-gray-600">{highlight}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="mt-10">
									<h2 className="text-sm font-medium text-amber-900">
										Details:
									</h2>

									<div className="mt-4 space-y-6">
										{service.details.map((paragraph) => (
											<p
												key={Math.floor(Math.random() * 100)}
												className="text-sm text-gray-600"
											>
												{paragraph}
											</p>
										))}
									</div>
									<a href="/ContactUs">
										<button
											type="button"
											className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-lime-500 px-8 py-3 text-base font-medium  hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2  text-amber-900 hover:text-amber-400 hover:border-amber-300 ease-in-out delay-75"
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
	}

	return (
		<>
			{service && serviceElement}
			{service && <Services />}
		</>
	);
};

export default Product;
