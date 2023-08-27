import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/Sidebar";
import Home from "./Components/Home"

function App() {
  return (
    <section className="container">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<h1 style={{backgroundColor: 'blue'}}>movies</h1>} />
        <Route path="/series" element={<h1 style={{backgroundColor: 'blue'}}>series</h1>} />
        <Route path="/favourite" element={<h1 style={{backgroundColor: 'blue'}}>favourite</h1>} />
        <Route path="/login" element={<h1 style={{backgroundColor: 'blue'}}>login</h1>} />
      </Routes>
    </section>
  );
  
}
export default App;
