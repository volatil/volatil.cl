import { NOMBRE, CTO } from "@helpers/textos.js"
import css from "@css/page.module.css"
import image_logo from "@images/logo.webp"

export default function Header() {
	return (
		<header className={ css.header }>
			<img src={ image_logo.src } alt={ NOMBRE } />
			<button className={ css.elboton }>{ CTO }</button>
		</header>
	)
}