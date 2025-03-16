import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, content, publishedAt }) {
	const { name, avatar, role } = author;
	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	});

	const contentMap = {
		paragraph: (item, index) => <p key={index}>{item.content}</p>,
		link: (item, index) => (
			<p key={index}>
				<a href={item.url}>{item.content}</a>
			</p>
		),
		title: (item, index) => <h1 key={index}>{item.content}</h1>,
		default: (item, index) => <span key={index}>{item.content}</span>,
	};

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={avatar} />
					<div className={styles.authorInfo}>
						<strong>{name}</strong>
						<span>{role}</span>
					</div>
				</div>

				<time title={publishedDateFormatted} dateTime={publishedAt}>{publishedDateRelativeToNow}</time>
			</header>

			<div className={styles.content}>
				{content.map((item, index) => {
					const Component = contentMap[item.type] ?? contentMap.default
					return Component(item, index);
				}
				)}
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