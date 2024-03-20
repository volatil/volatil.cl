/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SMTP_HOST: "smtp.elasticemail.com" ,
		SMTPJS_USERNAME: "contacto@volatil.cl",
		SMTP_PASSWORD: "A3765A5200921937511BA749F4047B7C81DF" ,
	}
};

export default nextConfig;
