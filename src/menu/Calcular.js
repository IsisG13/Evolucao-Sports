// import "../App.css";
// import Logo from "../img/logo.png";
// import React, { useEffect, useState } from "react";

// import Breadcrumb from "../img/breadcrumb-bg.jpg";

// import "../css/font-awesome.min.css";
// import "../css/flaticon.css";
// import "../css/barfiller.css";
// import "../css/magnific-popup.css";
// import "../css/slicknav.min.css";
// import "../css/style.css";
// import { Link } from "react-router-dom";

// function Calcular() {
//   useEffect(() => {
//     $(".canvas-open").on("click", function () {
//       $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
//       $(".offcanvas-menu-overlay").addClass("active");
//     });

//     $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
//       $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
//       $(".offcanvas-menu-overlay").removeClass("active");
//     });
//   }, []);

//   const [peso, setPeso] = useState("");
//   const [altura, setAltura] = useState("");

//   const [mensagem, setMensagem] = useState("");
//   const [efeitos, setEfeitos] = useState("");
//   const [imcMessage, setImcMessage] = useState("");

//   function calcularIMC(event) {
//     event.preventDefault();

//     const alt = altura / 100;
//     const imc = peso / (alt * alt);

//     if (altura === "" && peso === "") {
//       alert("Por Favor, preencha o peso e a altura corretamente!");
//     } else if (!alt) {
//       alert("Por Favor, preencha o peso e a altura corretamente!");
//     } else if (imc < 16.9) {
//       setMensagem(`Você está muito abaixo do peso !`);
//       setEfeitos(
//         `Efeitos colaterais: Queda de cabelo, infertilidade, ausência menstrual.`
//       );
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 17 && imc < 18.4) {
//       setMensagem(`Você está Abaixo do peso !`);
//       setEfeitos(`Efeitos colaterais:Fadiga, stress, ansiedade.`);
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 18.5 && imc < 24.9) {
//       setMensagem(`Você está com peso normal !`);
//       setEfeitos(
//         `Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`
//       );
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 25 && imc < 29.9) {
//       setMensagem(`Você está acima do peso !`);
//       setEfeitos(
//         `Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`
//       );
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 30 && imc < 34.9) {
//       setMensagem(`Você está com Obesidade Grau I !`);
//       setEfeitos(`Efeitos colaterais: Apneia do sono, falta de ar.`);
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 35 && imc < 40) {
//       setMensagem(`Você está com Obesidade Grau II !`);
//       setEfeitos(
//         `Efeitos colaterais: Diabetes, angina, infarto, aterosclerose`
//       );
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     } else if (imc >= 40) {
//       setMensagem(`Você está com Obesidade Grau III !`);
//       setEfeitos(
//         `Efeitos colaterais: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`
//       );
//       setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
//     }
//     setPeso("");
//     setAltura("");
//   }

//   return (
//     <div className="App">
//       {/* Page Preloder */}
//       <div className="preloder">
//         <div className="loader"></div>
//       </div>

//       {/* Offcanvas Menu Section Begin */}
//       <div className="offcanvas-menu-overlay active"></div>
//       <div className="offcanvas-menu-wrapper">
//         <div className="canvas-close">
//           <i className="fa fa-close"></i>
//         </div>
//         <div className="canvas-search search-switch">
//           <i className="fa fa-search"></i>
//         </div>
//         <nav className="canvas-menu mobile-menu">
//           <ul>
//             <li>
//               <Link to="/">Inicio</Link>
//             </li>
//             <li>
//               <Link to="/Sobre">Sobre Nós</Link>
//             </li>
//             <li>
//               <Link to="/Details">Aulas</Link>
//             </li>
//             <li>
//               <Link to="/Servicos">Servicos</Link>
//             </li>
//             <li>
//               <Link to="/NossoTime">Nosso Time</Link>
//             </li>
//             <li>
//               <Link to="/Calcular">Paginas</Link>
//               <ul className="dropdow">
//                 <li>
//                   <Link to="/Sobre">Sobre Nós</Link>
//                 </li>
//                 <li>
//                   <Link to="/Horarios">Horarios</Link>
//                 </li>
//                 <li>
//                   <Link to="/Calcular">Calculadora de IMC</Link>
//                 </li>
//                 <li>
//                   <Link to="/NossoTime">Nosso Time</Link>
//                 </li>
//                 <li>
//                   <Link to="/Galeria">Galeria</Link>
//                 </li>
//                 <li>
//                   <Link to="/NossoBlog">Nosso Blog</Link>
//                 </li>
//                 <li>
//                   <Link to="/404">404</Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link to="/Contato">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         <div id="mobile-menu-wrap">
//           <div className="slicknav_menu">
//             <nav
//               className="slicknav_nav slicknav_hidden"
//               aria-hidden="true"
//               role="menu"
//             >
//               <ul>
//                 <li>
//                   <Link to="/">Inicio</Link>
//                 </li>
//                 <li>
//                   <Link to="/Sobre">Sobre Nós</Link>
//                 </li>
//                 <li>
//                   <Link to="/Details">Aulas</Link>
//                 </li>
//                 <li>
//                   <Link to="/Servicos">Servicos</Link>
//                 </li>
//                 <li>
//                   <Link to="/NossoTime">Nosso Time</Link>
//                 </li>
//                 <li>
//                   <Link to="/Horarios">Horarios</Link>
//                 </li>
//                 <li>
//                   <Link to="/Calcular">Calculadora de IMC</Link>
//                 </li>
//                 <li>
//                   <Link to="/Galeria">Galeria</Link>
//                 </li>
//                 <li>
//                   <Link to="/NossoBlog">NossoBlog</Link>
//                 </li>
//                 <li>
//                   <Link to="/404">404</Link>
//                 </li>
//                 <li>
//                   <Link to="/Contato">Contato</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//         <div className="canvas-social">
//           <a href="#">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-twitter"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-youtube-play"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//       {/* Offcanvas Menu Section End */}

//       {/* Header Section Begin */}
//       <header className="header-section">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-3">
//               <div className="logo">
//                 <Link to="/">
//                   <img src={Logo} alt="Logotipo da academia" />
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <nav className="nav-menu">
//                 <ul>
//                   <li>
//                     <Link to="/">Inicio</Link>
//                   </li>
//                   <li>
//                     <Link to="/Sobre">Sobre Nós</Link>
//                   </li>
//                   <li>
//                     <Link to="/Details">Aulas</Link>
//                   </li>
//                   <li>
//                     <Link to="/Servicos">Servicos</Link>
//                   </li>
//                   <li>
//                     <Link to="/NossoTime">Nosso Time</Link>
//                   </li>
//                   <li className="active">
//                     <a href="/Calcular">Pages</a>
//                     <ul className="dropdown">
//                       <li>
//                         <Link to="/Sobre">Sobre Nós</Link>
//                       </li>
//                       <li>
//                         <Link to="/Horarios">Horarios</Link>
//                       </li>
//                       <li>
//                         <Link to="/Calcular">Calculadora de IMC</Link>
//                       </li>
//                       <li>
//                         <Link to="/NossoTime">Nosso Time</Link>
//                       </li>
//                       <li>
//                         <Link to="/Galeria">Galeria</Link>
//                       </li>
//                       <li>
//                         <Link to="/NossoBlog">Nosso Blog</Link>
//                       </li>
//                       <li>
//                         <Link to="/404">404</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/Contato">Contato</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//             <div className="col-lg-3">
//               <div className="top-option">
//                 <div className="to-social">
//                   <a href="#">
//                     <i className="fa fa-facebook"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-twitter"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-youtube-play"></i>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/evolucao.sports_/"
//                     target="_blank"
//                   >
//                     <i className="fa fa-instagram"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="canvas-open">
//             <i className="fa fa-bars"></i>
//           </div>
//         </div>
//       </header>
//       {/* Header End  */}

//       {/* Breadcrumb Section Begin  */}
//       <section
//         className="breadcrumb-section set-bg"
//         style={{ backgroundImage: `url(${Breadcrumb})` }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <div className="breadcrumb-text">
//                 <h2>Calculadora de IMC</h2>
//                 <div className="bt-option">
//                   <Link to="/">Inicio</Link>
//                   <Link to="/Calcular">Paginas</Link>
//                   <span>Calculadora de IMC</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Breadcrumb Section End  */}

//       {/* BMI Calculator Section Begin  */}
//       <section className="bmi-calculator-section spad">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="section-title chart-title">
//                 <span>EVOLUÇÃO SPORTS</span>
//                 <h2>TABELA DE CALCULADORA DE IMC</h2>
//               </div>
//               <div className="chart-table">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>IMC</th>
//                       <th>ESTADO DE PESO</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="point">Abaixo de 18.5</td>
//                       <td>Abaixo do peso</td>
//                     </tr>
//                     <tr>
//                       <td className="point">18.5 - 24.9</td>
//                       <td>Sudável</td>
//                     </tr>
//                     <tr>
//                       <td className="point">25.0 - 29.9</td>
//                       <td>Sobrepeso</td>
//                     </tr>
//                     <tr>
//                       <td className="point">30.0 - and Above</td>
//                       <td>Obeso</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="section-title chart-calculate-title">
//                 <span>VERIFIQUE SEU CORPO</span>
//                 <h2>CALCULE SEU IMC</h2>
//               </div>
//               <div className="chart-calculate-form">
//                 <p>
//                   O índice de massa corporal é uma medida internacional usada
//                   para calcular se uma pessoa está no peso ideal.
//                 </p>
//                 <form>
//                   <div className="row">
//                     <div className="col-sm-6">
//                       <input
//                         type="text"
//                         placeholder="Peso/kg"
//                         value={peso}
//                         onChange={(e) => setPeso(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-sm-6">
//                       <input
//                         type="text"
//                         placeholder="Altura/m"
//                         value={altura}
//                         onChange={(e) => setAltura(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-sm-6">
//                       <input type="text" placeholder="Idade *opcional*" />
//                     </div>
//                     <div className="col-sm-6">
//                       <input type="text" placeholder="Sexo *opcional*" />
//                     </div>
//                     <div className="col-lg-12"></div>
//                     <p>
//                       {mensagem} <br />
//                       {efeitos} <br />
//                       {imcMessage}
//                     </p>
//                     <button onClick={calcularIMC}>Calcular</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* BMI Calculator Section End  */}

//       {/* Get In Touch Section Begin  */}
//       <div className="gettouch-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="gt-text">
//                 <i className="fa fa-map-marker"></i>
//                 <p>
//                   Av. Santo Antônio
//                   <br />
//                   Capuchinhos, Feira de Santana - BA,
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="gt-text">
//                 <i className="fa fa-mobile"></i>
//                 <ul>
//                   <li>(75) 9702-3456</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="gt-text email">
//                 <i className="fa fa-envelope"></i>
//                 <p>EvolucaoSports@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Get In Touch Section End  */}

//       {/* Footer Section Begin  */}
//       <section className="footer-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="fs-about">
//                 <div className="fa-logo">
//                   <a href="#">
//                     <img src={Logo} alt="" />
//                   </a>
//                 </div>
//                 <p>
//                   A Evolução Sports é muito mais do que apenas uma academia
//                   comum; é um centro de transformação física e mental. Com uma
//                   ampla gama de modalidades e serviços disponíveis
//                 </p>
//                 <div className="fa-social">
//                   <a href="#">
//                     <i className="fa fa-facebook"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-twitter"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-youtube-play"></i>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/evolucao.sports_/"
//                     target="_blank"
//                   >
//                     <i className="fa fa-instagram"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fa  fa-envelope-o"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-6">
//               <div className="fs-widget">
//                 <h4>Dicas e Guias</h4>
//                 <div className="fw-recent">
//                   <h6>
//                     <a href="#">
//                       A aptidão física pode ajudar a prevenir a depressão e a
//                       ansiedade
//                     </a>
//                   </h6>
//                   <ul>
//                     <li>3 minutos de leitura</li>
//                     <li>20 Comentários</li>
//                   </ul>
//                 </div>
//                 <div className="fw-recent">
//                   <h6>
//                     <a href="#">
//                       Jiu Jitsu: A arte marcial suprema para eliminar a gordura
//                       abdominal e tonificar seu corpo enquanto domina
//                       habilidades de autodefesa.
//                     </a>
//                   </h6>
//                   <ul>
//                     <li>3 minutos de leitura</li>
//                     <li>20 Comentários</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <div className="copyright-text">
//                 <p>
//                   Copyright &copy;
//                   <script>document.write(new Date().getFullYear());</script> All
//                   rights reserved | This is made with
//                   <i className="fa fa-heart" aria-hidden="true"></i> Isis
//                   <a href="https://colorlib.com" target="_blank"></a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer Section End  */}

//       {/* Search model Begin  */}
//       <div className="search-model">
//         <div className="h-100 d-flex align-items-center justify-content-center">
//           <div className="search-close-switch">+</div>
//           <form className="search-model-form">
//             <input
//               type="text"
//               id="search-input"
//               placeholder="Search here....."
//             />
//           </form>
//         </div>
//       </div>
//       {/* Search model end  */}
//     </div>
//   );
// }

// export default Calcular;
