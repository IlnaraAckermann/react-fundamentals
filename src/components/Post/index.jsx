export const Post = ({ author, content }) => {
	return (
		<div>
			<strong>{author.name}</strong>
			<p>{content}</p>
		</div>
	);
};
