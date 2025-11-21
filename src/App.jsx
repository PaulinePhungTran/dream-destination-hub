import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home.jsx";
import CreatePost from "./pages/Createpost.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import EditPost from "./pages/EditPost.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {

  // 🔥 Global Dark Mode Loader (runs once on app start)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}
