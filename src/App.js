import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
