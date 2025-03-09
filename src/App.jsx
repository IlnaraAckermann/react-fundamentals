import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./globals.css";

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Ilnara Ackermann"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<Post
						author="Ilnara Ackermann"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</main>
			</div>
		</div>
	);
}

export default App;
