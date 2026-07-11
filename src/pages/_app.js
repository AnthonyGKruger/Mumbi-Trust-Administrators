import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/UI/SiteFooter";
import Script from "next/script";
import Modal from "@/components/UI/Modal";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id="ga-init" strategy="lazyOnload">
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
				<title>Mumbi Trust Administrators</title>
				<meta
					name="description"
					content="Independent trust administration, estate planning and fiduciary services from Mumbi Trust Administrators."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<link rel="icon" href="/media/images/favicon.png" />
				<link rel="shortcut icon" href="/media/images/favicon.png" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/media/images/favicon.png"
				/>
			</Head>
			<Navigation />
			<Component {...pageProps} />
			<Footer />
			<Modal />
			<Analytics />
		</>
	);
};

export default App;
