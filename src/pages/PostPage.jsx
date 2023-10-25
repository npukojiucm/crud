import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { date } from "../handler/date";

export default function PostPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    id: "",
    content: "",
    created: "",
  });

  const handlerDeletePost = async (e) => {
    await fetch(`https://crud-server-lfhl.onrender.com/posts/${post.id}`, {
      method: "DELETE",
    });

    return navigate("/");
  };

  const handlerEditPost = () => {
    return navigate(`/posts/edit/${post.id}?id=${post.id}&created=${post.created}&content=${post.content}`)
  }

  useEffect(() => {
    async function getPost() {
      await fetch(`https://crud-server-lfhl.onrender.com/posts/${params.rId}`)
        .then((response) => response.json())
        .then((json) => setPost(json.post));
    }

    getPost();
  }, [params.rId]);

  return (
    <div className="list-item">
      <div className="item-title">
        <div className="item-photo"></div>
        <div className="item-information">
          <span className="information-name">Name</span>
          <span className="information-created">{date(post.created)}</span>
        </div>
      </div>

      <div className="item-content">{post.content}</div>

      <div className="item-reaction">
        <div className="reaction-like">Like</div>
        <div className="reaction-comment">Comment</div>
      </div>

      <div className="item-footer edit-page-footer">
        <button className="post-change-btn btn" onClick={handlerEditPost}>Изменить</button>
        <button className="post-del-btn btn" onClick={handlerDeletePost}>Удалить</button>
      </div>
    </div>
  );
}
