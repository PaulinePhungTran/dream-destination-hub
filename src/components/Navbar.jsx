import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Hide ONLY the search bar — NOT the whole navbar
  const hideSearch =
    location.pathname === "/create" ||
    location.pathname.startsWith("/post/");

  // Load saved settings
  useEffect(() => {
    // Load saved search
    const saved = localStorage.getItem("searchQuery") || "";
    setSearch(saved);

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.body.classList.toggle("dark-mode", savedTheme);
  }, []);

  // Update search bar
  function handleSearch(e) {
    setSearch(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
    window.dispatchEvent(new Event("storage"));
  }

  // 🌙 Toggle dark mode
  function toggleDarkMode() {
    const newValue = !darkMode;
    setDarkMode(newValue);

    // Apply to page
    document.body.classList.toggle("dark-mode", newValue);

    // Save to localStorage
    localStorage.setItem("theme", newValue ? "dark" : "light");
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

        {/* 🌙 / ☀️ Toggle Button */}
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
