import images_header from "@images/header.webp";
import css from "@css/page.module.css"

export default function Formulario() {
	return (
		<section className={ css.formulario }>
			<span>X</span>
			<img src={ images_header.src } alt="BIUUUUUUUUUUUM!! paso volando el avion" />
			<h2>¿Listo para comenzar un proyecto?</h2>
			<p>Si ya tienes en mente lo que quieres hacer, completa el siguiente formulario para ponernos en contacto contigo.</p>
			<form>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" />
				</div>
				<div>
					<label htmlFor="correo">Correo</label>
					<input type="email" id="correo" name="correo" placeholder="micorreo@ejemplo.com" />
				</div>
				<div>
					<label htmlFor="mensaje">Mensaje</label>
					<textarea id="mensaje" name="mensaje" placeholder="Diviertete explicándonos el proyecto"></textarea>
				</div>
				<button className={ css.elboton }>Enviar mensaje</button>
			</form>
		</section>
	)
}