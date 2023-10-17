import "../App.css";
import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import Hero1 from "../img/hero/hero-1.jpg";
import Hero2 from "../img/hero/hero-2.jpg";
import Class1 from "../img/classes/class-1.jpg";
import Class2 from "../img/classes/class-2.jpg";
import Class3 from "../img/classes/class-3.jpeg";
import Class4 from "../img/classes/class-4.png";
import Class5 from "../img/classes/class-5.jpg";
import Galeria1 from "../img/gallery/gallery-1.png";
import Galeria2 from "../img/gallery/gallery-2.jpg";
import Galeria3 from "../img/gallery/gallery-3.png";
import Galeria4 from "../img/gallery/gallery-4.jpg";
import Galeria5 from "../img/gallery/gallery-5.png";
import Galeria6 from "../img/gallery/gallery-6.png";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import ChoseUs from "../components/ChoseUs";
import Preco from "../components/preco";
import Time from "../components/time";

function Erro() {
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
  }, []);

  return (
    <div className="App">
      {/* 404 Section Begin  */}
      <section className="section-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-404">
                <h1>404</h1>
                <h3>Opps! Esta página não foi encontrada!</h3>
                <p>
                  Desculpa, a página que você procura não existe. Foi removida
                  ou o nome foi alterado.
                </p>
                <Link to="/">
                  <i className="fa fa-home"></i> Volte para o inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 Section End   */}

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
                  <li className="active">
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
                    <a href="/404">Paginas</a>
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

      {/* Hero Section Begin  */}
      <section className="hero-section">
        <div className="hs-slider owl-carousel">
          <div
            className="hs-item set-bg"
            style={{ backgroundImage: `url(${Hero1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>APRIMORE SUA DEFESA E SAÚDE COM</span>
                    <h1>
                      EVOLUÇÃO <strong> SPORTS</strong>
                    </h1>
                    <a
                      href="https://www.instagram.com/evolucao.sports_/"
                      target="_blank"
                      className="primary-btn"
                    >
                      Saber mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hs-item set-bg"
            style={{ backgroundImage: `url(${Hero2})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>APRIMORE SUA DEFESA E SAÚDE COM</span>
                    <h1>
                      EVOLUÇÃO <strong> SPORTS</strong>
                    </h1>
                    <a
                      href="https://www.instagram.com/evolucao.sports_/"
                      target="_blank"
                      className="primary-btn"
                    >
                      Saber mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End  */}

      <ChoseUs />

      {/* Classes Section Begin  */}
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>NOSSAS AULAS</span>
                <h2>O QUE PODEMOS OFERECER</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={Class1} alt="Aula 1" />
                </div>
                <div className="ci-text">
                  <span>Arte Marcial</span>
                  <h5>Jiu-Jitsu 🥋 </h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={Class2} alt="Aula 2" />
                </div>
                <div className="ci-text">
                  <span>Academia</span>
                  <h5>Musculação 🏋️‍♂️</h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={Class3} alt="Aula 3" />
                </div>
                <div className="ci-text">
                  <span>Saúde</span>
                  <h5>Fisioterapia 🤲🏼</h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={Class4} alt="Aula 4" />
                </div>
                <div className="ci-text">
                  <span>Arte Marcial</span>
                  <h5>Jiu-Jitsu 🥋 </h5>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={Class5} alt="Aula 5" />
                </div>
                <div className="ci-text">
                  <span>Luta</span>
                  <h4>Muay Thai 🤼‍♂️</h4>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End  */}

      <Preco />

      {/* Gallery Section Begin  */}
      <div className="gallery-section">
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
        </div>
      </div>
      {/* Gallery Section End  */}

      <Time />

      <Footer />
    </div>
  );
}

export default Erro;
