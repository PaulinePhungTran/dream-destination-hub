import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Hide ONLY the search bar — NOT the whole Navbar
  const hideSearch = location.pathname === "/create" || location.pathname.startsWith("/post/");

  useEffect(() => {
    const saved = localStorage.getItem("searchQuery") || "";
    setSearch(saved);
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <header className="navbar">
      <h1 className="logo">Dream Destination Hub</h1>

      {!hideSearch && (
        <input
          className="searchBar"
          placeholder="Search posts..."
          value={search}
          onChange={handleSearch}
        />
      )}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
}
