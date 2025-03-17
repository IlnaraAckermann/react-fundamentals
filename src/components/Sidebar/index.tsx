import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1740&auto=format&fit=crop&w=500&q=50"
			/>

			<div className={styles.profile}>
				<Avatar src="https://avatars.githubusercontent.com/u/86618553?v=4" />

				<strong>Ilnara Ackermann</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
