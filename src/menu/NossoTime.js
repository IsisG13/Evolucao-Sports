import "../App.css";
import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import Breadcrumb from "../img/breadcrumb-bg.jpg";

import Team1 from "../img/team/team.1.jpg";
import Team2 from "../img/team/team-2.png";
import Team3 from "../img/team/team-3.jpg";
import Team4 from "../img/team/team-4.jpg";
import Team5 from "../img/team/team-5.jpg";

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

function Time() {
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
                  <li className="active">
                    <Link to="/NossoTime">Nosso Time</Link>
                  </li>
                  <li>
                    <a href="/NossoTime">Paginas</a>
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
                        <Link to="/NossoBlog">Nosso blog</Link>
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
                <h2>Nosso Time</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <span>Nosso Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Team Section Begin  */}
      <section className="team-section team-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-title">
                <div className="section-title">
                  <span>NOSSO TIME</span>
                  <h2>TREINE COM ESPECIALISTAS</h2>
                </div>
                <a
                  href="https://www.instagram.com/evolucao.sports_/"
                  target="_blank"
                  className="primary-btn btn-normal appoinment-btn"
                >
                  Ver mais
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div
                className="ts-item set-bg"
                style={{ backgroundImage: `url(${Team1})` }}
              >
                <div className="ts_text">
                  <h4>Rodrigo Campos</h4>
                  <span>Sensei</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="ts-item set-bg"
                style={{ backgroundImage: `url(${Team2})` }}
              >
                <div className="ts_text">
                  <h4>Fabio Pirez</h4>
                  <span>Atleta</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="ts-item set-bg"
                style={{ backgroundImage: `url(${Team3})` }}
              >
                <div className="ts_text">
                  <h4>Henrique Viera</h4>
                  <span>Sensei</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 time">
              <div
                className="ts-item set-bg"
                style={{ backgroundImage: `url(${Team4})` }}
              >
                <div className="ts_text">
                  <h4>Rodrigo Campos e Henrique Viera</h4>
                  <span>Sensei</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 time2">
              <div
                className="ts-item set-bg"
                style={{ backgroundImage: `url(${Team5})` }}
              >
                <div className="ts_text">
                  <h4>Francyelle Figueredo</h4>
                  <span>Atleta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End  */}

      <Footer />
      {/* Search model end  */}
    </div>
  );
}

export default Time;
