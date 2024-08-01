import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to include Bootstrap CSS

export default function Section2() {
  return (
    <section>
      <div className="container">
        <div className="py-3">
          <h1 className="font-weight-bold" style={{ fontWeight: "bolder" }}>
            PREMIERS PAS
          </h1>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center py-3">
              <picture>
                <img
                  alt="Inscrivez-vous"
                  src="/cards-icon.svg"
                  className="img-fluid"
                  style={{ height: "80px", width: "100px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold "
                  style={{ fontWeight: "bolder" }}
                >
                  1. Inscrivez-vous
                </h5>
                <p>Inscrivez-vous pour jouer à vos jeux préférés.</p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center py-3">
              <picture>
                <img
                  alt="Déposez"
                  src="/slots-icon.svg"
                  className="img-fluid"
                  style={{ height: "80px", width: "100px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold"
                  style={{ fontWeight: "bolder" }}
                >
                  2. Déposez
                </h5>
                <p>Déposez jusqu’à 100 € avec le code « STARS100 ».</p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center py-3">
              <picture>
                <img
                  alt="Rejoignez l'action"
                  src="/gift-icon.svg"
                  className="img-fluid"
                  style={{ height: "150px", width: "150px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold"
                  style={{ fontWeight: "bolder" }}
                >
                  3. Rejoignez l'action
                </h5>
                <p>
                  Jouez à vos jeux préférés contre des milliers de joueurs pour
                  débloquer votre bonus de 100 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
