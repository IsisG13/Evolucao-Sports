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

      {/* Pricing Section Begin  */}
      <section className="pricing-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Nossos Planos</span>
                <h2>Escolha seu plano de preços</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>Aula presencial</h3>
                <div className="pi-price">
                  <h2>R$ XX.XX</h2>
                  <span>classe única</span>
                </div>
                <ul>
                  <li>Volta gratuita</li>
                  <li>Equipamentos ilimitados</li>
                  <li>Treinador pessoal</li>
                  <li>Aulas para perder peso</li>
                  <li>Sem restrição de tempo</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5575981864590"
                  target="_blank"
                  className="primary-btn pricing-btn"
                >
                  Inscreva-se agora
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>12 meses ilimitados</h3>
                <div className="pi-price">
                  <h2>R$ XX.XX</h2>
                  <span>Classe Única</span>
                </div>
                <ul>
                  <li>Volta gratuita</li>
                  <li>Equipamentos ilimitados</li>
                  <li>Treinador pessoal</li>
                  <li>Aulas para perder peso</li>
                  <li>Sem restrição de tempo</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5575981864590"
                  target="_blank"
                  className="primary-btn pricing-btn"
                >
                  Inscreva-se agora
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>6 meses ilimitados</h3>
                <div className="pi-price">
                  <h2>R$ XX.XX</h2>
                  <span>Classe única</span>
                </div>
                <ul>
                  <li>Volta gratuita</li>
                  <li>Equipamentos ilimitados</li>
                  <li>Treinador pessoal</li>
                  <li>Aulas para perder peso</li>
                  <li>Sem restrição de tempo</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5575981864590"
                  target="_blank"
                  className="primary-btn pricing-btn"
                >
                  Inscreva-se agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End  */}

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

      {/* Get In Touch Section Begin  */}
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-map-marker"></i>
                <p>
                  Av. Santo Antônio - Capuchinhos, Feira de Santana - BA,
                  44076-050
                  <br />
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

export default Erro;
