import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

interface CommentProps {
	id: number;
	content: string;
	applauses?: number;
	author?: string;
	imageURL: string;
	publishedAt: Date;
	onDeleteComment: (id: number) => void;
}

export function Comment({
	id,
	content,
	applauses,
	author,
	imageURL,
	publishedAt,
	onDeleteComment,
}: CommentProps) {
	const [applauseCount, setapplauseCount] = useState(applauses ?? 0);
	const [isApplauded, setIsApplauded] = useState(false);
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

	const handleapplause = () => {
		if (isApplauded) {
			setapplauseCount(applauseCount - 1);
		} else {
			setapplauseCount(applauseCount + 1);
		}

		setIsApplauded(!isApplauded);
	};

	const handleDelete = () => {
		onDeleteComment(id);
	};
	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src={imageURL}
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{author ?? "Visitante"}</strong>
							<time
								title={publishedDateFormatted}
								dateTime={publishedAt.toISOString()}
							>
								{publishedDateRelativeToNow}
							</time>
						</div>

						<button
							title="Deletar comentário"
							onClick={handleDelete}
						>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button
						onClick={handleapplause}
						className={isApplauded ? styles.applauded : ""}
					>
						<ThumbsUp />
						Aplaudir <span>{applauseCount ?? 0}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
