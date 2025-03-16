import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import postData from "./components/Post/postData.json"

import styles from "./App.module.css";
import "./globals.css";

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{postData.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
