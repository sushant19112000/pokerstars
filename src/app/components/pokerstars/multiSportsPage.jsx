import "./main.css";

export default function MultiSports() {
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
            maxWidth: "40%",
            color: "white",
          }}
        >
          <div className="item hero-item1" style={{ marginBottom: "20px" }}>
            <div className="mb-3">
              <span
                className="font-druk col-white"
                style={{ fontSize: "35.6167px", fontWeight: 600 }}
              >
                OFFRE DE BIENVENUE
              </span>
            </div>
            <div className="mb-3 col-md-8">
              <span
                className="font-druk"
                style={{
                  color: "#35B9E3",
                  fontSize: 50,
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                RECEVEZ JUSQU'À 100 € EN FREEBETS
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
                SI VOTRE PREMIER PARI EST PERDANT
              </span>
            </div>
            <p
              className="terms-heading font-roboto col-11"
              style={{
                color: "rgb(197, 197, 197)",
                fontSize: "19.2333px",
                fontWeight: 400,
              }}
            >
              Dépôt valable requis. Ne s'applique qu’à votre tout premier pari
              sportif, si celui-ci est perdant. Deux freebets auront la même
              valeur combinée que votre mise, jusqu'à 100 €. Les freebets
              expirent sous sept jours et ne peuvent faire l’objet d’un retrait.
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

      {/* <Premierspas/> */}
      <section style={{ backgroundColor: "" }}>
        <div className="container pt-5 pb-3">
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
              {/* <div className="col-md-4 d-flex align-items-center py-3">
                <picture>
                  <img
                    alt="Inscrivez-vous"
                    src="/pokerimages/1._Register.svg"
                    className="img-fluid"
                    style={{ height: "80px", width: "100px" }}
                  />
                </picture>
                <div className="px-3">
                  <h5
                    className="pb-2 font-weight-bold "
                    style={{ color: "#000000", fontWeight: "bolder" }}
                  >
                    1. INSCRIVEZ-VOUS
                  </h5>
                  <p style={{ color: "#000000", fontWeight: "600" }}>
                    Connectez-vous pour profiter de notre offre de bienvenue.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center py-3">

                <picture>
                  <img
                    alt="Déposez"
                    src="/pokerimages/2._Free_bets.svg"
                    className="img-fluid"
                    style={{ height: "250px", width: "250px" }}
                  />
                </picture>
                <div className="px-3">
                  <h5
                    className="pb-2 font-weight-bold"
                    style={{ color: "#000000", fontWeight: "bolder" }}
                  >
                    2. Recevez jusqu'à 100 € en freebets
                  </h5>
                  <p style={{ color: "#000000", fontWeight: "600" }}>
                    Si votre premier pari sportif est perdant, nous égalons
                    votre mise jusqu'à 100 € sous forme de freebets. Deux
                    freebets auront la même valeur combinée que votre mise,
                    jusqu'à 100 €.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center py-3">
                <picture>
                  <img
                    alt="Rejoignez l'action"
                    src="/pokerimages/3._Tickets.svg"
                    className="img-fluid"
                    style={{ height: "150px", width: "150px" }}
                  />
                </picture>
                <div className="px-3">
                  <h5
                    className="pb-2 font-weight-bold"
                    style={{ color: "#000000", fontWeight: "bolder" }}
                  >
                    3. Profitez de nombreux marchés
                  </h5>
                  <p style={{ color: "#000000", fontWeight: "600" }}>
                    Utilisez vos freebets sur le sport de votre choix sous sept
                    jours.
                  </p>
                </div>
              </div> */}

              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="row justify-content-center">
                    <div className="col-md-3 mb-2 ">
                      <img src="/pokerstars_media/1._Register.svg" height={80} width={80} />
                    </div>
                    <div className="col-md-9">
                      <div className="mb-4">
                        <span
                          className=" font-druk"
                          style={{ fontSize: 17, color: "RGB(0, 0, 0)", fontWeight: 600 }}
                        >
                          1. INSCRIVEZ-VOUS
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                            fontSize: 14,
                            color: "black",
                            fontWeight: 500
                          }}
                        >
                          Connectez-vous pour profiter de notre offre de bienvenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-3 mb-2">
                      <img src="/pokerstars_media/2._Free_bets.svg" height={80} width={80} />
                    </div>
                    <div className="col-md-9">
                      <div className="mb-2 " style={{ fontSize: 20 }}>
                        <span
                          className=" font-druk"
                          style={{ fontSize: 17, color: "RGB(0, 0, 0)", fontWeight: 600 }}
                        >
                          2. Recevez jusqu'à 100 € en freebets
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                            fontSize: 14,
                            color: "black",
                            fontWeight: 500,
                            textAlign: "justify"
                          }}
                        >
                          Si votre premier pari sportif est perdant, nous égalons votre mise
                          jusqu'à 100 € sous forme de freebets. Deux freebets auront la même
                          valeur combinée que votre mise, jusqu'à 100 €.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-3 mb-2">
                      <img src="/pokerstars_media/3._Tickets.svg" height={80} width={80} />
                    </div>
                    <div className="col-md-9">
                      <div className="mb-2 " style={{ fontSize: 20 }}>
                        <span
                          className=" font-druk"
                          style={{ fontSize: 17, color: "RGB(0, 0, 0)", fontWeight: 600 }}
                        >
                          3. Profitez de nombreux marchés
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                            fontSize: 14,
                            color: "black",
                            fontWeight: 500
                          }}
                        >
                          Utilisez vos freebets sur le sport de votre choix sous sept jours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container pt-5 pb-3">
          <div className=" pb-3">
            <span
              className="font-druk"
              style={{ color: "black", fontWeight: 800, fontSize: 30 }}
            >
              PAYEZ ET JOUEZ À VOTRE FAÇON
            </span>
          </div>
          <div className="row">
            <div className="col-md-2  text-center text-start">
              <img
                src="/pokerstars_media/visa_debit.webp"
                className="img-fluid"
                alt="Image 1"
              />
            </div>
            <div className="col-md-2 text-center text-start">
              <img
                src="/pokerstars_media/Mastercard.webp"
                className="img-fluid"
                alt="Image 2"
              />
            </div>
            <div className="col-md-2 text-center text-start">
              <img
                src="/pokerstars_media/PaySafeCard.png"
                className="img-fluid"
                alt="Image 3"
              />
            </div>
            <div className="col-md-2 text-center text-start">
              <img
                src="/pokerstars_media/ApplePay.webp"
                className="img-fluid"
                alt="Image 4"
              />
            </div>
            <div className="col-md-2 text-center text-start">
              <img
                src="/pokerstars_media/PayPal.webp"
                className="img-fluid"
                alt="Image 5"
              />
            </div>
            <div className="col-md-2 text-center text-start">
              <img
                src="/pokerstars_media/neosurf.webp"
                className="img-fluid"
                alt="Image 6"
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#f5f5f5 !important" }}>
          <div className="container pt-5 pb-3">
            <div className=" pb-3">
              <span
                className="font-druk"
                style={{ color: "black", fontWeight: 800, fontSize: 30 }}
              >
                TOUS VOS SPORTS PRÉFÉRÉS
              </span>
            </div>
            <div className="row">
              <div className="col-4 col-md-3" >
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-md-4 mb-2">
                        <img
                          src="/pokerstars_media/basketball.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Basketball
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/football.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Football
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/tennis.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className=" col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Tennis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src="/pokerstars_media/american-football.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-9">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Football américain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/rugby-union.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Rugby
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/handball.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Handball
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/volleyball.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          Volleyball
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="/pokerstars_media/Add.png"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="col-md-8">
                        <p
                          style={{
                            color: "RGB(68, 68, 68)",
                            fontWeight: 700,
                            fontSize: 14,
                            fontFamily:
                              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                          }}
                        >
                          et plus encore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Carousel2/> */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .font-roboto {{\n            font-family: 'Roboto', sans-serif;\n           \n    }}\n    ",
        }}
      />
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#d70a0a" }}
      ></div>

      <section className="container pt-5 pb-3">
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            VOUS EN VOULEZ ENCORE ?
          </span>
        </div>
        <p className="pb-4" style={{ color: "#000000", fontWeight: "600" }}></p>
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

      {/* <Info2/> */}

      <section className="container my-5">
        <div>
          <div className="">
            {/* <div className=" d-flex">
              <div className=" d-flex">
                <div className=" d-flex">
                  <div className=" d-flex pe-4">
                    <img
                      src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt305e84a4a6ddeb66/63319f9c336df11e17fec5fa/USP_1_Secure.svg"
                      alt=""
                      width={45}
                      height={45}
                      className=""
                    />
                  </div>
                  <div className=" d-flex">
                    <div className=" d-flex">
                      <p
                        style={{
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 0,
                        }}
                      >
                        <strong>De l'action en ligne sûre et sécurisée.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-flex">
                <div className=" d-flex">
                  <div className=" d-flex pe-4">
                    <img
                      src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltcd5759bfe9a0b686/63319f9cf709a318104f78fc/USP_2_Choice.svg"
                      alt=""
                      width={45}
                      height={45}
                      className=""
                    />
                  </div>
                  <div className=" d-flex">
                    <div className=" d-flex">
                      <p
                        style={{
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 0,
                        }}
                      >
                        <strong>
                          Des paris sportifs en ligne sur l’appareil de votre
                          choix.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-flex">
                <div className=" d-flex">
                  <div className=" d-flex pe-4">
                    <img
                      src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltac51a417f7ad3d37/63319f9c5710672259b3d721/USP_3_Live_chat.svg"
                      alt=""
                      width={45}
                      height={45}
                      className=""
                    />
                  </div>
                  <div className=" d-flex">
                    <div className=" d-flex">
                      <p
                        style={{
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 0,
                        }}
                      >
                        <strong>
                          Une équipe de support client dédiée, à votre service
                          24/7.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div class="row justify-content-center">
              <div class="col-9 text-center text-md-start col-md-4 mb-5 ">
                <div class="row">
                  <div class="col-md-2 mb-2">
                    <img src="/pokerstars_media/USP_1_Secure.svg" height="45" width="45" />
                  </div>
                  <div class="col-md-10">
                    De l'action en ligne sûre et sécurisée.
                  </div>
                </div>
              </div>

              <div class="col-9  col-md-4  text-center text-md-start mb-3 mb-5 ">
                <div class="row">
                  <div class="col-md-2 mb-2">
                    <img src="/pokerstars_media/USP_2_Choice.svg" height="45" width="45" />
                  </div>
                  <div class="col-md-10">
                    Des paris sportifs en ligne sur l’appareil de votre choix.
                  </div>
                </div>
              </div>


              <div class="col-9  text-center text-md-start  col-md-4">
                <div class="row">
                  <div class="col-md-2 mb-2">
                    <img src="/pokerstars_media/USP_3_Live_chat.svg" height="45" width="45" />
                  </div>
                  <div class="col-md-10">
                  Une équipe de support client dédiée, à votre service 24/7.
                  </div>
                </div>
              </div>


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

      <section
        className="container pt-5 pb-3 font-druk"
        style={{ color: "black" }}
      >
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            Modalités
          </span>
        </div>

        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
            className="font-druk"
            style={{
              fontSize: "20px",
              fontStyle: "bold",
              color: "#000000",
              fontWeight: "900",
            }}
          >
            Ce qui est proposé
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Les nouveaux clients qui placent leur premier pari sportif peuvent
          voir leur mise égalée jusqu’à 100&nbsp;€, sous forme de
          deux&nbsp;freebets, si leur pari est perdant.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
           className="font-druk"
            style={{
              fontSize: "20px",
              fontStyle: "bold",
              color: "#000000",
              fontWeight: "900",
            }}
          >
            Dates de l'offre
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          L'offre est valable depuis le 7&nbsp;août 2023 à 10h00&nbsp;CEST.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
           className="font-druk"
            style={{
              fontSize: "20px",
              fontStyle: "bold",
              color: "#000000",
              fontWeight: "900",
            }}
          >
            Qui peut participer et comment devenir éligible à cette offre
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Seuls les clients qui ont ouvert un nouveau Compte&nbsp;Stars via le
          produit de paris sportifs après le 7&nbsp;août 2023 à 10h00&nbsp;CEST
          et qui ont effectué un dépôt valable peuvent bénéficier de cette
          offre.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Vous ne pouvez profiter que d’une seule Offre de Bienvenue Sports. Si
          vous avez déjà profité d’une autre Offre de Bienvenue Sports, vous
          n’êtes donc pas éligible à cette offre.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          L’offre ne s'applique qu’à votre tout premier pari sportif. Si
          celui-ci est perdant, vous recevrez deux&nbsp;freebets dont le montant
          total équivaudra à votre mise, jusqu'à 100&nbsp;€.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Le pari éligible doit être réglé dans les 90&nbsp;jours qui suivent
          votre inscription.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Les paris placés avec des freebets, les paris retirés avec l’option
          Cash Out et les paris annulés ne sont pas pris en compte.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
            style={{ fontSize: "10px", color: "#000000", fontWeight: "900" }}
          >
            Conditions de mise et limites par type de jeu
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Une cote minimale de 1,50 et une mise minimale de 1&nbsp;€ sont
          appliquées à tous les paris éligibles.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
           className="font-druk"
            style={{
              fontSize: "20px",
              fontStyle: "bold",
              color: "#000000",
              fontWeight: "900",
            }}
          >
            Comment profiter de l'offre
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Votre premier freebet sera crédité immédiatement après le paiement de
          votre premier pari. Votre deuxième&nbsp;freebet sera crédité après le
          paiement de vos cinq&nbsp;premiers paris sportifs. Le montant de
          chaque freebet représente 50&nbsp;% de votre premier pari.
          Exemple&nbsp;: si vous placez un premier pari sportif de 100&nbsp;€ et
          que celui-ci est perdant, vous recevrez un freebet de 50&nbsp;€
          aussitôt votre premier pari payé et un autre freebet de 50&nbsp;€
          après le paiement de vos cinq&nbsp;premiers paris sportifs.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Le montant maximal des freebets attribué est de 100&nbsp;€ au total et
          par client.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Le ou les freebets peuvent être utilisés sur n'importe quel sport. La
          mise des freebets n'est pas incluse dans les retours.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Le ou les freebets ne peuvent pas être retirés ni utilisés sur des
          paris système (ex.&nbsp;: Yankee, Lucky 15, etc.).
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Le ou les freebets expireront sept&nbsp;jours après avoir été
          crédités.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          <span
           className="font-druk"
            style={{
              fontSize: "20px",
              fontStyle: "bold",
              color: "#000000",
              fontWeight: "900",
            }}
          >
            Ce qu'il faut également savoir
          </span>
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Vous trouverez votre ou vos freebets sous l'onglet
          «&nbsp;Freebets&nbsp;» de votre compte, qui se trouve à côté du
          bulletin de pari.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Si vous avez déjà un Compte&nbsp;Stars pour jouer au poker, veuillez
          consulter la{" "}
          <a href="/sports/?modal=/account/ice/challenges/">fenêtre Défis</a>{" "}
          pour voir votre Offre de Bienvenue Sports exclusive.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Lorsqu'il y a la preuve qu'une série de paris, placés par des clients
          uniques sur le même résultat, sont liés par le même site référent, le
          même service de messagerie, service d'alerte arbitrage ou système de
          mise, alors nous nous réservons le droit de ne pas proposer le freebet
          à ces clients.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Cette offre ne peut pas être utilisée en conjonction avec, ou rendre
          éligible à, une autre offre que nous organisons.
        </p>
        <p style={{ color: "#000000", fontWeight: "600" }}>
          Cliquez&nbsp;<a href="/sports/promotions/terms/">ici</a>&nbsp;pour
          consulter les modalités générales.
        </p>
        <p />
      </section>
    </main>
  );
}
