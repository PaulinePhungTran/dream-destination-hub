import { useState } from "react";

export default function CommentSection({ post }) {
  const [comment, setComment] = useState("");

  function addComment() {
    if (!comment.trim()) return;
    post.comments.push(comment);
    setComment("");
  }

  return (
    <div className="comment-box">
      <h3>Comments</h3>
      {post.comments.map((c, i) => (
        <p key={i} className="comment">
          - {c}
        </p>
      ))}

      <input
        placeholder="Leave a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Post Comment</button>
    </div>
  );
}
