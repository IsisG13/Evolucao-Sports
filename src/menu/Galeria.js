import "../App.css";
import Logo from "../img/logo.png";
import React, { useEffect } from "react";

import Breadcrumb from "../img/breadcrumb-bg.jpg";

import Galeria1 from "../img/gallery/gallery-1.png";
import Galeria2 from "../img/gallery/gallery-2.jpg";
import Galeria3 from "../img/gallery/gallery-3.png";
import Galeria4 from "../img/gallery/gallery-4.jpg";
import Galeria5 from "../img/gallery/gallery-5.png";
import Galeria6 from "../img/gallery/gallery-6.png";
import Galeria7 from "../img/gallery/gallery-7.jpg";
import Galeria8 from "../img/gallery/gallery-8.jpg";
import Galeria9 from "../img/gallery/gallery-9.jpg";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";

function Galeria() {
  useEffect(() => {
    $(".canvas-open").on("click", function () {
      $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
  }, []);
  return (
    <div className="App">
      <Cabecalho />

      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="Logotipo da academia" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/Sobre">Sobre Nós</Link>
                  </li>
                  <li>
                    <Link to="/Details">Aulas</Link>
                  </li>
                  <li>
                    <Link to="/Servicos">Servicos</Link>
                  </li>
                  <li>
                    <Link to="/NossoTime">Nosso Time</Link>
                  </li>
                  <li className="active">
                    <a href="/Galeria">Paginas</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/Sobre">Sobre Nós</Link>
                      </li>
                      <li>
                        <Link to="/Horarios">Horarios</Link>
                      </li>
                      <li>
                        <Link to="/NossoTime">Nosso Time</Link>
                      </li>
                      <li>
                        <Link to="/Galeria">Galeria</Link>
                      </li>
                      <li>
                        <Link to="/NossoBlog">Nosso Blog</Link>
                      </li>
                      <li>
                        <Link to="/404">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Contato">Contato</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/evolucao.sports_/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* Header End  */}

      {/* Breadcrumb Section Begin  */}
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url(${Breadcrumb})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Galeria</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <Link to="/Galeria">Paginas</Link>
                  <span>Galeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Gallery Section Begin  */}
      <div className="gallery-section gallery-page">
        <div className="gallery">
          <div className="grid-sizer"></div>
          <div
            className="gs-item grid-wide set-bg"
            style={{ backgroundImage: `url(${Galeria1})` }}
          >
            <a href={Galeria1} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>

          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria2})` }}
          >
            <a href={Galeria2} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria3})` }}
          >
            <a href={Galeria3} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria4})` }}
          >
            <a href={Galeria4} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria5})` }}
          >
            <a href={Galeria5} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item grid-wide set-bg"
            style={{ backgroundImage: `url(${Galeria6})` }}
          >
            <a href={Galeria6} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item grid-wide set-bg"
            style={{ backgroundImage: `url(${Galeria7})` }}
          >
            <a href={Galeria7} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria8})` }}
          >
            <a href={Galeria8} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
          <div
            className="gs-item set-bg"
            style={{ backgroundImage: `url(${Galeria9})` }}
          >
            <a href={Galeria9} className="thumb-icon image-popup">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Gallery Section End  */}

      <Footer />
    </div>
  );
}

export default Galeria;
