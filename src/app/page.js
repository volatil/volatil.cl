"use client"

import { useState } from "react";
import { CTO } from "@helpers/textos.js"
import Header from "./Header";
import Formulario from "./Formulario";
import css from "@css/page.module.css"

export default function Home() {
	const [isModalDesplegado, setisModalDesplegado] = useState( true );
	
	return (
		<>
			<Header />
			<section className={ css.contenido }>
				<h1>Elaboramos proyectos digitales <span>&</span> móviles con estrategia y amor.</h1>
				<button className={ css.elboton }>{ CTO }</button>
			</section>
			{ isModalDesplegado ? <Formulario /> : null }
		</>
	);
}