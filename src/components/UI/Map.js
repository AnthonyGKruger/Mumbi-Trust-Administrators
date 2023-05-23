import Heading from "@/components/UI/Heading";

const Map = () => {
	return (
		<>
			<Heading content="Our Office Location:" />
      <div className={`h-96 mx-5 my-14 xl:mx-96 lg:mx-52 md:mx-16 shadow`}>
        <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.045649652699!2d28.124565999999994!3d-25.9008698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956547e5d61ea9%3A0xc59685658397e7e4!2s70%20Markotter%20St%2C%20The%20Reeds%2C%20Centurion%2C%200061!5e0!3m2!1sen!2sza!4v1684810212658!5m2!1sen!2sza"
				width="100%"
				height="100%"
				style={{border:"0"}}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
      </div>
			
		</>
	);
};

export default Map;
