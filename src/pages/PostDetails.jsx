import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../components/data.js";
import CommentSection from "../components/CommentSection";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id == id);

  function upvote() {
    post.upvotes++;
    navigate(`/post/${id}`);
  }

  function deletePost() {
    const index = posts.findIndex((p) => p.id == id);
    posts.splice(index, 1);
    navigate("/");
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>

      <p className="time">
        {new Date(post.createdAt).toLocaleString()}
      </p>

      {post.image && <img className="post-img" src={post.image} />}

      <p className="content">{post.content}</p>

      <div className="post-actions">
        <button onClick={upvote}>❤️ Upvote ({post.upvotes})</button>
        <button onClick={() => navigate(`/edit/${post.id}`)}>✏️ Edit</button>
        <button className="delete" onClick={deletePost}>
          🗑️ Delete
        </button>
      </div>

      <CommentSection post={post} />
    </div>
  );
}
