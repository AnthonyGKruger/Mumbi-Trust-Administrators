export default function handler(req, res) {
	const services = [
		{
			id: "s1",
			title: "Trust Formation",
			link: "/services/s1",
			image: "/media/images/Trust-formation.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s2",
			title: "Trust Administration",
			link: "/services/s2",
			image: "/media/images/Trust-administration.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s3",
			title: "Trust Financials",
			link: "/services/s3",
			image: "/media/images/Trust-Financials.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s4",
			title: "Independent Trusteeship",
			link: "/services/s4",
			image: "/media/images/independant-trusteeship.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s5",
			title: "Risk Management",
			link: "/services/s5",
			image: "/media/images/risk-management.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s6",
			title: "Income Tax Returns",
			link: "/services/s6",
			image: "/media/images/income-tax-returns.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s7",
			title: "Bond Originating",
			link: "/services/s7",
			image: "/media/images/bond-originating.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s8",
			title: "Association With Attorneys",
			link: "/services/s8",
			image: "/media/images/association-with-attorneys.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s9",
			title: "Life Cover",
			link: "/services/s9",
			image: "/media/images/life-cover.jpg",
			imageAlt: "alt description",
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
		},
		{
			id: "s10",
			title: "Events",
			link: "/services/s10",
			image: "/media/images/events.jpg",
			imageAlt: "alt description",
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
		},
	];

	if (req.method === "POST") {
		if (req.body) {
			services.forEach((element) => {
				if (element.id === req.body.id) {
					res.status(200).json(element);
				}
			});
		} else {
			res.status(200).json(services);
		}
	}
}
