import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          < Route exact path="/" element={<Login />} />
          < Route exact path="/Home.jsx" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;