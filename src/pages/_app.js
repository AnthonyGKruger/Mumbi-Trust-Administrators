import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/UI/SiteFooter";
import Script from "next/script";
// import Services from "./services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "@/components/UI/Modal";

const App = ({ Component, pageProps }) => {
	const { asPath } = useRouter();
	const [title, setTitle] = useState("Mumbi Trust Administrators");

	useEffect(() => {
		if (asPath === "/") {
			setTitle(`Mumbi Trust Administrators - Home`);
		} else if (asPath === "/About") {
			setTitle(`Mumbi Trust Administrators - About`);
		} else if (asPath === "/services") {
			setTitle(`Mumbi Trust Administrators - Services`);
		} else if (asPath === "/404") {
			setTitle(`Mumbi Trust Administrators - Error`);
		} else if (asPath === "/ContactUs") {
			setTitle(`Mumbi Trust Administrators - Contact Us`);
		} else if (asPath === "PrivacyPolicy") {
			setTitle(`Mumbi Trust Administrators - Privacy Policy`);
		}
	}, []);

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
					});
			`}
			</Script>
			<Head>
				<title>{title}</title>
				<meta name="description" content="MTA" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>

				<link rel="icon" href="/media/images/MTA_logo.webp" />
				<link rel="shortcut icon" href="/media/images/MTA_logo.webp" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/jpg"
					sizes="32x32"
					href="/media/images/MTA_logo.webp"
				/>
				<link
					rel="icon"
					type="image/jpg"
					sizes="16x16"
					href="/media/images/MTA_logo.webp"
				/>
			</Head>
			<Navigation />
			<Component {...pageProps} />
			{/* {asPath !== "/" || asPath !== "/services"   && <Services/>} */}
			<Footer />
			<Modal/>
			<Analytics />
		</>
	);
};

export default App;
