import Heading from "@/components/UI/Heading";

const PrivacyPolicy = () => {
	return (
		<article className=" center mx-16 mt-10">
			<Heading
				content="Privacy Policy"
			/>		
			<p className="leading-6 my-5">
				This privacy policy applies to ezdev.solutions and explains how I use
				any personal information I collect about you when you use this website.
			</p>
			<span className="leading-6 my-5">Topics:</span>
			<ul className="list-decimal list-inside">
				<li className="indent-4">What information do I collect about you?</li>
				<li className="indent-4">How will I use the information about you?</li>
				<li className="indent-4">Access to your information and corrections</li>
				<li className="indent-4">Cookies</li>
				<li className="indent-4">Other websites</li>
				<li className="indent-4">Changes to my privacy policy</li>
				<li className="indent-4">How to contact me</li>
			</ul>
			<p className="leading-6 my-5">What information do I collect about you?</p>
			<p className="leading-6 my-5">
				I collect information about you when you complete a form on my website.
				The information you give me may include your name, company name and
				email address.
			</p>
			<p className="leading-6 my-5">How will I use the information about you?</p>
			<p className="leading-6 my-5">
				I collect information about you to gain better understanding of how
				users are using my website to better my personal development and to give
				the best user experience that I possibly can. If I am contacted by you
				through my website, I will use the information provided to do so
				accordingly.
			</p>
			<p className="leading-6 my-5">I use your information to:</p>
			<ul>
				<li>Contact you if you have requested me to.</li>
				<li>Monitor site activity.</li>
			</ul>
			<p className="leading-6 my-5">
				If you change your mind about being contacted in the future, please let
				us know.
			</p>
			<p className="leading-6 my-5">Access to your information and corrections</p>
			<p className="leading-6 my-5">
				You have the right to request a copy of the information that I hold
				about you if you have contacted me before. If you would like a copy of
				some or all of your personal information, please email me at
				anthony@ezdev.solutions
			</p>
			<p className="leading-6 my-5">Cookies</p>
			<p className="leading-6 my-5">
				I reserve the right to use cookies to give you the best experience on my
				website and to help improve the overall user experience. A cookie is a
				small file that is placed on your computer or mobile device when you
				visit a website. You can manage or delete cookies as you wish.
			</p>
			<p className="leading-6 my-5">Other websites</p>
			<p className="leading-6 my-5">
				My website may contain links to other websites. This privacy policy only
				applies to this website, so when you link to other websites you should
				read their own privacy policies.
			</p>
			<p className="leading-6 my-5">Changes to my privacy policy</p>
			<p className="leading-6 my-5">
				I keep my privacy policy under regular review and I will place any
				updates on this web page. This privacy policy was last updated on
				16/05/2023.
			</p>
			<p className="leading-6 my-5">How to contact me</p>
			<p className="leading-6 my-5">
				Please contact me if you have any questions about my privacy policy or
				the information I hold about you.
			</p>
			<p className="leading-6 my-5">Email: anthony@ezdev.solutions</p>
		</article>
	);
};

export default PrivacyPolicy;