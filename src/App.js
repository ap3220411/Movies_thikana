
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header.js/Header";
import Home from "./component/pages/home";
import Movielist from "./component/MoviesList/Movielist.js";
import MoviesDetail from "./component/moviesdetail/MoviesDetail.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
          <Route path="/movie/:id" element={<MoviesDetail />}></Route>
          {/* <Route path="/*" element={<h1>Error Page</h1>}></Route> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
