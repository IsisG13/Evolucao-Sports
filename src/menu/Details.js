import "../App.css";
import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import Breadcrumb from "../img/breadcrumb-bg.jpg";

import Sidebar from "../img/sidebar-banner.jpeg";
import Detail from "../img/classes/class-details/treinamento.jpg";
import Trainer from "../img/classes/class-details/class-detailsl.jpg";
import Latest from "../img/letest-blog/latest-1.jpg";
import Blog2 from "../img/letest-blog/latest-2.jpg";
import Blog3 from "../img/letest-blog/latest-3.jpg";
import Blog4 from "../img/letest-blog/latest-4.jpg";
import Blog5 from "../img/letest-blog/latest-5.jpg";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/barfiller.css";
import "../css/magnific-popup.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";

function Details() {
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
              <Link to="/">Home</Link>
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
              <Link to="/Details">Paginas</Link>
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
        <div id="mobile-menu-wrap"></div>
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
                  <li className="active">
                    <Link to="/Details">Aulas</Link>
                  </li>
                  <li>
                    <Link to="/Servicos">Servicos</Link>
                  </li>
                  <li>
                    <Link to="/NossoTime">Nosso Time</Link>
                  </li>
                  <li>
                    <a href="/Details">Paginas</a>
                    <ul className="dropdown">
                      <li className="active">
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
                <h2>Detalhes de aulas</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <Link to="/">Detalhes de aulas</Link>
                  <span>Detalhes de aulas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Class Details Section Begin  */}
      <section className="class-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="class-details-text">
                <div className="cd-pic">
                  <img src={Detail} alt="" />
                </div>
                <div className="cd-text">
                  <div className="cd-single-item">
                    <h3>JIU JITSU</h3>
                    <p>
                      O Jiu-Jitsu na Evolução Sports é muito mais do que uma
                      arte marcial, é uma filosofia de vida. Com raízes no Japão
                      e um lar no Brasil, esta modalidade é uma jornada de
                      autodescoberta e crescimento. Na Evolução Sports, os
                      instrutores são mestres na arte e nos valores do
                      Jiu-Jitsu, incluindo paciência, estratégia e respeito.
                      Além de aprender técnicas de luta, os alunos desenvolvem
                      autoconfiança, disciplina e perseverança. Este é um
                      ambiente de apoio mútuo e camaradagem, onde todos podem se
                      tornar a melhor versão de si mesmos. Venha se juntar a nós
                      nessa jornada fascinante de evolução pessoal e superação.
                    </p>
                  </div>
                  <div className="cd-single-item">
                    <h3>TREINADOR</h3>
                    <p>
                      O treinador da Evolução Sports é um mentor experiente e
                      apaixonado, especializado em Jiu-Jitsu. Ele não só ensina
                      as técnicas, mas também os valores essenciais da
                      disciplina, como respeito e perseverança. Além disso, cria
                      um ambiente de apoio e motivação, adaptando-se às
                      necessidades individuais dos alunos. O treinador
                      desempenha um papel crucial na jornada de autodescoberta e
                      desenvolvimento dos praticantes, preparando-os para
                      desafios não apenas no tatame, mas na vida.
                    </p>
                  </div>
                </div>
                <div className="cd-trainer">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="cd-trainer-pic">
                        <img src={Trainer} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cd-trainer-text">
                        <div className="trainer-title">
                          <h4>Rodrigo e Henrique</h4>
                          <span>Sensei de Jiu jitsu</span>
                        </div>
                        <p>
                          Sensei Rodrigo, especialista em Jiu-Jitsu para adultos
                          na Evolução Sports, é um mestre que vai além do ensino
                          de técnicas de luta. Ele é um mentor que cultiva
                          valores como respeito e disciplina em seus alunos,
                          ajudando-os a evoluir não apenas no tatame, mas na
                          vida como um todo.
                        </p>
                        <ul className="trainer-info">
                          <hr />
                        </ul>
                        <p>
                          Sensei Henrique é a figura central no Jiu-Jitsu Kids
                          da Evolução Sports. Ele compartilha seu entusiasmo e
                          conhecimento de forma divertida e educativa, criando
                          um ambiente seguro onde as crianças não só aprendem
                          técnicas de Jiu-Jitsu, mas também valores importantes,
                          como respeito e autoconfiança. Ele é um exemplo
                          inspirador para as crianças, preparando-as para os
                          desafios da vida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <a href="#" className="details">
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
                      <img src={Blog5} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="#">
                          Trata-se de uma luta em que o atleta tenta controlar o
                          adversário com golpes{" "}
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Blog3} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="#">
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
                        <a href="#">
                          Praticantes veem no jiu-jítsu não apenas um esporte ou
                          forma de defesa pessoal, mas uma filosofia de vida
                        </a>
                      </h6>
                      <span className="li-time">Aug 15, 2019</span>
                    </div>
                  </div>
                  <div className="latest-item">
                    <div className="li-pic">
                      <img src={Blog4} alt="" />
                    </div>
                    <div className="li-text">
                      <h6>
                        <a href="#">
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
      {/* Class Details Section End  */}

      {/* Class Timetable Section Begin  */}
      <section className="class-timetable-section class-details-timetable spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="class-details-timetable_title">
                <h5>Horarios de aula</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="class-timetable details-timetable">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Segunda</th>
                      <th>Terça</th>
                      <th>Quarta</th>
                      <th>Quinta</th>
                      <th>Sexta</th>
                      <th>Sabado</th>
                      <th>Domingo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="class-time">6.00am - 8.00am</td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>MUAY THAI</h5>
                        <span>?</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="fitness">
                        <h5>JIU JITSU</h5>
                        <span>Rodrigo</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>FISIOTERAPIA</h5>
                        <span>?</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="fitness">
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                      <td className="dark-bg blank-td"></td>
                      <td className="hover-bg ts-meta" data-tsmeta="motivation">
                        <h5>JIU JITSU-KIDS</h5>
                        <span>HENRIQUE</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="class-time">10.00am - 12.00am</td>
                      <td className="blank-td"></td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="fitness"
                      >
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="workout">
                        <h5>MUAY THAI</h5>
                        <span>?</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="motivation"
                      >
                        <h5>JIU JITSU</h5>
                        <span>Rodrigo</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="workout">
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="motivation"
                      >
                        <h5>JIU JITSU</h5>
                        <span>RODRIGO</span>
                      </td>
                      <td className="blank-td"></td>
                    </tr>
                    <tr>
                      <td className="class-time">5.00pm - 7.00pm</td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="fitness"
                      >
                        <h5>JIU JITSU-KIDS</h5>
                        <span>HENRIQUE</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="motivation">
                        <h5>JIU JITSU</h5>
                        <span>RODRIGO</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                      <td className="blank-td"></td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>FISIOTERAPIA</h5>
                        <span>?</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="motivation">
                        <h5>JIU JITSU</h5>
                        <span>Rodrigo</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="fitness"
                      >
                        <h5>MUSCULAÇÃO</h5>
                        <span>?</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="class-time">7.00pm - 9.00pm</td>
                      <td className="hover-bg ts-meta" data-tsmeta="motivation">
                        <h5>JIU JITSU</h5>
                        <span>Rodrigo</span>
                      </td>
                      <td className="dark-bg blank-td"></td>
                      <td className="hover-bg ts-meta" data-tsmeta="fitness">
                        <h5>JIU JITSU-KIDS</h5>
                        <span>HENRIQUE</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="workout"
                      >
                        <h5>FISIOTERAPIA</h5>
                        <span>?</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="motivation">
                        <h5>JIU JITSU</h5>
                        <span>RODRIGO</span>
                      </td>
                      <td
                        className="dark-bg hover-bg ts-meta"
                        data-tsmeta="fitness"
                      >
                        <h5>JIU JITSU-KIDS</h5>
                        <span>HENRIQUE</span>
                      </td>
                      <td className="hover-bg ts-meta" data-tsmeta="workout">
                        <h5>MUAY THAI</h5>
                        <span>?</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Class Timetable Section End  */}

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

export default Details;
