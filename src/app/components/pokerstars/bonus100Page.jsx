import "./main.css";

export default function Bonus100Page() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <section
        className="container-fluid background-image-container d-flex justify-content-end align-items-center"
        style={{
          backgroundImage: "url('/pokerimages/firstlinkhero.jpg')",
          padding: "20px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text-container"
          style={{
            backgroundColor: "transparent",
            maxWidth: "700px",
            color: "white",
          }}
        >
          <div className="item hero-item1" style={{ marginBottom: "20px" }}>
            <div className="mb-3">
              <span
                className="font-druk col-white"
                style={{ fontSize: "40.6167px", fontWeight: 600 }}
              >
                REJOIGNEZ POKERSTARS
              </span>
            </div>
            <div className="mb-3">
              <span
                className="font-druk"
                style={{
                  color: "#D70022",
                  fontSize: 60,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                BONUS DE PREMIER DÉPÔT DE 100% JUSQU'À 100 €
              </span>
            </div>
            <div className="mb-3">
              <span
                className="font-druk col-white"
                style={{
                  fontSize: "30.6167px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                UTILISEZ LE CODE BONUS « STARS100 «
              </span>
            </div>
            <p
              className="terms-heading font-roboto"
              style={{
                color: "rgb(197, 197, 197)",
                fontSize: "22.2333px",
                fontWeight: 400,
              }}
            >
              Réservé aux joueurs effectuant leur premier dépôt, Dépôt min. de
              10 € avec le code STARS100. Aucun retrait durant la période du
              bonus.
              <a
                className="col-aqua-1"
                style={{ color: "#35b9e3" }}
                href="#terms"
                target="_self"
              >
                Voir conditions.
              </a>
            </p>
          </div>
          <div>
            <button
              className="btn"
              style={{
                backgroundColor: "#FFDD00",
                color: "#000000",
                fontFamily: "Roboto, sans-serif",
                width: 400,
                borderRadius: 18,
                height: 40,
                fontWeight: 700,
                fontSize: 18,
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              S'INSCRIRE
            </button>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .font-roboto {{\n            font-family: 'Roboto', sans-serif;\n           \n    }}\n    ",
        }}
      />
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#d70a0a" }}
      ></div>

      {/* <Section2 /> */}

      <section className="container pt-5 pb-3 font-druk">
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            PREMIERS PAS
          </span>
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
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  1. Inscrivez-vous
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Inscrivez-vous pour jouer à vos jeux préférés.
                </p>
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
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  2. Déposez
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Déposez jusqu’à 100 € avec le code « STARS100 ».
                </p>
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
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  3. Rejoignez l'action
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Jouez à vos jeux préférés contre des milliers de joueurs pour
                  débloquer votre bonus de 100 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Section3 /> */}

      <section
        className="container pt-5 pb-3 font-druk"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            REJOIGNEZ LE TEMPLE DU POKER EN LIGNE
          </span>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 ">
          <div className="col-12 col-lg-6">
            <picture>
              <img
                className="img-fluid "
                loading="lazy"
                src="/pokerimages/acor.jpg"
                alt="About 2"
                style={{ height: "450px" }}
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
      </section>

      {/* <Carousel /> */}

      <section className="container pt-5 pb-3 font-druk">
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            PREMIERS PAS
          </span>
        </div>
        <p className="pb-4" style={{ color: "#000000", fontWeight: "600" }}>
          Avec de nouvelles parties à chaque seconde, vous êtes certain d'y
          trouver votre compte.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card ">
              <img
                src="/pokerimages/caro1.avif"
                className="card-img-top carousel-image"
                alt="Jeu 1"
                style={{ height: "300px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <img
                src="/pokerimages/caro2.avif"
                className="card-img-top carousel-image"
                alt="Jeu 2"
                style={{ height: "300px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <img
                src="/pokerimages/caro3.avif"
                className="card-img-top carousel-image "
                alt="Jeu 3"
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .font-roboto {{\n            font-family: 'Roboto', sans-serif;\n           \n    }}\n    ",
        }}
      />
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#d70a0a" }}
      ></div>

      {/* <Heading /> */}
      <section style={{ backgroundColor: "#000000", color: "#ffffff" }}>
        <div className="container pt-5 pb-3 font-druk">
          <div className=" pb-3">
            <span
              className="font-druk"
              style={{ color: "#ffffff", fontWeight: 800, fontSize: 30 }}
            >
              À PROPOS DE L’OFFRE
            </span>
          </div>
          <p style={{ fontWeight: "600" }}>
            Rejoignez PokerStars. Déposez 10 € ou plus en utilisant le code «
            STARS100 » et profitez de votre bonus pouvant aller jusqu’à 100 €.
            C'est aussi simple que ça. Lisez la suite pour en savoir plus.
          </p>
        </div>
      </section>

      {/* <Info /> */}

      <section className="container" style={{ color: "black" }}>
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            Modalités
          </span>
        </div>

        <div className="_7544861">
          <p>
            <u>
              <span
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Ce qui est proposé
              </span>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Les joueurs qui effectuent leur tout premier dépôt d'argent réel
            d'au moins 10&nbsp;€ avec le code bonus «&nbsp;STARS100&nbsp;»
            peuvent bénéficier d’un bonus pouvant aller jusqu’à 100&nbsp;€.
          </p>
          <p>
            <u>
              <strong
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Dates de l’offre
              </strong>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            L'offre est valable depuis le 7&nbsp;décembre&nbsp;2022 à
            00h00&nbsp;CET.
          </p>
          <p>
            <u>
              <strong
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Qui peut participer et comment devenir éligible à cette offre
              </strong>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Cette offre n'est accessible qu'aux joueurs n'ayant jamais effectué
            de dépôt en argent réel sur PokerStars.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Pour être éligible à l’offre, les joueurs doivent&nbsp;:
          </p>
          <ul>
            <li style={{ color: "#000000", fontWeight: "600" }}>
              effectuer un dépôt de 10&nbsp;€ ou plus en utilisant le code bonus
              «&nbsp;STARS100&nbsp;» dans le Caissier&nbsp;;
            </li>
            <li style={{ color: "#000000", fontWeight: "600" }}>
              jouer au poker en argent réel sur le site sous 120&nbsp;jours
              après avoir effectué le dépôt qualifiant&nbsp;; et
            </li>
            <li style={{ color: "#000000", fontWeight: "600" }}>
              accumuler les points d'échange requis (comme indiqué ci-dessous)
              au cours de la période de quatre&nbsp;mois.
            </li>
          </ul>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Les joueurs peuvent effectuer jusqu'à trois&nbsp;dépôts qualifiants
            pour recevoir la récompense maximale payable dans le cadre de cette
            offre, à condition que tous les dépôts qualifiants&nbsp;: (i) soient
            effectués dans une période de 60&nbsp;(soixante)&nbsp;jours à partir
            de la date du premier dépôt qualifiant&nbsp;; et (ii) soient
            effectués en utilisant le code bonus «&nbsp;STARS100&nbsp;».
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Si, après avoir effectué leur premier dépôt qualifiant, les joueurs
            activent une autre offre de dépôt avant d’avoir effectué d'autres
            dépôts qualifiants permis dans le cadre de cette offre, ils devront
            alors&nbsp;: (i) s'assurer que tous les dépôts qualifiants permis
            par cette offre soient effectués dans les 60&nbsp;jours à compter de
            la date du premier dépôt qualifiant&nbsp;; et (ii) remplir tous les
            critères nécessaires tels que définis dans ces modalités.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Si aucun code n’est utilisé lors d’un dépôt qualifiant et sous
            réserve de remplir toutes les conditions applicables de cette offre,
            alors&nbsp;:
          </p>
          <ol>
            <li style={{ color: "#000000", fontWeight: "600" }}>
              les joueurs peuvent contacter le support via notre{" "}
              <a href="/help/" target="_self">
                centre d’aide
              </a>{" "}
              dans un délai de sept&nbsp;jours à compter de la date de leur
              premier dépôt qualifiant pour que leur Compte&nbsp;Stars puisse
              être crédité de la récompense correspondante&nbsp;; ou
            </li>
            <li style={{ color: "#000000", fontWeight: "600" }}>
              si plus de sept&nbsp;jours, mais moins de trois&nbsp;mois, se sont
              écoulés depuis la date du premier dépôt qualifiant, les joueurs
              peuvent tout de même être crédités de la récompense correspondante
              à condition de contacter le support avant la fin de ce délai de
              trois&nbsp;mois.
            </li>
          </ol>
          <p>
            <u>
              <strong
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Comment profiter de l’offre
              </strong>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            La récompense sera payée par tranche de 5&nbsp;€ (ou l’équivalent
            dans une autre devise) du dépôt qualifiant effectué immédiatement
            après que les conditions de mise auront été remplies. Les joueurs
            disposeront de quatre&nbsp;mois pour remporter les points d’échange
            requis pour débloquer leur bonus.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Le montant de la récompense que les joueurs peuvent recevoir dépend
            du nombre de points d’échange qu'ils obtiennent pendant la période
            concernée. Aucune récompense ne sera créditée si un délai de
            quatre&nbsp;mois à compter du premier dépôt qualifiant est dépassé.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Les joueurs peuvent visualiser tous leurs bonus, ainsi que les
            informations sur les dates d’expiration, les conditions relatives
            aux points d'échange et d’autres informations, dans le menu
            «&nbsp;Mes&nbsp;Récompenses&nbsp;».
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            <u>
              <strong
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Conditions de mise et limites par type de jeu
              </strong>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Le taux de libération de la récompense est de 5&nbsp;€ tous les
            75&nbsp;points d’échange.
          </p>
          <p>
            <u>
              <strong
                style={{ fontWeight: "900", color: "black", fontSize: "20px" }}
              >
                Ce qu'il faut également savoir
              </strong>
            </u>
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Si un montant est retiré après qu’un dépôt éligible a été effectué,
            aucun dépôt ultérieur ne pourra être pris en compte en tant que
            dépôt qualifiant. Toutefois, tout dépôt qualifiant fait avant le
            retrait restera valable et les joueurs pourront quand même recevoir
            toute récompense générée.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Nous nous réservons le droit de suspendre les attributions de
            récompenses à la moindre suspicion de dépôt frauduleux, ou qui
            n'aurait pas été fait avec l'intention de le dépenser en jouant en
            argent réel.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Les joueurs ne peuvent bénéficier que d’une seule offre de premier
            dépôt sur tous les produits PokerStars.
          </p>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            Cliquez{" "}
            <a href="/poker/promotions/terms/" target="_self">
              ici
            </a>{" "}
            pour consulter les modalités générales des promotions.&nbsp;
          </p>
        </div>
      </section>
    </main>
  );
}
