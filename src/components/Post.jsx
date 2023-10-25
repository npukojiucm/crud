import { useNavigate } from "react-router-dom";
import { date } from "../handler/date";
export default function Post({ content, created, rId }) {
  const navigate = useNavigate();

  const handlerOnClick = (e) => {
    return navigate(`/posts/${rId}`);
  };

  return (
    <div className="list-item">
      <div className="item-title">
        <div className="item-photo"></div>
        <div className="item-information">
          <span className="information-name">Name</span>
          <span className="information-created">{date(created)}</span>
        </div>
      </div>

      <div className="item-content" onClick={handlerOnClick}>
        {content}
      </div>

      <div className="item-reaction">
        <div className="reaction-like">Like</div>
        <div className="reaction-comment">Comment</div>
      </div>

      <div className="item-footer">
        <div className="item-photo"></div>
        <input
          type="text"
          className="item-add-comment"
          placeholder="Напишите комментарий"
        />
      </div>
    </div>
  );
}
