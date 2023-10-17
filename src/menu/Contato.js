import "../App.css";
import Logo from "../img/logo.png";
import React, { useEffect } from "react";

import Breadcrumb from "../img/breadcrumb-bg.jpg";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";

function Contato() {
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
              <Link to="/Contato">Paginas</Link>
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
                    <a href="/Contato">Paginas</a>
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
                  <li className="active">
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
                <h2>Contact Us</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <Link to="/Contato">Paginas</Link>
                  <span>Nosso Contato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Contact Section Begin  */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title contact-title">
                <span>Fale conosco</span>
                <h2>Entre em contato</h2>
              </div>
              <div className="contact-widget">
                <div className="cw-text">
                  <i className="fa fa-map-marker"></i>
                  <p>
                    Av. Santo Antônio
                    <br />
                    Capuchinhos, Feira de Santana - BA,
                  </p>
                </div>
                {/* <div className="cw-text">
                  <i className="fa fa-mobile"></i>
                  <ul>
                    <li>(75) 98186-4590</li>
                  </ul>
                </div> */}
                <div className="cw-text email">
                  <i className="fa fa-envelope"></i>
                  <p>EvolucaoSports@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="leave-comment">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span className="contato">
                      Pelo instagram: {"  "}
                      <a href="https://www.instagram.com/evolucao.sports_/?img_index=1">
                        evolucao.sports_
                      </a>
                    </span>{" "}
                    <br /> <br />
                    <span className="contato">
                      Pelo whatsapp:{" "}
                      <a href="https://api.whatsapp.com/send?1=pt_BR&phone=557597023456">
                        75 9702-3456
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End  */}

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
                <p>(75) 9702-34560</p>
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

export default Contato;
