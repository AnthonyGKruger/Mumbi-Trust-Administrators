import { Inter } from "next/font/google";
import CallToAction from "@/components/UI/CallToAction";
import Services from "@/pages/services";
import About from "@/pages/About";
import Map from "@/components/UI/Map";
import MoreOnTrusts from "@/components/UI/MoreOnTrusts";
import ContactUs from "@/pages/ContactUs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	return (
		<>
			<Head>
				<title>MTA</title>
				<meta name="description" content="MTA" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>{" "}
			<main className={` ${inter.className}`}>
				<CallToAction />
				<Services />
				<About />
				<Map />
				<MoreOnTrusts />
				<ContactUs />
			</main>
		</>
	);
};

export default Home;
