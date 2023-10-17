import React from "react";

function Preco() {
  return (
    <div className="App">
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
    </div>
  );
}

export default Preco;
