import { useNavigate } from "react-router-dom";

export default function NewPostPage() {
  const navigate = useNavigate();

  const handlerOnClickCancel = (e) => {
    return navigate("/");
  };

  const handlerOnClickAddPost = async (e) => {
    e.preventDefault();

    const text = document.querySelector(".new-post-content");

    const response = await fetch(
      "https://crud-server-lfhl.onrender.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          content: text.value,
        }),
      }
    );

    if (response.status === 204) {
      return navigate("/");
    }
  };

  return (
    <form className="new-post-form">
      <div className="new-post-header">
        <div className="header-item">Публикация</div>
        <div className="header-item">Фото/видео</div>
        <div className="header-item">Прямой эфир</div>
        <div className="header-item">Ещё</div>
        <button
          className="new-post-cancle-btn"
          type={"button"}
          onClick={handlerOnClickCancel}
        >
          &#x2717;
        </button>
      </div>

      <textarea
        name="new-post-content"
        className="new-post-content"
        placeholder="Введите ваш комментарий..."
      />

      <div className="new-post-footer">
        <button className="new-post-add-btn" onClick={handlerOnClickAddPost}>
          Опубликовать
        </button>
      </div>
    </form>
  );
}
