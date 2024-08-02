import "./main.css";

export default function RebatePage() {
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
          className="text-container "
          style={{
            backgroundColor: "transparent",
            maxWidth: "600px",
            color: "white"

          }}
        >
          <div className="item hero-item1" style={{ marginBottom: "20px" }}>
            <div className="mb-3">
              <span
                className="font-druk col-white"
                style={{ fontSize: "40.6167px", fontWeight: 600 }}
              >
                CREA TU CUENTA EN POKERSTARS
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
                CONSIGUE HASTA 200 € EXTRA
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
                USA EL CÓDIGO "STARS200"
              </span>
            </div>

            <a
              className="col-aqua-1"
              style={{
                color: "#35b9e3",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "900",
              }}
              href="#terms"
              target="_self"
            >
              Sujeto a condiciones.
            </a>
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
              Descargar
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

      <section className="container pt-5 pb-3 font-druk">
        <div className=" pb-3">
          <span
            className="font-druk"
            style={{ color: "black", fontWeight: 800, fontSize: 30 }}
          >
            CÓMO EMPEZAR
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
                  style={{ height: "220px", width: "250px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold "
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  Crea tu cuenta
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Instala nuestro galardonado software o aplicación. A
                  continuación, sigue unos sencillos pasos para crear tu cuenta.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center py-3">
              <picture>
                <img
                  alt="Déposez"
                  src="/slots-icon.svg"
                  className="img-fluid"
                  style={{ height: "180px", width: "210px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold"
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  Deposita
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Ve al Cajero y realiza un depósito de hasta 200 € con el
                  código "STARS200".
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center py-3">
              <picture>
                <img
                  alt="Rejoignez l'action"
                  src="/gift-icon.svg"
                  className="img-fluid"
                  style={{ height: "220px", width: "250px" }}
                />
              </picture>
              <div className="px-3">
                <h5
                  className="pb-2 font-weight-bold"
                  style={{ color: "#000000", fontWeight: "bolder" }}
                >
                  Juega
                </h5>
                <p style={{ color: "#000000", fontWeight: "600" }}>
                  Ve a las mesas y disfruta de tus juegos favoritos para empezar
                  a recibir tu reembolso del 100 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-3">
          <div className=" pb-3">
            <span
              className="font-druk"
              style={{ color: "black", fontWeight: 800, fontSize: 30 }}
            >
              PAGA Y JUEGA A TU MANERA
            </span>
          </div>
          {/* <div
            className="_20ae1ae _ceac433 d-flex"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="_b10c2b6 d-flex">
              <div className="_fdf20a6 d-flex ">
                <div className="_1cb8130 _58c2bf1 ">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltdf150113c5410b72/65a67ddfd7d856d0aab4de98/visa_debit.png"
                    alt="Visa Debit"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
            <div className="_b10c2b6">
              <div className="_fdf20a6">
                <div className="_1cb8130 _58c2bf1">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt1bac1c4111411c27/6528f9b0dfea733e438216ff/Mastercard.png"
                    alt="Mastercard"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
            <div className="_b10c2b6">
              <div className="_fdf20a6">
                <div className="_1cb8130 _58c2bf1">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt80bc5f9abc388c7e/6528f9b0074906ea30258213/PaySafeCard.png"
                    alt="Paysafe"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
            <div className="_b10c2b6">
              <div className="_fdf20a6">
                <div className="_1cb8130 _58c2bf1">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltd283c9689a0bd1f7/6528f9af70acce43606af36c/ApplePay.png"
                    alt="Apple Pay"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
            <div className="_b10c2b6">
              <div className="_fdf20a6">
                <div className="_1cb8130 _58c2bf1">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltf2b39f147b8905c6/6528f9b069ac2547fd177145/PayPal.png"
                    alt="PayPal"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
            <div className="_b10c2b6">
              <div className="_fdf20a6">
                <div className="_1cb8130 _58c2bf1">
                  <img
                    src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt2e12bbbd24a71729/65a69707c992b7d1f8b897f5/neosurf.png"
                    alt="Neosurf"
                    width={124}
                    height={80}
                    className="_6a3fb42"
                  />
                </div>
                <div className="_399aee6 _66561b2" />
              </div>
            </div>
          </div> */}
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
      </section>

      <section
        className=" pt-5 pb-5 font-druk"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className=" pb-5 ">
            <span
              className="font-druk"
              style={{ color: "black", fontWeight: 800, fontSize: 30 }}
            >
              ÚNETE A LA CASA DEL POKER ONLINE
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
                  style={{ height: "auto" }}
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
                          Juego seguro y protegido
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse bg-transparent"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body "
                          style={{ color: "#000000", fontWeight: "bold" }}
                        >
                          Deposita, retira fondos y y juega de forma segura,
                          sabiendo que nuestros sistemas de seguridad te
                          respaldan.
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
                          Reintegros rápidos
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse bg-transparent"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body"
                          style={{ color: "#000000", fontWeight: "bold" }}
                        >
                          Accede a tus fondos con facilidad en cualquier
                          momento.
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
                          Atención al cliente 24/7
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse bg-transparent"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body"
                          style={{ color: "#000000", fontWeight: "bold" }}
                        >
                          ¿Necesitas ayuda? Estamos a tu disposición. Todo el
                          día. Todos los días.
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

      <section>
        <div>
          <main
            className="py-5"
            style={{ backgroundColor: "black", color: "#ffffff" }}
          >
            <div className="container">
              <h1 className="mb-4" style={{ fontWeight: "900" }}>
                INFORMACIÓN SOBRE LA OFERTA
              </h1>
              <p>
                Sumérgete directamente en la mejor acción de poker con un
                reembolso del 100&nbsp;% de hasta 200&nbsp;€.
              </p>
              <p>A continuación te explicamos cómo conseguir tu reembolso:</p>
              <ol>
                <li>
                  Realiza tu primer depósito de hasta 200&nbsp;€ con el código
                  de reembolso "STARS200"
                </li>
                <li>
                  Ve a las mesas y disfruta de tus juegos de poker favoritos.
                </li>
                <li>Empieza a recibir tu reembolso del 100&nbsp;%.&nbsp;</li>
              </ol>
              <p>
                Puedes depositar con el código de reembolso hasta tres veces
                (siempre que tus depósitos válidos no superen un total de
                200&nbsp;€).
              </p>
              <p>
                Una vez hayas realizado tu depósito, deberás ganar puntos para
                canje disfrutando de tus juegos de poker favoritos con dinero
                real. Ganarás 5 puntos para canje por cada 1&nbsp;€ que pagues
                en comisiones o comisiones de entradas de torneos. Cada vez que
                consigas 75&nbsp;puntos para canje, ingresaremos 5&nbsp;€ en tu
                cuenta de Stars.
              </p>
              <p>
                Nuestras cartas están sobre la mesa: consigue esta exclusiva
                oferta de bienvenida.
              </p>
            </div>
          </main>
        </div>
      </section>

      <section>
        <div className="my-3">
          <main className="container" style={{ color: "black" }}>
            <div className=" pb-5">
              <span
                className="font-druk"
                style={{ color: "black", fontWeight: 800, fontSize: 30 }}
              >
                TÉRMINOS Y CONDICIONES
              </span>
            </div>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <span
                  style={{
                    fontWeight: "900",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  En qué consiste la oferta
                </span>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Los jugadores que realicen su primer depósito con dinero real de
              10&nbsp;€ o más con el código de depósito "STARS200" pueden
              conseguir un reembolso de hasta 200&nbsp;€.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <strong>Validez de la oferta</strong>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Esta oferta es válida a partir de las 5:01&nbsp;h&nbsp;CEST del 18
              de abril de 2024.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <strong>
                  Quién puede participar y cómo se cumplen los requisitos
                </strong>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              La oferta solo está disponible para los jugadores que no hayan
              efectuado nunca un depósito de dinero real en PokerStars.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Según lo establecido en el artículo 27 del Real Decreto 176/2023,
              de 14 de marzo, por el que se desarrollan entornos de juego más
              seguros, los participantes que incurran en comportamientos de
              riesgo no podrán seguir completando los requisitos de la oferta
              necesarios para recibir su premio hasta que dejen de pertenecer a
              dicha categoría.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Para poder optar a la oferta, los jugadores deben:
            </p>
            <ul>
              <li style={{ color: "#000000", fontWeight: "600" }}>
                realizar un depósito de 10&nbsp;€ o más con el código de
                reembolso "STARS200" en el Cajero;
              </li>
              <li style={{ color: "#000000", fontWeight: "600" }}>
                jugar al poker con dinero real en el sitio en los 120 días
                siguientes a la realización del depósito que cumple los
                requisitos; y
              </li>
              <li style={{ color: "#000000", fontWeight: "600" }}>
                reunir los puntos para canje necesarios (como se especifica más
                adelante) durante el periodo de 4 meses.
              </li>
            </ul>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <br />
              Para esta oferta solo serán válidos los depósitos realizados con
              tarjeta de débito. Los depósitos realizados mediante cualquier
              otro método no activarán la oferta de bienvenida.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Los jugadores podrán realizar hasta 3 depósitos válidos para
              recibir el premio máximo que se puede conseguir en la presente
              oferta, siempre y cuando todos los depósitos válidos: (i) se
              realicen en un plazo de 60 días desde la fecha del primer depósito
              válido; y (ii) se realicen con el código de reembolso "STARS200".
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Si, tras realizar el primer depósito válido, los jugadores activan
              una oferta por depósito independiente antes de completar cualquier
              otro depósito válido aceptado como parte de esta oferta, dichos
              jugadores deben: (i) asegurarse de que todos los depósitos válidos
              permitidos para esta oferta se efectúan en un periodo de 60 días
              desde la fecha en la que se realizó el primer depósito válido; y
              (ii) cumplir todos los criterios necesarios descritos en los
              presentes Términos y condiciones.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Si no se usa el código de reembolso al realizar el depósito
              válido, y siempre que se cumplan todos los términos de esta
              oferta:
            </p>
            <ol>
              <li style={{ color: "#000000", fontWeight: "600" }}>
                los jugadores pueden ponerse en contacto con el equipo de
                atención al cliente mediante nuestro{" "}
                <a href="/help/" target="_self">
                  Centro de ayuda
                </a>
                , en un plazo de 7 días desde la fecha de realización de su
                primer depósito válido, para recibir en su cuenta de Stars el
                premio correspondiente; o bien
              </li>
              <li style={{ color: "#000000", fontWeight: "600" }}>
                si han pasado más de 7 días pero menos de 3 meses desde la fecha
                del primer depósito válido, los jugadores aún pueden recibir el
                premio correspondiente, siempre que se pongan en contacto con el
                equipo de atención al cliente antes de que transcurran los 3
                meses.
                <br />
                <br />
              </li>
            </ol>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <strong>Conseguir y usar la oferta</strong>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              El premio se pagará por cada incremento de 5&nbsp;€ del depósito
              válido realizado, inmediatamente después de que se hayan cumplido
              los requisitos de apuesta. Una vez realizado cada depósito que
              cumpla los requisitos, los jugadores disponen de 4 meses para
              conseguir todos los puntos para canje necesarios para liberar su
              reembolso.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              El importe del premio que pueden recibir los jugadores dependerá
              del número de puntos para canje que ganen durante el periodo
              correspondiente. No se concederá ningún premio por cualquier
              periodo posterior a los 4 meses desde el momento de realizar el
              primer depósito válido.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Los jugadores pueden consultar cualquier reembolso que tengan,
              además de información sobre las fechas de vencimiento, los
              requisitos de puntos para canje y mucho más en el menú "Mis
              recompensas".
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <strong>
                  Requisitos de apuesta y limitaciones por tipo de juego
                </strong>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Los puntos para canje se liberan al siguiente ritmo:
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p style={{ color: "#000000", fontWeight: "600" }}>
                      <strong>Moneda</strong>
                    </p>
                  </td>
                  <td>
                    <p style={{ color: "#000000", fontWeight: "600" }}>
                      <strong>Tasa de liberación</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style={{ color: "#000000", fontWeight: "600" }}>
                      EUR (€)
                    </p>
                  </td>
                  <td>
                    <p style={{ color: "#000000", fontWeight: "600" }}>
                      5&nbsp;€ por cada 75 puntos para canje
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p />
            <p style={{ color: "#000000", fontWeight: "600" }}>
              <u>
                <strong>Qué más necesitas saber</strong>
              </u>
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Si se retira cualquier importe en cualquier momento tras realizar
              un depósito que cumpla los requisitos, los depósitos posteriores
              no contarán como depósitos válidos. No obstante, cualquier
              depósito que cumpla los requisitos realizado antes del reintegro
              seguirá siendo válido, y los jugadores seguirán pudiendo recoger
              el premio generado.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Nos reservamos el derecho de no ingresar cualquiera de los premios
              cuando haya motivos para sospechar que el depósito es fraudulento
              o que no se ha realizado con la intención de jugar con dinero
              real.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Los jugadores solo pueden aprovechar un primer depósito en todos
              nuestros productos de PokerStars.
            </p>
            <p style={{ color: "#000000", fontWeight: "600" }}>
              Consulta&nbsp;
              <a href="/poker/promotions/terms/" target="_self">
                aquí
              </a>
              &nbsp;los Términos y condiciones generales de nuestras
              ofertas.&nbsp;
            </p>
          </main>
        </div>
      </section>
    </main>
  );
}
