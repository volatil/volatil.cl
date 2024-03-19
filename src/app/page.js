import { NOMBRE, CTO, TITULO } from "@helpers/textos.js"
import Header from "./Header";
import images_bg from "@images/home.webp";
import css from "@css/page.module.css"

export default function Home() {
	return (
		<>
			<Header />
			<section className={ css.contenido }>
				<h1>Elaboramos proyectos digitales <span>&</span> móviles con estrategia y amor.</h1>
				<button className={ css.elboton }>{ CTO }</button>
			</section>
			{/* <img className={ css.fondo } src={ images_bg.src } alt={ NOMBRE } /> */}
		</>
	);
}