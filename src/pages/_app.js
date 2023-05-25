import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";
import {Analytics} from "@vercel/analytics/react"

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>MTA</title>
			</Head>
			<Navigation />
			<Component {...pageProps} />
			<Analytics/>
		</>
	);
};

export default App;
