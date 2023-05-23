import Heading from "@/components/UI/Heading";
import { Checkbox, TextInput, Label, Button, Textarea } from "flowbite-react";

const ContactUs = () => {
	return (
		<>
			<Heading content="Contact Us" />
			<div className="mx-5 my-14 xl:mx-96 lg:mx-52 md:mx-16">
				<form className="flex flex-col gap-4">
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Your name:" />
						</div>
						<TextInput id="name" type="text" required={true} shadow={true} />
					</div>

					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Your email:" />
						</div>
						<TextInput id="email" type="email" required={true} shadow={true} />
					</div>

					<div className="mb-2 block">
						<Label htmlFor="comment" value="Let us know how we can assist you:" />
					</div>
					<Textarea
						id="comment"
						placeholder="Leave a comment..."
						required={true}
						rows={4}
					/>

					<div className="flex items-center gap-2">
						<Checkbox id="agree" required/>
						<Label htmlFor="agree">
							I agree with the{" "}
							<a
								href="/PrivacyPolicy"
								className="text-amber-600 hover:underline dark:text-blue-500"
							>
								privacy policy.
							</a>
						</Label>
					</div>

					<Button className="bg-lime-400 hover:bg-lime-600 text-amber-800 hover:text-amber-400" type="submit">Register new account</Button>
				</form>
			</div>
		</>
	);
};

export default ContactUs;
