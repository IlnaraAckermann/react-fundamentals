import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import postData from "./components/Post/postData.json";

import styles from "./App.module.css";
import "./globals.css";
import { Post, PostProps } from "./components/Post";

interface PostData extends PostProps {
	id: number;
}

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{(postData as unknown as PostData[]).map((post) => (
						<Post
							key={post.id}
							{...post}
							publishedAt={new Date(post.publishedAt)}
						/>
					))}
				</main>
			</div>
		</div>
	);
}
