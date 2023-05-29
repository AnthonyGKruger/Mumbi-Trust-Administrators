import Heading from "@/components/UI/Heading";
import { Card } from "flowbite-react";
import Services from "./services";
import { useRouter } from "next/router";

const About = () => {
	const {asPath} = useRouter();
	const imgTheme = { img: { base: "w-96 mx-auto" } };
	return (
		<>
			<Heading content="About Us" />
			<div className={` mx-7 mt-10 sm:mt-16 xl:mx-72  md:mx-16`}>
				{/* <div className={` mx-7 mt-10 sm:mt-16 xl:mx-72 lg:mx-52 md:mx-16`}> */}
				{/* <div className={`${classes.card} mx-7 mt-10 sm:mt-16 xl:mx-72 lg:mx-52 md:mx-16`}> */}
				<Card
					// horizontal={true}
					imgSrc="/media/images/MTA_Logo.png"
					theme={imgTheme}
				>
					<h5 className="text-2xl font-bold tracking-tight text-amber-900 dark:text-white text-center">
						Mumbi Trust Administrators
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Welcome to Mumbi Trust Administrators, your trusted partner in
						comprehensive trust administration services. We specialize in
						providing professional and personalized solutions to individuals,
						families, and organizations seeking to effectively manage and
						protect their assets through trust structures.
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						At Mumbi Trust Administrators, we understand the importance of
						establishing and maintaining a robust trust administration system.
						Our team of experienced professionals is dedicated to helping you
						navigate the complexities of trust management, ensuring that your
						assets are safeguarded and your legacy is preserved for generations
						to come.
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Our Commitment:
					</p>
					<ol
						type="1"
						className="font-normal text-gray-700 dark:text-gray-400  list-decimal"
					>
						<div className="lg:mx-16 md:mx-8 mx-5">
							<li>
								Expertise and Knowledge: Trust administration requires in-depth
								understanding of legal, financial, and fiduciary
								responsibilities. Our team consists of highly skilled
								professionals with extensive experience in trust law, taxation,
								and estate planning. We stay up-to-date with the latest industry
								regulations and best practices to provide you with accurate and
								reliable advice.
							</li>
							<li>
								Personalized Approach: We recognize that each client has unique
								needs and objectives. Our approach is tailored to your specific
								circumstances, ensuring that we develop a trust administration
								strategy that aligns with your goals. We take the time to listen
								and understand your requirements, offering customized solutions
								that provide peace of mind and financial security.
							</li>
							<li>
								Confidentiality and Privacy: Trust administration involves
								sensitive information and personal details. We adhere to the
								strictest standards of confidentiality and privacy, ensuring
								that your information remains secure and protected. You can
								trust us to handle your affairs with the utmost discretion and
								professionalism.
							</li>
							<li>
								Transparent Communication: We believe in fostering open and
								transparent communication with our clients. Throughout the trust
								administration process, we keep you informed about the progress,
								address any concerns or questions you may have, and provide
								regular updates on the performance of your trust. We strive to
								build strong relationships based on trust, integrity, and clear
								communication.
							</li>
							<li>
								Long-Term Partnership: Our commitment to you extends beyond the
								initial trust administration process. We view our clients as
								long-term partners and are dedicated to maintaining ongoing
								relationships. As your trusted advisors, we are here to provide
								guidance and support whenever you need it, ensuring that your
								trust continues to serve your best interests over time.
							</li>
						</div>
					</ol>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Mumbi Trust Administrators is dedicated to providing professional
						and reliable trust administration services that simplify the complex
						world of trust management. With our expertise, personalized
						approach, and unwavering commitment to your success, we are here to
						help you secure your legacy and protect your assets for generations
						to come. Contact us today to explore how we can assist you in your
						trust administration needs.
					</p>
				</Card>
			</div>
			{asPath !== "/" && <Services/>}
		</>
	);
};

export default About;
