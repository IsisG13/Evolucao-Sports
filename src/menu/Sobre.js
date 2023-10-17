import "../App.css";
import React from "react";
import Banner from "../img/banner-bg.jpg";
import Breadcrumb from "../img/breadcrumb-bg.jpg";
import About from "../img/about-us.jpg";
import Logo from "../img/logo.png";
import Testimonial1 from "../img/testimonial/testimonial-1.jpg";
import Testimonial2 from "../img/testimonial/testimonial-2.jpg";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import Cabecalho from "../components/cabecalho";
import { useState, useEffect } from "react";
import "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Footer from "../components/footer";
import ChoseUs from "../components/ChoseUs";
import Time from "../components/time";

const Oitenta = {
  background: "rgb(255, 255, 255)",
  width: "80%",
  transition: "width 2s ease-in-out 0s",
};

const OitentaEcinco = {
  background: "rgb(255, 255, 255)",
  width: "85%",
  transition: "width 2s ease-in-out 0s",
};

const SetentaEcinco = {
  background: "rgb(255, 255, 255)",
  width: "75%",
  transition: "width 2s ease-in-out 0s",
};

const Setenta = {
  background: "rgb(255, 255, 255)",
  width: "70%",
  transition: "width 2s ease-in-out 0s",
};

function Sobre() {
  useEffect(() => {
    $(".canvas-open").on("click", function () {
      $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
    $(".hs-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      dots: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      navText: [
        '<i className="fa fa-angle-left"></i>',
        '<i className="fa fa-angle-right"></i>',
      ],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: false,
    });
    $(".ts-slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 3,
      dots: true,
      dotsEach: 2,
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
      responsive: {
        320: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
    $(".ts_slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      nav: true,
      navText: [
        '<i className="fa fa-angle-left"></i>',
        '<i className="fa fa-angle-right"></i>',
      ],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
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
                  <li className="active">
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
                  <li>
                    <a href="/Sobre">Paginas</a>
                    <ul className="dropdown">
                      <li className="active">
                        <Link to="/NossoTime">Sobre Nós</Link>
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
                <h2>Sobre nós</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <span>Sobre nós</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      <ChoseUs />

      {/* About US Section Begin  */}
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="about-video set-bg"
                style={{ backgroundImage: `url(${About})` }}
              >
                <a
                  href="https://www.youtube.com/watch?v=3sv8YS6V1n4"
                  target="_blank"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title">
                  <span>SOBRE NÓS</span>
                  <h2>O QUE FAZEMOS</h2>
                </div>
                <div className="at-desc">
                  <p>
                    Na Evolução Sports, não apenas treinamos Jiu Jitsu, mas
                    também cultivamos a evolução pessoal. Aqui, o que fazemos
                    vai além de simplesmente praticar artes marciais; moldamos
                    caráter, força mental e física. Na Evolução Sports, cada
                    treino é uma oportunidade para aprimorar nossas habilidades
                    de autodefesa e alcançar um condicionamento físico
                    excepcional. Mas isso não é tudo. O que fazemos é abraçar
                    desafios, aprender a nunca desistir e a buscar
                    constantemente o crescimento. Na Evolução Sports, estamos
                    construindo um legado de resiliência e comunidade, onde
                    todos se apoiam para se tornarem as melhores versões de si
                    mesmos. Somos mais do que um centro esportivo, somos um
                    movimento em direção à evolução constante, dentro e fora do
                    tatame.
                  </p>
                </div>
                <div className="about-bar">
                  <div className="ab-item">
                    <p>Jiu Jitsu</p>
                    <div id="bar1" className="barfiller">
                      <span
                        className="fill"
                        data-percentage="85"
                        style={OitentaEcinco}
                      ></span>
                      <div className="tipWrap">
                        <span className="tip">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Musculação</p>
                    <div id="bar3" className="barfiller">
                      <span
                        className="fill"
                        data-percentage="75"
                        style={SetentaEcinco}
                      ></span>
                      <div className="tipWrap">
                        <span className="tip">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Muay Thai</p>
                    <div id="bar2" className="barfiller">
                      <span
                        className="fill"
                        data-percentage="80"
                        style={Oitenta}
                      ></span>
                      <div className="tipWrap">
                        <span className="tip">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Fisioterapia</p>
                    <div id="bar3" className="barfiller">
                      <span
                        className="fill"
                        data-percentage="70"
                        style={Setenta}
                      ></span>
                      <div className="tipWrap">
                        <span className="tip">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About US Section End  */}

      <Time />

      {/* Banner Section Begin  */}
      <section
        className="banner-section set-bg"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text">
                <h2>Entre em contato agora para saber mais</h2>
                <div className="bt-tips">
                  Aulas de Jiu-jitsu, muay thai, musculação e fisioterapia
                </div>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5575981864590"
                  target="_blank"
                  className="primary-btn  btn-normal"
                >
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End  */}

      {/* Testimonial Section Begin  */}
      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Depoimento</span>
                <h2>O QUE OS ALUNOS DIZEM</h2>
              </div>
            </div>
          </div>
          <div className="ts_slider owl-carousel">
            <div className="ts_item">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="ti_pic">
                    <img src={Testimonial1} alt="" />
                  </div>
                  <div className="ti_text">
                    <p>
                      Sou aluno da Evolução Sports há mais de dois anos.
                      Instrutores excelentes, <br />
                      ambiente acolhedor e grande progresso na técnica.
                      Recomendo para quem quer praticar jiu-jitsu com foco no
                      desenvolvimento pessoal.
                    </p>
                    <h5>André Silva</h5>
                    <div className="tt-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ts_item">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="ti_pic">
                    <img src={Testimonial2} alt="" />
                  </div>
                  <div className="ti_text">
                    <p>
                      Sou aluna da Evolução Sports há um ano. A experiência tem
                      sido incrível. Os instrutores são ótimos, <br />e aqui
                      encontrei uma comunidade acolhedora e desafiadora.
                      Recomendo a Evolução Sports <br />
                      para quem busca um ambiente amigável para praticar
                      jiu-jitsu
                    </p>
                    <h5>Camila Santos</h5>
                    <div className="tt-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section End  */}

      <Footer />
    </div>
  );
}

export default Sobre;
