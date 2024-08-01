export default function Section3() {
  return (
    <section className="py-3 py-md-5" style={{ color: "black" ,backgroundColor:"#FEFBEA"}}>
      <div className="container">
        <h1 className="pb-4" style={{ fontWeight: "bolder" }}>
          REJOIGNEZ LE TEMPLE DU POKER EN LIGNE
        </h1>
        <div className="row gy-3 gy-md-4 gy-lg-0 ">
          <div className="col-12 col-lg-6">
            <picture>
              <img
                className="img-fluid "
                loading="lazy"
                src="/accordion-image.jpg"
                alt="About 2"
              />
            </picture>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-xl-10">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item bg-transparent">
                    <h2 className="accordion-header " id="flush-headingOne">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        style={{ fontWeight: "bolder" }}
                      >
                        Un environnement de jeu sûr et sécurisé
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse bg-transparent"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body ">
                        Déposez, retirez et jouez, tout en sachant que nos
                        systèmes de sécurité vous garantissent une protection
                        optimale.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                        style={{ fontWeight: "bolder" }}
                      >
                        Retraits rapides
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse bg-transparent"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Accès facile à vos fonds à tout moment.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                        style={{ fontWeight: "bolder" }}
                      >
                        Support client 24/7
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse bg-transparent"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Vous avez besoin d'un peu d'aide ? Nous sommes là pour
                        vous. Toute la journée. Tous les jours.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
