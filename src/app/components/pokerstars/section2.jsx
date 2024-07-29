export default function Section2() {
  return (
    <section >
      <div className="container ">
        <div className="py-3">
          <h1  style={{ fontWeight: "bolder" }}>
            PREMIERS PAS
          </h1>
        </div>
        <div >
          <div className="d-flex">
            <div className="d-flex">
              <picture>
                <img
                  alt="team"
                  
                  src="/cards-icon.svg"
                  style={{ height: "80px", width: "100px" }}
                />
              </picture>
              <div className="px-3">
                <h5 className="pb-2" style={{ fontWeight: "bolder" }}>
                  {" "}
                  1. Inscrivez-vous
                </h5>
                <p  style={{ maxWidth: "300px" }}>
                  Inscrivez-vous pour jouer à vos jeux préférés.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <picture>
                <img
                  alt="team"
                  
                  src="/slots-icon.svg"
                  style={{ height: "80px", width: "100px" }}
                />
              </picture>
              <div className="px-3">
                <h5 className="pb-2" style={{ fontWeight: "bolder" }}>
                  2. Déposez
                </h5>
                <p  style={{ maxWidth: "300px" }}>
                  Déposez jusqu’à 100 € avec le code « STARS100 ».
                </p>
              </div>
            </div>
            <div className="d-flex">
              <picture>
                <img
                  alt="team"
                  
                  src="/gift-icon.svg"
                  style={{ height: "80px", width: "100px" }}
                />
              </picture>
              <div className="px-3">
                <h5 className="pb-2" style={{ fontWeight: "bolder" }}>
                  3. Rejoignez l'action
                </h5>
                <p  style={{ maxWidth: "300px" }}>
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
