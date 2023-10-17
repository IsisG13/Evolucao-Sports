import "../App.css";
import Logo from "../img/logo.png";
import React, { useEffect } from "react";

import Breadcrumb from "../img/breadcrumb-bg.jpg";

import Sidebar from "../img/sidebar-banner.jpeg";
import Latest from "../img/letest-blog/latest-1.jpg";
import Blog1 from "../img/blog/blog-1.jpg";
import Blog2 from "../img/blog/blog-2.jpg";
import Blog3 from "../img/blog/blog-3.jpg";
import Blog4 from "../img/blog/blog-4.jpg";
import Blog5 from "../img/blog/blog-5.jpg";

import Blog6 from "../img/letest-blog/latest-2.jpg";
import Blog7 from "../img/letest-blog/latest-3.jpg";
import Blog8 from "../img/letest-blog/latest-4.jpg";
import Blog9 from "../img/letest-blog/latest-5.jpg";
import Latest1 from "../img/letest-blog/latest-1.jpg";
import Latest2 from "../img/letest-blog/latest-2.jpg";
import Latest3 from "../img/letest-blog/latest-3.jpg";
import Latest4 from "../img/letest-blog/latest-4.jpg";
import Latest5 from "../img/letest-blog/latest-5.jpg";

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

function Blog() {
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
                    <a href="/NossoBlog">Paginas</a>
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
                <h2>Nosso Blog</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <Link to="/NossoBlog">Paginas</Link>
                  <span>Nosso Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Blog Section Begin  */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 p-0">
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={Blog1} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="/BlogDetails">Jiu Jitsu Kids: Forjando Campeões</a>
                  </h5>
                  <ul>
                    <li>by Admin</li>
                    <li>Aug,15, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    O Jiu Jitsu Kids ensina disciplina, respeito e habilidades
                    valiosas para crianças enquanto as mantém ativas e
                    saudáveis. Instrutores experientes preparam os pequenos para
                    desafios futuros, formando campeões dentro e fora do tatame.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={Blog2} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="/BlogDetails">
                      Jiu Jitsu: A Jornada do Autoconhecimento
                    </a>
                  </h5>
                  <ul>
                    <li>by Admin</li>
                    <li>Aug,15, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    Além de habilidades de combate, o Jiu Jitsu é uma jornada de
                    autodescoberta, onde os praticantes aprendem a controlar a
                    mente, superar desafios e desenvolver confiança em si
                    mesmos.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={Blog3} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="/BlogDetails">
                      Jiu Jitsu: Força, Técnica e Determinação
                    </a>
                  </h5>
                  <ul>
                    <li>by Admin</li>
                    <li>Aug,15, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    No mundo do Jiu Jitsu, a ação é uma coreografia de força,
                    técnica e determinação. Os lutadores se entregam a um duelo
                    de estratégia e resistência, onde cada movimento é calculado
                    e executado com precisão.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={Blog5} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="/BlogDetails">
                      Jiu Jitsu e Disciplina: Preparando Jovens para o Futuro
                    </a>
                  </h5>
                  <ul>
                    <li>by Admin</li>
                    <li>Aug,15, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    O Jiu Jitsu é uma ferramenta incrível para ensinar
                    disciplina e respeito a jovens praticantes, preparando-os
                    não apenas para o tatame, mas também para os desafios que
                    enfrentarão em suas vidas.
                  </p>
                </div>
              </div>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src={Blog4} alt="" />
                </div>
                <div className="bi-text">
                  <h5>
                    <a href="/BlogDetails">Jiu Jitsu: A Arte da Resiliência</a>
                  </h5>
                  <ul>
                    <li>by Admin</li>
                    <li>Aug,15, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    O Jiu Jitsu não é apenas uma prática física, mas uma jornada
                    de resiliência. Através da superação de adversidades no
                    tatame, os praticantes aprendem a enfrentar desafios na vida
                    com determinação e coragem.
                  </p>
                </div>
              </div>
              <div className="blog-pagination">
                <a href="/NossoBlog">1</a>
                <a href="/NossoBlog">2</a>
                <a href="/NossoBlog">3</a>
                <a href="/NossoBlog">Next</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="sidebar-option">
                <div className="so-categories">
                  <h5 className="title">CATEGORIAS</h5>
                  <ul>
                    <li>
                      <a href="#">
                        Jiu jitsu kids <span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Jiu Jitsu <span>32</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Muay Thai <span>86</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Academia <span>25</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Musculação <span>36</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fisioterapia <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="so-latest">
                  <h5 className="title">OUTROS POSTS</h5>
                  <div
                    className="latest-large set-bg"
                    style={{ backgroundImage: `url(${Blog2})` }}
                  >
                    <div className="ll-text">
                      <h5>
                        <a href="/BlogDetails" className="details">
                          Arte marcial japonesa que utiliza técnicas de
                          percussão golpes de projeções, torções e pressões para
                          derrubar e dominar um oponente.
                        </a>
                      </h5>
                      <ul>
                        <li>Aug 20, 2019</li>
                        <li>20 Comment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Blog6} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="/BlogDetails">
                          Trata-se de uma luta em que o atleta tenta controlar o
                          adversário com golpes{" "}
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Blog7} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="/BlogDetails">
                          O jiu jitsu ajuda a criança a entender e conviver com
                          as diferenças.
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Latest} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="/BlogDetails">
                          Praticantes veem no jiu-jítsu não apenas um esporte ou
                          forma de defesa pessoal, mas uma filosofia de vida
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Blog8} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="/BlogDetails">
                          O nome jiu-jítsu significa literalmente “arte suave”,
                          porque é formado pelas palavras ju, que significa
                          suavidade e jutsu, que significa arte.
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                </div>
                <div
                  className="so-banner set-bg"
                  style={{ backgroundImage: `url(${Sidebar})` }}
                >
                  <h5>Banner 300x300</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End  */}

      <Footer />
    </div>
  );
}

export default Blog;
