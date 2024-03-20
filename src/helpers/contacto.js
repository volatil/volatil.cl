const SMTPJS_HOST = process.env.SMTPJS_HOST;
const SMTPJS_USERNAME = process.env.SMTPJS_USERNAME;
const SMTPJS_PASSWORD = process.env.SMTPJS_PASSWORD;

export function verificaEmail(data) {

	if ( data.nombre.length <= 2 ) {
		document.querySelector(".nombre").setAttribute("data-validez", "false");
	} else {
		document.querySelector(".nombre").setAttribute("data-validez", "true");
	}
	
	if ( data.correo.length >= 2 && data.correo.includes("@") && data.correo.includes(".") ) {
		document.querySelector(".correo").setAttribute("data-validez", "true");
	} else {
		document.querySelector(".correo").setAttribute("data-validez", "false");
	}
	
	if ( data.mensaje.length <= 5 ) {
		document.querySelector(".mensaje").setAttribute("data-validez", "false");
	} else {
		document.querySelector(".mensaje").setAttribute("data-validez", "true");
	}
	
	const esValido = !document.querySelector(".form").innerHTML.includes('data-validez="false"');
	let estado = "";
	if ( esValido ) {
		Email.send({
			Host: SMTPJS_HOST,
			Username: SMTPJS_USERNAME,
			Password: SMTPJS_PASSWORD,
			From: "contacto@volatil.cl", // de
			To: "contacto@volatil.cl", // para
			Subject: `Formulario de contacto desde ${location.href}`,
			Body: data.todoelmensaje(),
		});

		console.debug( "Enviando ..." , data );
		document.querySelector(".nombre").value = "";
		document.querySelector(".correo").value = "";
		document.querySelector(".mensaje").value = "";
		document.querySelector(".estadoenvio").style.display = "block";
		
		setTimeout(() => {
			document.querySelector(".estadoenvio").style.display = "none";
		}, 6000);
		
		estado = true;
	} else {
		console.debug("Fallo el envio" , data );
		estado = false;
	}

	return estado;
}
export const imprimeScript = function() {
	const script = document.createElement('script');
		
	script.src = "https://smtpjs.com/v3/smtp.js";
	script.async = true;
	
	document.body.appendChild(script);
	
	return () => {
		document.body.removeChild(script);
	}
}