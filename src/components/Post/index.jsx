import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://avatars.githubusercontent.com/u/86618553?v=4" />
					<div className={styles.authorInfo}>
						<strong>Ilnara Ackermann</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>Lorem, ipsum dolor. 👋</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptas qui natus autem laudantium alias molestias pariatur libero asperiores. Deserunt ea odio nemo quo. Aperiam placeat id dolorem magni. Voluptatibus! 🚀</p>
				<p><a href="">lorem.ipsum/dolor</a></p>
				<p>
					<a href="">#novoprojeto</a>{' '}
					<a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					placeholder="Deixe um comentário"
				/>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>

		</article>
	)
}