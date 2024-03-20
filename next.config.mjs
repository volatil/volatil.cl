/** @type {import('next').NextConfig} */
const nextConfig = {
	// HABILITAR PARA [BUILD DEPLOY]
	output: "export",
	// DATA SENSIBLE
	env: {
		SMTPJS_HOST: "smtp.elasticemail.com" ,
		SMTPJS_USERNAME: "contacto@volatil.cl",
		SMTPJS_PASSWORD: "A3765A5200921937511BA749F4047B7C81DF" ,
	}
};

export default nextConfig;
