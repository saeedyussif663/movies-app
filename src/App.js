import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/Sidebar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import MobileNav from "./Components/MobileNav";



function App() {

  return (
    <section className="container">
      <Menu/>
      <SideBar />
      <MobileNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<h1>movies</h1>} />
        <Route path="/series" element={<h1>series</h1>} />
        <Route path="/favourite" element={<h1>favourite</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </section>
  );
  
}
export default App;
