import { useState } from "react";
import { posts } from "../components/data.js";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      id: Date.now(),               // unique ID
      title: title.trim(),
      content: content.trim(),
      image: image.trim(),
      createdAt: new Date().toISOString(),
      upvotes: 0,
      comments: [],                // post must start with empty comments array
    };

    posts.unshift(newPost);        // add newest posts to TOP of feed
    navigate("/");                 // redirect user back to the home page
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>

      {/* REQUIRED — Title */}
      <input
        placeholder="Post Title (required)"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* OPTIONAL — Caption / Text Content */}
      <textarea
        placeholder="Write something about your travel experience... (optional)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* OPTIONAL — Image URL */}
      <input
        placeholder="Paste Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button>Create Post</button>
    </form>
  );
}
