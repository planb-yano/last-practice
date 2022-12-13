import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/post/:postId'} element={<PostDetail />} />
        <Route path={'/post/create'} element={<CreatePost />} />
        <Route path={'/post/:postId/edit'} element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
