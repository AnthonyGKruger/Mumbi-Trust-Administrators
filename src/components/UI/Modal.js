import { useState, useRef, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

const Modal = ({ showing }) => {
	// const [showConsent, setShowConsent] = useState(true);

	const [isShowing, setIsShowing] = useState();

	// console.log(hasCookie("localConsent"), isShowing);

	const acceptCookie = () => {
		setIsShowing(false);
		setCookie("localConsent", "true", {});
	};

	useEffect(() => {
		setIsShowing(!hasCookie("localConsent"));
	}, []);

	const wrapperRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				acceptCookie();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);

	useEffect(() => {
		let html = document.querySelector("html");

		if (html) {
			if (isShowing && html) {
				html.style.overflowY = "hidden";

				const focusableElements =
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

				const modal = document.querySelector("#modal"); // select the modal by it's id

				const firstFocusableElement =
					modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

				const focusableContent = modal.querySelectorAll(focusableElements);

				const lastFocusableElement =
					focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

				document.addEventListener("keydown", function (e) {
					if (e.keyCode === 27) {
						acceptCookie();
					}

					let isTabPressed = e.key === "Tab" || e.keyCode === 9;

					if (!isTabPressed) {
						return;
					}

					if (e.shiftKey) {
						// if shift key pressed for shift + tab combination
						if (document.activeElement === firstFocusableElement) {
							lastFocusableElement.focus(); // add focus for the last focusable element
							e.preventDefault();
						}
					} else {
						// if tab key is pressed
						if (document.activeElement === lastFocusableElement) {
							// if focused has reached to last focusable element then focus first focusable element after pressing tab
							firstFocusableElement.focus(); // add focus for the first focusable element
							e.preventDefault();
						}
					}
				});

				firstFocusableElement.focus();
			} else {
				html.style.overflowY = "visible";
			}
		}
	}, [isShowing]);

	const modalHtml = (
		<div
			className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-300/20 backdrop-blur-sm"
			aria-labelledby="header-2a content-2a"
			aria-modal="true"
			tabIndex="-1"
			role="dialog"
		>
			{/*    <!-- Modal --> */}
			<div
				className="flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded-xl bg-slate-100 p-6 text-black shadow-xl shadow-slate-700/10"
				ref={wrapperRef}
				id="modal"
				role="document"
			>
				{/*        <!-- Modal header --> */}
				<header id="header-2a" className="flex items-center gap-4">
					<h3 className="flex-1 text-xl font-medium text-amber-600">
						Cookie Notice
					</h3>
					<button
						onClick={() => acceptCookie()}
						className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-lime-600 transition duration-300 hover:bg-lime-100 hover:text-lime-600 focus:bg-lime-300 focus:text-lime-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-lime-300 disabled:shadow-none disabled:hover:bg-transparent"
						aria-label="close dialog"
					>
						<span className="relative only:-mx-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="1.5"
								role="graphics-symbol"
								aria-labelledby="title-79 desc-79"
							>
								<title id="title-79">Modal Close</title>
								<desc id="desc-79">A button used to close the dialog</desc>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</span>
					</button>
				</header>
				{/*        <!-- Modal body --> */}
				<div id="content-2a" className="flex-1 overflow-auto">
					<p>
						This website uses cookies to ensure you get the best experience on
						our website. By continuing to browse the site, you agree to our use
						of cookies. For more information, have a look at our{" "}
						<a
							href="/PrivacyPolicy"
							target="_blank"
							className="hover:underline text-amber-600 hover:text-amber-500 transition duration-300"
						>
							privacy policy.
						</a>
					</p>
				</div>
				{/*        <!-- Modal actions --> */}
				<div className="flex justify-end gap-2">
					{/*            <!-- base basic button --> */}
					<button
						onClick={() => acceptCookie()}
						className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-amber-400 px-5 text-sm font-medium tracking-wide text-black hover:text-lime-700 transition duration-300 hover:bg-amber-500 focus:bg-amber-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none"
					>
						<span>Continue</span>
					</button>
				</div>
			</div>
		</div>
	);
	if (!isShowing) {
		return null;
	}
	return <>{isShowing && modalHtml}</>;
};

export default Modal;
