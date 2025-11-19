import { useState, useEffect } from "react";
import { posts } from "../components/data.js";
import PostCard from "../components/PostCard";
import bannerImg from "../assets/banner.jpg";

export default function Home() {
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // Listen for changes from Navbar
  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery") || "";
    setSearchQuery(savedQuery);

    function syncSearch() {
      const latest = localStorage.getItem("searchQuery") || "";
      setSearchQuery(latest);
    }

    window.addEventListener("storage", syncSearch);
    return () => window.removeEventListener("storage", syncSearch);
  }, []);

  let filtered = posts
    .filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return b.upvotes - a.upvotes;
      }
    });

  return (
    <div className="home">
      {/* BANNER */}
      <section
        className="hero dreamdestination-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay"></div>

      </section>

      {/* SORT BUTTONS */}
      <div className="sort-buttons">
        <button onClick={() => setSortBy("newest")}>Newest</button>
        <button onClick={() => setSortBy("popular")}>Most Popular</button>
      </div>

      {/* FEED */}
      <div className="feed">
        {filtered.length === 0 ? (
          <p className="empty">No posts yet...</p>
        ) : (
          filtered.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
