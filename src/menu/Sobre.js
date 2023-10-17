import "../App.css";
import React from "react";
import Banner from "../img/banner-bg.jpg";
import Breadcrumb from "../img/breadcrumb-bg.jpg";
import About from "../img/about-us.jpg";
import Logo from "../img/logo.png";
import Testimonial1 from "../img/testimonial/testimonial-1.jpg";
import Testimonial2 from "../img/testimonial/testimonial-2.jpg";
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
import { useState, useEffect } from "react";
import "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

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
      {/* Page Preloder */}
      <div className="preloder">
        <div className="loader"></div>
      </div>

      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay active"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close"></i>
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search"></i>
        </div>
        <nav className="canvas-menu mobile-menu">
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
            <li>
              <Link to="/Sobre">Pages</Link>
              <ul className="dropdow">
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
        <div id="mobile-menu-wrap">
          <div className="slicknav_menu">
            <nav
              className="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
            >
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
                <li>
                  <Link to="/Horarios">Horarios</Link>
                </li>

                <li>
                  <Link to="/Galeria">Galeria</Link>
                </li>
                <li>
                  <Link to="/NossoBlog">NossoBlog</Link>
                </li>
                <li>
                  <Link to="/404">404</Link>
                </li>
                <li>
                  <Link to="/Contato">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="canvas-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-play"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      {/* Offcanvas Menu Section End */}

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

      {/* ChoseUs Section Begin  */}
      <section className="choseus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>POR QUE TREINAR JIU JITSU?</span>
                <h2>AQUI ESTÃO QUATRO BENEFÍCIOS DE TREINAR JIU JITSU</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-034-stationary-bike"></span>
                <h4>Melhor Condicionamento Físico</h4>
                <p>
                  Jiu Jitsu ajuda a ficar mais forte, flexível e com melhor
                  resistência.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice"></span>
                <h4>Disciplina</h4>
                <p>
                  Praticar regularmente ensina a definir metas e a manter
                  compromissos.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell"></span>
                <h4>Confiança</h4>
                <p>
                  À medida que você aprende e evolui, sua autoconfiança aumenta.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat"></span>
                <h4>Autodefesa</h4>
                <p>
                  Jiu Jitsu é eficaz para se proteger em situações de confronto
                  físico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End  */}

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

      {/* Team Section Begin  */}
      <section className="team-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-title">
                <div className="section-title">
                  <span>NOSSOS TREINADORES</span>
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
            <div className="ts-slider owl-carousel">
              <div className="col-lg-4">
                <div
                  className="ts-item set-bg"
                  style={{ backgroundImage: `url(${Team1})` }}
                >
                  <div className="ts_text">
                    <h4>Rodrigo Campos</h4>
                    <span>Sensei de Jiu jitsu</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
              <div className="col-lg-4">
                <div
                  className="ts-item set-bg"
                  style={{ backgroundImage: `url(${Team3})` }}
                >
                  <div className="ts_text">
                    <h4>Henrique Viera</h4>
                    <span>Sensei de Jiu jitsu</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
              <div className="col-lg-4">
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
        </div>
      </section>
      {/* Team Section End  */}

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

      {/* Get In Touch Section Begin  */}
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-map-marker"></i>
                <p>
                  Av. Santo Antônio
                  <br />
                  Capuchinhos, Feira de Santana - BA,
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-mobile"></i>
                <p>(75) 9702-3456</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text email">
                <i className="fa fa-envelope"></i>
                <p>EvolucaoSports@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Section End  */}

      {/* Footer Section Begin  */}
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <a href="#">
                    <img src={Logo} alt="" />
                  </a>
                </div>
                <p>
                  A Evolução Sports é muito mais do que apenas uma academia
                  comum; é um centro de transformação física e mental. Com uma
                  ampla gama de modalidades e serviços disponíveis
                </p>
                <div className="fa-social">
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
                  <a href="#">
                    <i className="fa  fa-envelope-o"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Dicas e Guias</h4>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      A aptidão física pode ajudar a prevenir a depressão e a
                      ansiedade
                    </a>
                  </h6>
                  <ul>
                    <li>3 minutos de leitura</li>
                    <li>20 Comentários</li>
                  </ul>
                </div>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      Jiu Jitsu: A arte marcial suprema para eliminar a gordura
                      abdominal e tonificar seu corpo enquanto domina
                      habilidades de autodefesa.
                    </a>
                  </h6>
                  <ul>
                    <li>3 minutos de leitura</li>
                    <li>20 Comentários</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This is made with
                  <i className="fa fa-heart" aria-hidden="true"></i> Isis
                  <a href="https://colorlib.com" target="_blank"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section End  */}

      {/* Search model Begin  */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search model end  */}
    </div>
  );
}

export default Sobre;
