import Navigation from "@/components/UI/Navigation";
import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>MTA</title>
			</Head>
			<Navigation />
			<Component {...pageProps} />
		</>
	);
};

export default App;
