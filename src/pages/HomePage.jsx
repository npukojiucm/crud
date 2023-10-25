import { Link } from "react-router-dom";
import PostsList from "../components/PostsList.jsx";

export default function HomePage() {
  return (
    <>
      <nav className="nav">
        <Link to="posts/new" className="nav-item btn">
          Создать пост
        </Link>
      </nav>

      <PostsList />
    </>
  );
}
