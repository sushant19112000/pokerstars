export default function Hero() {
    return (
      <div className="container-fluid background-image-container d-flex justify-content-end">
      <div className="text-container" style={{ backgroundColor: "transparent" }}>
        <div className="item hero-item1">
          <div className="mb-2">
            <span
              className="font-druk col-white"
              style={{ fontSize: "40.6167px", fontWeight: 600 }}
            >
              OFFRE DE BIENVENUE
            </span>
          </div>
          <div className="mb-2">
            <span
              className="font-druk"
              style={{ color: "rgb(53, 185, 227)", fontSize: 60, fontWeight: 700 }}
            >
              RECEVEZ JUSQU'À
              <br />
              100&nbsp;€ EN FREEBETS
            </span>
          </div>
          <div className="mb-2">
            <span
              className="font-druk col-white"
              style={{ fontSize: "40.6167px", fontWeight: 600 }}
            >
              SI VOTRE PREMIER PARI EST PERDANT
            </span>
          </div>
          <p
            className="terms-heading font-roboto"
            style={{
              color: "rgb(197, 197, 197)",
              fontSize: "22.2333px",
              fontWeight: 400
            }}
          >
            Dépôt valable requis. Ne s'applique qu’à votre tout premier pari
            sportif, si celui-ci est perdant. Deux&nbsp;freebets auront la même
            valeur combinée que votre mise, jusqu'à 100&nbsp;€. Les freebets
            expirent sous sept&nbsp;jours et ne peuvent faire l’objet d’un retrait.{" "}
            <a className="col-aqua-1" href="#terms" target="_self">
              Voir conditions.
            </a>
          </p>
        </div>
        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "#02bd9c",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              width: 400,
              borderRadius: 18,
              height: 40,
              fontWeight: 500,
              fontSize: 18
            }}
          >
            S'INSCRIRE
          </button>
        </div>
      </div>
    </div>
    
    );
}