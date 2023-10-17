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
import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";

function Horarios() {
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
                    <a href="/Horarios">Paginas</a>
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
                <h2>Horarios</h2>
                <div className="bt-option">
                  <Link to="/">Inicio</Link>
                  <Link to="/Horarios">Paginas</Link>
                  <span>Horarios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End  */}

      {/* Class Timetable Section Begin  */}
      <section className="class-timetable-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <span>Encontre o seu tempo</span>
                <h2>Encontre o seu tempo</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="table-controls">
                <ul>
                  <li className="active" data-tsfilter="all">
                    Todos os eventos
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="class-timetable">
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

      <Footer />
    </div>
  );
}

export default Horarios;
