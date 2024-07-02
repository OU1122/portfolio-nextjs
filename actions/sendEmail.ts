"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}
	return true;
};
export const sendEmail = async (formData: FormData) => {
	const message = formData.get("message");
	const email = formData.get("email");

	if (!validateString(email, 500)) {
		return {
			error: "invalid email",
		};
	}

	if (!validateString(message, 2000)) {
		return {
			error: "invalid message",
		};
	}

	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "eliquinoxltd@gmail.com",
			reply_to: email as string,
			subject: "new email from portfolio website",
			text: message as string,
		});
	} catch (error) {
		if (error) {
			console.log(error);
		} else {
			console.log("nevim us");
		}
	}
};
