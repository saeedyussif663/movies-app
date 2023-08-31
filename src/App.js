import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/Sidebar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import MobileNav from "./Components/MobileNav";
import SingleMovie from "./Components/SingleMovie";
import Trending from "./Components/Trending";
import Upcoming from "./Components/Upcoming";



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
        <Route path="/favourite" element={<h1>favourite</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/moviedetail/:id" element={<SingleMovie/>} />
      </Routes>
    </section>
  );
  
}
export default App;
