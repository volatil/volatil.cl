import { Inter } from "next/font/google";
import "@css/globals.css";
import css from "@css/page.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Volatil | Agencia Digital",
	description: "Agencia Digital",
	icons: {
		icon: "/assets/images/favicon.webp",
		shortcut: "/assets/images/favicon.webp",
		apple: "/assets/images/favicon.webp",
		other: {
			rel: "/assets/images/favicon.webp",
			url: "/assets/images/favicon.webp",
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ inter.className + " " + css.body }>{children}</body>
		</html>
	);
}
