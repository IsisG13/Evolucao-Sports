import "../App.css";
import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import Breadcrumb from "../img/breadcrumb-bg.jpg";
import Banner from "../img/banner-bg.jpg";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import Cabecalho from "../components/cabecalho";

import Services1 from "../img/services/services-1.jpg";
import Services2 from "../img/services/services-2.jpg";
import Services3 from "../img/services/services-3.jpg";
import Services4 from "../img/services/services-4.jpg";
import Footer from "../components/footer";
import Preco from "../components/preco";

function Servicos() {
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
                  <li className="active">
                    <Link to="/Servicos">Servicos</Link>
                  </li>
                  <li>
                    <Link to="/NossoTime">Nosso Time</Link>
                  </li>
                  <li>
                    <a href="/Servicos">Paginas</a>
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
                <h2>Servicos</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <span>Servicos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Services Section Begin  */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>O que nós fazemos?</span>
                <h2>AUMENTE SEUS LIMITES</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 order-lg-1 col-md-6 p-0">
              <div className="ss-pic">
                <img src={Services1} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-2 col-md-6 p-0">
              <div className="ss-text">
                <h4>Treinamento pessoal</h4>
                <p>
                  No Jiu Jitsu, o treinamento pessoal é essencial para aprimorar
                  habilidades, definir metas individuais e desenvolver
                  qualidades mentais, resultando em crescimento tanto como
                  lutador quanto como pessoa.
                </p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 col-md-6 p-0">
              <div className="ss-pic">
                <img src={Services2} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-4 col-md-6 p-0">
              <div className="ss-text">
                <h4>Treinamento infantil</h4>
                <p>
                  O treinamento infantil de Jiu Jitsu ensina disciplina,
                  respeito e habilidades valiosas desde cedo. Com instrutores
                  experientes, as crianças desenvolvem habilidades físicas e
                  mentais, preparando-se para desafios futuros e forjando um
                  caminho de sucesso no tatame e na vida.
                </p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-8 col-md-6 p-0">
              <div className="ss-pic">
                <img src={Services4} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-7 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Muay Thai</h4>
                <p>
                  O Muay Thai é uma arte que une força, técnica e disciplina.
                  Além de suas habilidades de combate, os praticantes cultivam
                  resiliência e autoconfiança, promovendo um estilo de vida
                  saudável e equilibrado.
                </p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-6 col-md-6 p-0">
              <div className="ss-pic">
                <img src={Services3} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-5 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Musculação</h4>
                <p>
                  A musculação não se limita ao fortalecimento físico; é uma
                  jornada que aprimora corpo e mente, cultivando disciplina,
                  perseverança e autoconfiança para alcançar bem-estar e saúde
                  ideais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End  */}

      {/* Banner Section Begin  */}
      <section
        className="banner-section set-bg"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text service-banner">
                <h2>Exercicios de preparação para o Jiu jitsu</h2>
                <div className="bt-tips">
                  Preparação para o jiu-jitsu: Exercícios fundamentais para
                  aprimorar técnica e resistência no tatame.
                </div>
                <a
                  href="https://www.youtube.com/watch?v=MPwc95pA_IE"
                  className="play-btn video-popup"
                  target="_blank"
                >
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End  */}

      <Preco />

      <Footer />
    </div>
  );
}

export default Servicos;
