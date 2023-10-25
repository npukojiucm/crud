import { useEffect, useState } from "react";
import Post from "./Post.jsx";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      await fetch("https://crud-server-lfhl.onrender.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts([...json]));
    }

    getPosts();
  }, []);

  const postsList = posts.map((post) => {
    return (
      <Post
        key={post.id}
        content={post.content}
        created={post.created}
        rId={post.id}
      />
    );
  });

  return <div className="posts-list">{postsList}</div>;
}
