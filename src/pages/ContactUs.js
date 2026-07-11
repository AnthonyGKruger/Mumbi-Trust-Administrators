import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import PageHero from "@/components/UI/PageHero";

const validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const inputClasses =
	"w-full box-border rounded-[3px] border border-[#d8d2be] px-3.5 py-3 text-[15px] outline-none focus:border-brand-gold";

const ContactUs = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "", agreed: false });
	const [status, setStatus] = useState({ sending: false, sent: false, error: false, emailInvalid: false });
	const formRef = useRef();

	const onSubmit = (event) => {
		event.preventDefault();

		if (!validateEmail(form.email)) {
			setStatus((s) => ({ ...s, emailInvalid: true, sent: false }));
			return;
		}

		setStatus({ sending: true, sent: false, error: false, emailInvalid: false });

		emailjs
			.sendForm(
				"mumbi_smtp_service",
				"mumbi_contact_me",
				formRef.current,
				process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN
			)
			.then(
				() => {
					setForm({ name: "", email: "", message: "", agreed: false });
					setStatus({ sending: false, sent: true, error: false, emailInvalid: false });
				},
				() => {
					setStatus({ sending: false, sent: false, error: true, emailInvalid: false });
				}
			);
	};

	return (
		<main>
			<PageHero
				eyebrow="GET IN TOUCH"
				title="Contact Us"
				description="Tell us how we can help and we'll be in touch within one business day."
			/>

			<div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:py-24">
				<form ref={formRef} className="flex flex-col gap-5" onSubmit={onSubmit}>
					<div>
						<label htmlFor="name" className="mb-2 block text-[13px] font-bold text-brand-green">
							Your name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							placeholder="Jane Doe"
							className={inputClasses}
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
						/>
					</div>

					<div>
						<label htmlFor="email" className="mb-2 block text-[13px] font-bold text-brand-green">
							Your email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="jane@example.com"
							className={inputClasses}
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value, emailInvalid: false })}
						/>
						{status.emailInvalid && (
							<p className="mt-2 text-sm text-red-600">
								Please enter a valid email address.
							</p>
						)}
					</div>

					<div>
						<label htmlFor="message" className="mb-2 block text-[13px] font-bold text-brand-green">
							How can we assist you?
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={5}
							placeholder="Tell us a little about your situation..."
							className={`${inputClasses} resize-y`}
							value={form.message}
							onChange={(e) => setForm({ ...form, message: e.target.value })}
						/>
					</div>

					<div className="flex items-start gap-2.5">
						<input
							id="agree"
							type="checkbox"
							required
							checked={form.agreed}
							onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
							className="mt-0.5"
						/>
						<label htmlFor="agree" className="text-sm text-[#54604e]">
							I agree with the{" "}
							<Link href="/PrivacyPolicy" className="text-brand-green underline">
								privacy policy
							</Link>
							.
						</label>
					</div>

					<button
						type="submit"
						disabled={status.sending}
						className="bg-brand-green py-4 text-[15px] font-bold text-brand-cream hover:bg-brand-green-dark transition-colors disabled:opacity-60"
					>
						{status.sending ? "Sending..." : "Send Message"}
					</button>

					{status.sent && (
						<div className="rounded-[3px] border border-[#b7cf9c] bg-[#f0f6ea] px-4 py-3.5 text-sm text-[#3a5a2f]">
							Thanks — your message has been sent. We&apos;ll be in touch
							shortly.
						</div>
					)}
					{status.error && (
						<div className="rounded-[3px] border border-red-300 bg-red-50 px-4 py-3.5 text-sm text-red-700">
							Something went wrong sending your message. Please try again or
							contact us directly.
						</div>
					)}
				</form>

				<div>
					<div className="mb-5 text-[13px] font-bold tracking-[0.14em] text-brand-gold-dark">
						OUR OFFICE
					</div>
					<div className="mb-8 text-base leading-loose text-[#3a4a35]">
						70 Markotter Street
						<br />
						Centurion
						<br />
						<br />
						<a href="tel:+27814868538" className="font-semibold text-brand-green">
							+27 81 486 8538
						</a>
						<br />
						<a
							href="mailto:admin@mumbi.co.za"
							className="font-semibold text-brand-green"
						>
							admin@mumbi.co.za
						</a>
						<br />
						<br />
						Monday &ndash; Friday, 08:00 &ndash; 16:00
					</div>
					<div className="h-72 overflow-hidden rounded border border-brand-line">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.045649652699!2d28.124565999999994!3d-25.9008698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956547e5d61ea9%3A0xc59685658397e7e4!2s70%20Markotter%20St%2C%20The%20Reeds%2C%20Centurion%2C%200061!5e0!3m2!1sen!2sza!4v1684810212658!5m2!1sen!2sza"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Mumbi Trust Administrators office location"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactUs;
