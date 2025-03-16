import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
const intialComments = [{
	content: 'Muito bom!',
	id: 1,
	imageURL: `https://placehold.co/200x200/${Math.floor(Math.random() * 16777215).toString(16)}/FFF`,
	author: 'Ilustre Visitante 1',
	publishedAt: new Date(new Date().getTime() - 1200000),
	applauses: 12,
},
{
	content: 'Amei!',
	id: 2,
	imageURL: `https://placehold.co/200x200/${Math.floor(Math.random() * 16777215).toString(16)}/FFF`,
	author: 'Ilustre Visitante 2',
	publishedAt: new Date(new Date().getTime() - 3600000),
	applauses: 12,
}
]

export function Post({ author, content, publishedAt }) {
	const [comments, setComments] = useState(intialComments);
	const [newCommentText, setNewCommentText] = useState('');
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
	const handleSubmit = (event) => {
		event.preventDefault();
		const newComment = {
			content: newCommentText,
			id: comments.length + 1,
			imageURL: `https://placehold.co/200x200/${Math.floor(Math.random() * 16777215).toString(16)}/FFF`,
			publishedAt: new Date(),
		}
		setComments([...comments, newComment]);
		setNewCommentText('');
	}

	const handleDelete = (id) => {
		setComments(comments.filter(comment => comment.id !== id));
	}
	function handleNewCommentChange(event) {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}
	function handleNewCommentInvalid(event) {
		event.target.setCustomValidity('Esse campo é obrigatório!');
	}
	const isEmptyComment = !newCommentText.trim();

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

			<form className={styles.commentForm} onSubmit={handleSubmit}>
				<strong>Deixe seu feedback</strong>

				<textarea
					placeholder="Deixe um comentário"
					name='comment'
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" disabled={isEmptyComment}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments && comments.map((comment) => (
					<Comment key={comment.id} {...comment} onDeleteComment={handleDelete} 
					/>
				))}
			</div>

		</article>
	)
}