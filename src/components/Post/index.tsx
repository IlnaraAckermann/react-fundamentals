import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Comment {
	id: number;
	content: string;
	applauses?: number;
	author?: string;
	imageURL: string;
	publishedAt: Date;
}

const intialComments: Comment[] = [
	{
		content: "Muito bom!",
		id: 1,
		imageURL: `https://placehold.co/200x200/${Math.floor(
			Math.random() * 16777215
		).toString(16)}/FFF`,
		author: "Ilustre Visitante 1",
		publishedAt: new Date(new Date().getTime() - 1200000),
		applauses: 12,
	},
	{
		content: "Amei!",
		id: 2,
		imageURL: `https://placehold.co/200x200/${Math.floor(
			Math.random() * 16777215
		).toString(16)}/FFF`,
		author: "Ilustre Visitante 2",
		publishedAt: new Date(new Date().getTime() - 3600000),
		applauses: 12,
	},
];

interface Author {
	name: string;
	avatar: string;
	role: string;
}

interface ContentItem {
	type: "paragraph" | "link" | "title";
	content: string;
	url?: string;
	id: number;
}

export interface PostProps {
	author: Author;
	content: ContentItem[];
	publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
	const [comments, setComments] = useState(intialComments);
	const [newCommentText, setNewCommentText] = useState("");
	const { name, avatar, role } = author;
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const contentMap = {
		paragraph: (item: ContentItem) => (
			<p key={item.id}>{item.content}</p>
		),
		link: (item: ContentItem) => (
			<p key={item.id}>
				<a href={item.url}>{item.content}</a>
			</p>
		),
		title: (item: ContentItem) => (
			<h1 key={item.id}>{item.content}</h1>
		),
		default: (item: ContentItem) => (
			<span key={item.id}>{item.content}</span>
		),
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const newComment = {
			content: newCommentText,
			id: Math.floor(Math.random() * 1000),
			imageURL: `https://placehold.co/200x200/${Math.floor(
				Math.random() * 16777215
			).toString(16)}/FFF`,
			publishedAt: new Date(),
		};
		setComments([...comments, newComment]);
		setNewCommentText("");
	};

	const handleDelete = (id: number) => {
		setComments(comments.filter((comment) => comment.id !== id));
	};
	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}
	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("Esse campo é obrigatório!");
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

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((item) => {
					const Component = contentMap[item.type] ?? contentMap.default;
					return Component(item); ;
				})}
			</div>

			<form
				className={styles.commentForm}
				onSubmit={handleSubmit}
			>
				<strong>Deixe seu feedback</strong>

				<textarea
					placeholder="Deixe um comentário"
					name="comment"
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					value={newCommentText}
					required
				/>

				<footer>
					<button
						type="submit"
						disabled={isEmptyComment}
					>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments &&
					comments.map((comment) => (
						<Comment
							key={comment.id}
							{...comment}
							onDeleteComment={handleDelete}
						/>
					))}
			</div>
		</article>
	);
}
