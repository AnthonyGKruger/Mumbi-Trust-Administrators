import Heading from "@/components/UI/Heading";
import {
	Checkbox,
	TextInput,
	Label,
	Button,
	Textarea,
	Spinner,
	Toast,
} from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
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
		formHasError: false,
		emailSent: false,
		emailError: false,
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
		setState({ emailSent: false });
		if (event.target.name === "name") {
			setState({ nameHasError: false, formHasError: false });
			if (validateName(event.target.value)) {
				setState({ name: event.target.value });
			} else {
				setState({ nameHasError: true });
			}
		} else if (event.target.name === "email") {
			setState({ emailHasError: false, formHasError: false });
			if (validateEmail(event.target.value)) {
				setState({ email: event.target.value });
			} else {
				setState({ emailHasError: true });
			}
		} else if (event.target.name === "message") {
			setState({ messageHasError: false, formHasError: false });
			if (validateString(event.target.value)) {
				setState({ message: event.target.value });
			} else {
				setState({ messageHasError: true });
			}
		}
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (
			formState.nameHasError ||
			formState.emailHasError ||
			formState.messageHasError
		) {
			setState({ formHasError: true });
		} else {
			setState({ emailError: false, isSending: true });
			emailjs
				.sendForm(
					"mumbi_smtp_service",
					"mumbi_contact_me",
					formRef.current,
					process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN
				)
				.then(
					(result) => {
						console.log(result.text);
						setState({ emailSent: true, isSending: false });
					},
					(error) => {
						console.log(error.text);
						setState({ emailError: true, isSending: false });
					}
				);
		}
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

	const errorToastTheme = {
		root: {
			base: "flex float-right w-full max-w-sm items-center rounded-lg bg-white border-2 border-red-400 p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400 duration-300",
		},
	};

	const toastTheme = {
		root: {
			base: "flex float-right w-full max-w-sm items-center rounded-lg bg-white border-2 border-lime-400 p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400 duration-300",
		},
	};

	const checkBoxTheme = {
		root:{
			// base: `ring-amber-400 bg-lime-400 accent-lime-200 rounded`
			base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-amber-600 focus:ring-amber-400 selection:bg-lime-400 accent-lime-200"
		}
	}

	return (
		<>
			<div className="float-right w-96 sticky top-3 right-5 z-40">
				<div className="flex absolute flex-col gap-4 items-end max-w-full">
					{formState.emailHasError && (
						<Toast theme={errorToastTheme}>
							<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
								<HiExclamation className="h-5 w-5" />
							</div>
							<div className="ml-3 text-sm font-normal">
								Please ensure that you have entered a valid email address.
							</div>
							<Toast.Toggle />
						</Toast>
					)}
					{formState.nameHasError && (
						<Toast theme={errorToastTheme}>
							<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
								<HiExclamation className="h-5 w-5" />
							</div>
							<div className="ml-3 text-sm font-normal">
								Please ensure that you have entered a valid name.
							</div>
							<Toast.Toggle />
						</Toast>
					)}
					{formState.formHasError && (
						<Toast theme={errorToastTheme}>
							<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
								<HiX className="h-5 w-5" />
							</div>
							<div className="ml-3 text-sm font-normal">
								There is an issue with the values entered on the form!
							</div>
							<Toast.Toggle />
						</Toast>
					)}
					{formState.emailSent && (
						<Toast theme={toastTheme}>
							<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-500 dark:bg-lime-700 dark:text-lime-200">
								<HiCheck className="h-5 w-5" />
							</div>
							<div className="ml-3 text-sm font-normal">
								Form submitted successfully!
							</div>
							<Toast.Toggle />
						</Toast>
					)}
				</div>
			</div>

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
							// value={formState.name}
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
							// value={formState.email}
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
						// value={formState.message}
					/>

					<div className="flex items-center gap-2">
						<Checkbox
							id="agree"
							required
							// className={`focus:ring-amber-400 selection:bg-lime-400 accent-lime-200`}
							theme={checkBoxTheme}
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
