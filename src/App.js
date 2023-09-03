import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/Sidebar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import MobileNav from "./Components/MobileNav";
import SingleMovie from "./Components/SingleMovie";
import Trending from "./Components/Trending";
import Upcoming from "./Components/Upcoming";
import Favourite from "./Components/Favourite";
import Login from "./Components/Login";
import SearchMovie from "./Components/SearchMovie"



function App() {

  return (
    <section className="container">
      <Menu/>
      <SideBar />
      <MobileNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upcoming" element={<Upcoming/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/moviedetail/:id" element={<SingleMovie/>} />
        <Route path="/search/:searchTerm" element={<SearchMovie/>} />
      </Routes>
    </section>
  );
  
}
export default App;
