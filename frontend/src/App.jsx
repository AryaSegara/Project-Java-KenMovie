import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutUs from "./screens/AboutUs";
import MoviePage from "./screens/Movie";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import SingleMovie from "./screens/SingleMovie";
import MovieList from "./dashboard/Admin/MovieList";
import Dashboard from "./dashboard/Admin/Dashboard";
import Categories from "./dashboard/Admin/Categories";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />

    </Routes>

    </>
  );
}

export default App;
