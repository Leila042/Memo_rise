import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Section Header */}
      <header className="jumbotron jumbotron-fluid text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4">Bienvenue sur MemoRise</h1>
          <p className="lead">Votre plateforme d'apprentissage intelligente</p>
          <a href="#features" className="btn btn-light btn-lg mt-3">Découvrez plus</a>
        </div>
      </header>

      {/* Section Features */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-book-open fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Des cours variés</h5>
                  <p className="card-text">Accédez à une multitude de cours pour enrichir vos connaissances.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-chalkboard-teacher fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Des experts qualifiés</h5>
                  <p className="card-text">Apprenez auprès des meilleurs experts dans chaque domaine.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-award fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Certifications reconnues</h5>
                  <p className="card-text">Obtenez des certifications pour valider vos compétences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2>Rejoignez notre communauté</h2>
          <p className="lead">Commencez votre parcours d'apprentissage avec MemoRise dès aujourd'hui.</p>
          <a href="/register" className="btn btn-light btn-lg">Inscrivez-vous maintenant</a>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
