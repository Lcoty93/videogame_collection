import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import VideogameInfo from "./pages/VideogameInfo";
import EditVideogame from "./pages/EditVideogame";
import DeleteVideogame from "./pages/DeleteVideogame";
import CreateVideogame from "./pages/CreateVideogame";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter> 
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateVideogame />} />
          <Route path="/edit/:id" element={<EditVideogame />} />
          <Route path="/games/:id" element={<VideogameInfo />} />
          <Route path="/delete/:id" element={<DeleteVideogame />} />
          <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
