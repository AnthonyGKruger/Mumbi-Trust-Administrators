import { useRouter } from "next/router";

const Heading = ({ content }) => {
	const { asPath } = useRouter();

	return (
		<div className={`w-100 lg:mt-22 sm:mt-20 mt-14`}>
		{/* <div className={`w-100 ${asPath === "/" ? "lg:mt-28 sm:mt-20 mt-14" : ""}`}> */}
			<p className={`text-lime-700 text-3xl lg:text-5xl text-center `}>
				{content}
			</p>
			<hr className="opacity-50 w-24 lg:w-44 border-b border-2 border-amber-200 mx-auto mt-4 md:mt-4 lg:mt-8"></hr>
		</div>
	);
};

export default Heading;
