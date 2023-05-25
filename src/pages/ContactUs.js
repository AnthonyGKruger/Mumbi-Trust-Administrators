import Heading from "@/components/UI/Heading";
import {
	Checkbox,
	TextInput,
	Label,
	Button,
	Textarea,
	Spinner,
} from "flowbite-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "@/styles/ContactMe.module.css";

const ContactUs = () => {
	const [formState, setFormState] = useState({
		isSending: false,
		name: "",
		email: "",
		message: "",
		nameHasError: false,
		emailHasError: false,
		messageHasError: false,
	});

	const formRef = useRef();

	const setState = (stateValue) => {
		setFormState((prevState) => {
			return { ...prevState, ...stateValue };
		});
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validateName = (str) => {
		const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
		return nameRegex.test(str);
	};

	const validateString = (str) => {
		let regex = /^[a-zA-Z0-9,''""!?&@\s]+$/;
		return regex.test(str);
	};

	const changeHandler = (event) => {
		console.log(event);

		if (event.target.name === "name") {
			setState({ nameHasError: false });
			if (validateName(event.target.value)) {
				setState({ name: event.target.value });
			} else {
				setState({ nameHasError: true });
			}
		} else if (event.target.name === "email") {
			setState({ emailHasError: false });

			if (validateEmail(event.target.value)) {
				setState({ email: event.target.value });
			} else {
				setTimeout(() => {
					setState({ emailHasError: true });
				}, 3000);
			}
		} else if (event.target.name === "message") {
			setState({ messageHasError: false });
			if (validateString(event.target.value)) {
				setState({ message: event.target.value });
			} else {
				setState({ messageHasError: true });
			}
		}

		console.log(formState);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		setFormState((prevState) => {
			return { ...prevState, isSending: true };
		});

		// emailjs
		// 	.sendForm(
		// 		"mumbi_smtp_service",
		// 		"mumbi_contact_me",
		// 		formRef.current,
		// 		process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);
	};

	const inputClasses = `${classes.input} focus:ring-lime-400 focus-within:bg-amber-50 focus-visible:border-transparent focus:outline-lime-400`;
	const errorInputClasses = `${classes.input} focus:ring-red-400 focus-within:bg-red-50 focus-visible:border-transparent focus:outline-red-400`;

	const textInputTheme = {
		field: {
			input: {
				base: "focus:border-lime-400 focus:ring-lime-400 focus-within:bg-amber-50 rounded-lg shadow-sm p-2.5 text-sm outline-transparent block w-full border",
			},
		},
	};

	const errorTextInputTheme = {
		field: {
			input: {
				base: "border-red-400 focus:border-red-400 focus:ring-red-400 bg-red-50 rounded-lg shadow-sm p-2.5 text-sm outline-transparent block w-full border",
			},
		},
	};

	return (
		<>
			<Heading content="Contact Us" />
			<div className="mx-5 my-14 xl:mx-96 lg:mx-52 md:mx-16">
				<form
					ref={formRef}
					className="flex flex-col gap-4"
					onSubmit={onSubmitHandler}
				>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Your name:" />
						</div>
						<TextInput
							id="name"
							name="name"
							type="text"
							required={true}
							shadow={true}
							theme={
								formState.nameHasError ? errorTextInputTheme : textInputTheme
							}
							onChange={changeHandler}
						/>
					</div>

					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Your email:" />
						</div>
						<TextInput
							id="email"
							name="email"
							type="email"
							required={true}
							shadow={true}
							theme={
								formState.emailHasError ? errorTextInputTheme : textInputTheme
							}
							onChange={changeHandler}
						/>
					</div>

					<div className="mb-2 block">
						<Label
							htmlFor="comment"
							value="Let us know how we can assist you:"
						/>
					</div>
					<Textarea
						id="message"
						name="message"
						placeholder="Leave a comment..."
						required={true}
						rows={4}
						className={
							formState.messageHasError ? errorInputClasses : inputClasses
						}
						onChange={changeHandler}
					/>

					<div className="flex items-center gap-2">
						<Checkbox
							id="agree"
							required
							className={`focus:ring-amber-400 selection:bg-lime-400`}
						/>
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
					{formState.isSending && (
						<div className="text-center">
							<Spinner
								aria-label="Spinner button example"
								color="warning"
								size="xl"
							/>
						</div>
					)}
					{!formState.isSending && (
						<Button
							className="bg-lime-400 hover:bg-lime-600 text-amber-800 hover:text-amber-400 w-3/5 mx-auto"
							type="submit"
						>
							Send
						</Button>
					)}
				</form>
			</div>
		</>
	);
};

export default ContactUs;
