import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../components/data.js";


export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id == id);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(post.image);

  function handleEdit(e) {
    e.preventDefault();

    post.title = title;
    post.content = content;
    post.image = image;

    navigate(`/post/${id}`);
  }

  return (
    <form className="form" onSubmit={handleEdit}>
      <h2>Edit Post</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <input value={image} onChange={(e) => setImage(e.target.value)} />

      <button>Update Post</button>
    </form>
  );
}
