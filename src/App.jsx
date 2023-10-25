import NewPostPage from "./pages/NewPostPage.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage.jsx";


function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts">
          <Route path="new" element={<NewPostPage />} />
          <Route path=":rId" element={<PostPage />} />
          <Route path="edit/:rId" element={<EditPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
