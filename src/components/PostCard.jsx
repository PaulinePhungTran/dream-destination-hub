// src/components/PostCard.jsx
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  // Safe date text
  const createdAtText = post.createdAt
    ? new Date(post.createdAt).toLocaleString()
    : "";

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      {/* top row: time + upvotes */}
      <div className="post-meta">
        <span className="time">Posted: {createdAtText}</span>
        <span className="upvotes">{post.upvotes} upvotes</span>
      </div>

      {/* 🔮 GLOW IMAGE CARD */}
      {post.image && (
        <div className="post-image-card">
          <div className="post-image-inner">
            <img
              src={post.image}
              alt={post.title}
              className="post-image"
            />
          </div>
        </div>
      )}

      {/* title + content preview */}
      <h2 className="post-title">{post.title}</h2>

      {post.content && (
        <p className="post-preview">
          {post.content.length > 120
            ? post.content.slice(0, 120) + "..."
            : post.content}
        </p>
      )}
    </Link>
  );
}
