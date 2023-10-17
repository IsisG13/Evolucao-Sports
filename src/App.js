import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./menu/Home";
import Sobre from "./menu/Sobre";
import Erro from "./menu/404";
import Calcular from "./menu/Calcular";
import Contato from "./menu/Contato";
import Galeria from "./menu/Galeria";
import Horarios from "./menu/Horarios";
import Blog from "./menu/NossoBlog";
import BlogDetails from "./menu/BlogDetails";
import Time from "./menu/NossoTime";
import Servicos from "./menu/Servicos";
import Details from "./menu/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Sobre />} path="/Sobre" />
        <Route element={<Erro />} path="/404" />
        <Route element={<Calcular />} path="/Calcular" />
        <Route element={<Contato />} path="/Contato" />
        <Route element={<Details />} path="/Details" />
        <Route element={<Galeria />} path="/Galeria" />
        <Route element={<Horarios />} path="/Horarios" />
        <Route element={<Blog />} path="/NossoBlog" />
        <Route element={<BlogDetails />} path="/BlogDetails" />
        <Route element={<Time />} path="/NossoTime" />
        <Route element={<Servicos />} path="/Servicos" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
