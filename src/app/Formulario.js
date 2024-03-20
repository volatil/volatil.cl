"use client"

import { useState, useEffect } from "react"
import { verificaEmail, imprimeScript } from "@helpers/contacto"
import images_header from "@images/header.webp";
import css from "@css/page.module.css"

export default function Formulario({ traeState }) {
	const [visibleMensajeValidez, setvisibleMensajeValidez] = useState( false );
	
	const desplegarmodal = function(){
		traeState( !true );
	}
	
	const enviar = function() {
		const data = {
			nombre: document.querySelector(".nombre").value ,
			correo: document.querySelector(".correo").value ,
			mensaje: document.querySelector(".mensaje").value ,
			todoelmensaje: () => {
				const mensaje = `
					Te envio un mensaje:<br>
					${data.nombre} (${data.correo})<br>
					MENSAJE:<br><br>
					${data.mensaje}
				`;
				return mensaje;
			},
		};

		const estadoValidez = verificaEmail( data )
		setvisibleMensajeValidez( estadoValidez )
	}
	
	
	useEffect(() => {
		imprimeScript();
	}, []);
	
	return (
		<>
			<section onClick={ desplegarmodal } className={ css.formulariofondo }></section>
			<section className={ css.formulario }>
				<span onClick={ desplegarmodal }>X</span>
				<img src={ images_header.src } alt="BIUUUUUUUUUUUM!! paso volando el avion" />
				<h2>¿Listo para comenzar un proyecto?</h2>
				<p>Si ya tienes en mente lo que quieres hacer, completa el siguiente formulario para ponernos en contacto contigo.</p>
				<div className={ css.form + " form" }>
					<div>
						<label htmlFor="nombre">Nombre</label>
						<input className="nombre" type="text" id="nombre" name="nombre" placeholder="Nombre Completo" />
					</div>
					<div>
						<label htmlFor="correo">Correo</label>
						<input className="correo" type="email" id="correo" name="correo" placeholder="micorreo@ejemplo.com" />
					</div>
					<div>
						<label htmlFor="mensaje">Mensaje</label>
						<textarea className="mensaje" id="mensaje" name="mensaje" placeholder="Diviertete explicándonos el proyecto"></textarea>
					</div>
					<button onClick={ enviar } className={ css.elboton }>Enviar mensaje</button>
					<p style={ visibleMensajeValidez ? {display: "block"} : {display:"none"} } className={ css.estadoenvio + " estadoenvio" } data-estado={ visibleMensajeValidez }>Mensaje enviado</p>
				</div>
			</section>
		</>
	)
}