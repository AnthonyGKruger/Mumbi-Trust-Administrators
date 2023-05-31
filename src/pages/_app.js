import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/UI/SiteFooter";
import Script from "next/script";
// import Services from "./services";
// import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
	// const {asPath} = useRouter();

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
				<title>MTA</title>
				<meta name="description" content="MTA" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</Head>
			<Navigation />
			<Component {...pageProps} />
			{/* {asPath !== "/" || asPath !== "/services"   && <Services/>} */}
			<Footer />
			<Analytics />
		</>
	);
};

export default App;
