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
import Perfil from "../img/blog/details/blog-profile.jpg";
import C1 from "../img/blog/details/comment-1.jpg";
import C2 from "../img/blog/details/comment-2.jpg";
import C3 from "../img/blog/details/comment-3.jpg";
import D1 from "../img/blog/details/details-1.jpg";
import D2 from "../img/blog/details/details-2.jpg";
import Hero from "../img/blog/details/details-hero.jpg";
import Quote from "../img/blog/details/quote-left.png";

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

function BlogDetails() {
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
              <Link to="/NossoBlog">Paginas</Link>
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

      {/* Blog Details Hero Section Begin  */}
      <section
        className="blog-details-hero set-bg"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 p-0 m-auto">
              <div className="bh-text">
                <h3>
                  Evolução Sports: Jiu Jitsu - A Arte Marcial que Desafia Corpos
                  e Mentes
                </h3>
                <ul>
                  {/* <li>Por: </li> */}
                  <li>10 de outubro de 2023</li>
                  {/* <li>20 Comment</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Hero Section End  */}

      {/* Blog Details Section Begin  */}
      <section className="blog-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 p-0 m-auto">
              <div className="blog-details-text">
                <div className="blog-details-title">
                  <p>
                    Nossa academia é mais do que apenas um local de treinamento;
                    é um ambiente onde transformações físicas e mentais
                    acontecem todos os dias. No coração desse processo está o
                    Jiu Jitsu, uma arte marcial que vai muito além do tatame.
                    Com uma comunidade dedicada e instrutores experientes, nosso
                    compromisso é ajudar nossos alunos a alcançarem seu máximo
                    potencial.
                  </p>
                  <p>
                    O Jiu Jitsu não é apenas sobre técnicas de autodefesa, mas
                    também sobre desenvolvimento pessoal. Ele desafia você a
                    superar limites físicos e mentais, promovendo a paciência, a
                    disciplina e a resiliência. Além disso, as aulas de Jiu
                    Jitsu na Evolução Sports oferecem a oportunidade de melhorar
                    a forma física, tonificar músculos e até mesmo perder peso,
                    tornando-o uma escolha ideal para aqueles que buscam uma
                    jornada de bem-estar completa.
                  </p>
                  <h5>
                    Jiu Jitsu na Evolução Sports: Alcançando a Excelência no
                    Tatame
                  </h5>
                  <p>
                    No coração da Evolução Sports, o Jiu Jitsu é uma paixão que
                    nutrimos com dedicação. Nossos praticantes se esforçam
                    diariamente para alcançar a excelência nessa arte marcial
                    dinâmica. Com um compromisso inabalável com o treinamento,
                    aperfeiçoamento técnico e crescimento pessoal, nosso Jiu
                    Jitsu é muito mais do que uma atividade física; é uma
                    jornada de autodescoberta
                  </p>
                </div>
                <div className="blog-details-pic">
                  <div className="blog-details-pic-item">
                    <img src={D1} alt="" />
                  </div>
                  <div className="blog-details-pic-item">
                    <img src={D2} alt="" />
                  </div>
                </div>
                <div className="blog-details-desc">
                  <p>
                    Em nossas aulas, alunos de todas as idades e níveis de
                    experiência se reúnem para aprender, treinar e crescer
                    juntos. Através do Jiu Jitsu, desenvolvemos não apenas
                    habilidades de autodefesa, mas também valores essenciais
                    como respeito, humildade e perseverança. É uma experiência
                    que desafia corpo e mente, fortalecendo não apenas nossos
                    músculos, mas também nosso caráter.
                  </p>
                </div>
                <div className="blog-details-quote">
                  <div className="quote-icon">
                    {/* <img src={Quote} alt="" /> */}
                  </div>
                  <h5>
                    Jiu Jitsu é uma arte marcial originária do Japão, mas ganhou
                    notoriedade no Brasil. Destaca-se por seu foco em técnicas
                    de solo e estrangulamento, permitindo que lutadores mais
                    fracos vençam adversários maiores. A versão brasileira,
                    conhecida como Brazilian Jiu Jitsu (BJJ), foi desenvolvida
                    por Carlos Gracie e é amplamente praticada globalmente. Sua
                    história de evolução torna-o único e influente nas artes
                    marciais.
                  </h5>
                  <span>Sobre o JIU JITSU</span>
                </div>
                <div className="blog-details-more-desc">
                  <p>
                    O Jiu Jitsu na Evolução Sports é muito mais do que apenas
                    uma modalidade esportiva; é uma jornada de autodescoberta e
                    desenvolvimento pessoal. Nossas aulas de Jiu Jitsu oferecem
                    um ambiente acolhedor e inclusivo, onde praticantes de todas
                    as idades e níveis de habilidade podem aprender e crescer
                    juntos. Com instrutores altamente qualificados e uma
                    comunidade forte e solidária, nosso foco vai além das
                    técnicas de autodefesa. Buscamos também promover valores
                    essenciais como disciplina, respeito e humildade, que são
                    aplicáveis não apenas no tatame, mas em todas as áreas da
                    vida.
                  </p>
                  <p>
                    Além disso, o Jiu Jitsu na Evolução Sports é uma
                    oportunidade de aprimorar o bem-estar físico e mental. Ele
                    oferece uma forma desafiadora de exercício que melhora a
                    resistência cardiovascular, fortalece os músculos e promove
                    a saúde mental. Através da prática constante e do apoio de
                    nossa comunidade, muitos de nossos alunos têm experimentado
                    uma transformação significativa em suas vidas, desenvolvendo
                    não apenas habilidades atléticas, mas também confiança,
                    autoestima e uma mentalidade positiva. Seja você um
                    iniciante ou um lutador experiente, convidamos você a se
                    juntar a nós e explorar o poder do Jiu Jitsu na Evolução
                    Sports.
                  </p>
                </div>
                <br /> <br />
                <div className="blog-details-author">
                  <div className="ba-pic">
                    <img src={Perfil} alt="" />
                  </div>
                  <div className="ba-text">
                    <h5>Rodrigo Campos</h5>
                    <p>
                      Sensei Rodrigo é uma figura respeitada no mundo do Jiu
                      Jitsu, conhecido por sua paixão, habilidades técnicas
                      impressionantes e capacidade de inspirar alunos de todas
                      as idades e níveis de habilidade. Sua abordagem calorosa e
                      encorajadora cria um ambiente de aprendizado acolhedor,
                      onde ele compartilha seu vasto conhecimento e ética de
                      trabalho incansável para ajudar outros a alcançarem seu
                      máximo potencial no esporte e na vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End  */}

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

export default BlogDetails;
