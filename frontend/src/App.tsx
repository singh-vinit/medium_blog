import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {localStorage.getItem("token") ? <Header icon="v" /> : null}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
