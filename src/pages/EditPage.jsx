import { useNavigate, useSearchParams } from "react-router-dom";

export default function EditPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handlerCancelBtn = (e) => {
    return navigate(`/posts/${searchParams.get("id")}`);
  };

  const handlerEditBtn = async (e) => {
    const content = document.querySelector(".content-text");
    await fetch(
      `https://crud-server-lfhl.onrender.com/posts/${searchParams.get("id")}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: searchParams.get("id"),
          content: content.value,
        }),
      }
    );

    return navigate(`/posts/${searchParams.get("id")}`);
  };

  return (
    <ul className="edit-post">
      <li className="title">
        <span className="title-content">Редактировать публикацию</span>

        <button
          className="cancel-btn"
          type={"button"}
          onClick={handlerCancelBtn}
        >
          &#x2717;
        </button>
      </li>

      <li className="edit-post content">
        <div className="user-avatar"></div>

        <textarea
          className="content-text"
          defaultValue={searchParams.get("content")}
        ></textarea>
      </li>

      <li className="edit-post reaction">
        <div className="reaction-item">Фото/видео</div>
        <div className="reaction-item">Отметить друзей</div>
        <div className="reaction-item">Чувства/действия</div>
        <div className="reaction-item">Отметить посещение</div>
        <div className="reaction-item">GIF</div>
      </li>

      <li className="footer">
        <button className="save-btn" type="button" onClick={handlerEditBtn}>
          Сохранить
        </button>
      </li>
    </ul>
  );
}
