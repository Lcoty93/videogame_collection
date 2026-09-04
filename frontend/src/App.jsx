import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import VideogameInfo from "./pages/VideogameInfo";
import EditVideogame from "./pages/EditVideogame";
import DeleteVideogame from "./pages/DeleteVideogame";
import CreateVideogame from "./pages/CreateVideogame";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SuggestionForm from "./pages/SuggestionForm";
import AdminSuggestions from "./pages/AdminSuggestions";

function App() {
  return (
    <BrowserRouter> 
      <Navbar />

      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateVideogame />} />
          <Route path="/edit/:id" element={<EditVideogame />} />
          <Route path="/games/:id" element={<VideogameInfo />} />
          <Route path="/delete/:id" element={<DeleteVideogame />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/suggestion" element={<SuggestionForm />} />
          <Route path="/adminsuggestion" element={<AdminSuggestions />} />
          <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
