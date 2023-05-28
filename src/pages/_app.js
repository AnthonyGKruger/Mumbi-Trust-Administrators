import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";
import {Analytics} from "@vercel/analytics/react"
import Footer from "@/components/UI/SiteFooter";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>MTA</title>
				<meta name="description" content="MTA" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navigation />
			<Component {...pageProps} />
			<Footer/>
			<Analytics/>
		</>
	);
};

export default App;
