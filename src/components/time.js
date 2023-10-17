import React, { useEffect } from "react";
import Team1 from "../img/team/team.1.jpg";
import Team2 from "../img/team/team-2.png";
import Team3 from "../img/team/team-3.jpg";
import Team4 from "../img/team/team-4.jpg";
import Team5 from "../img/team/team-5.jpg";

function Time() {
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
    </div>
  );
}

export default Time;
