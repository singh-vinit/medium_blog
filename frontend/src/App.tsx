import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";
import Header from "./components/Header";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function login() {
    setIsAuthenticated(true);
  }
  function logout() {
    setIsAuthenticated(false);
  }
  const user = localStorage.getItem("user");

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <BrowserRouter>
        {localStorage.getItem("token") ? (
          <Header icon={user ? user[0] : ""} />
        ) : null}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
