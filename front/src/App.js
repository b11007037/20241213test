import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser.js";
import DeleteUser from "./pages/DeleteUser.js";
import ViewUser from "./pages/ViewUser.js";

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="add" element={<AddUser/>}/>
          <Route path="delet/:id" element={<DeleteUser/>}/>
          <Route path="view" element={<ViewUser/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
