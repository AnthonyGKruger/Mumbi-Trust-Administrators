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
			</Head>
			<Navigation />
			<Component {...pageProps} />
			<Footer/>
			<Analytics/>
		</>
	);
};

export default App;
