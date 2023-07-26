import "./App.css"
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import Teachers from "./pages/Teachers.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./pages/UserDetails.jsx";

function App() {



  return (
    <BrowserRouter>
      <Routes>
        < Route exact path="/" element={<Login />} />
        < Route exact path="/Home.jsx" element={<Home />} />
        < Route exact path="/Students.jsx" element={<Students />} />
        < Route exact path="/Teachers.jsx" element={<Teachers />} />
        < Route exact path="/DetailsUser.jsx" element={<UserDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;