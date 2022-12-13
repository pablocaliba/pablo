import "./ProgramConditions.css";
import SDCLogo from "../../../assets/Partners/sdc.png";
import NXWLogo from "../../../assets/Partners/nxw.png";
import GPEXELogo from "../../../assets/Partners/gpexe.png";
import CAILogo from "../../../assets/Partners/cai.png";
import CABLogo from "../../../assets/Partners/cab.png";

const ProgramConditions = () => {
  return (
    <>
      <div className="partners--container-content span1">
        <span></span>
        <div>
          <h3 style={{ color: "#fff" }}>
            {" "}
            Conditions to be a Certified Partner:
          </h3>
          <p>
            - Have an account registered in the Gloouds base <br />
            - Accept the general conditions (a PDF that can be consulted) <br />
            - To certify BRONZE: <br />
            - Have a person certified as GCAU <br />
            - No monthly or anual selling commitment <br />
            - To certify SILVER: <br />
            - Have one person certified GCAU and another as GCSM <br />
            - Sell 500 monthly licenses or 6000 per year <br />
            - To certify GOLD: <br />
            - Have three certified personnel, one as GCAU, one as GCDU and one
            as GCNT <br />
            - Sell 2,000 monthly licenses or 24,000 per year <br />
            - To certify PLATINUM: <br />
            - Have the three GOLD people plus a GCFS to attend channels <br />
            - Sell 4,000 monthly licenses or 48,000 per year <br />
            - Must have at least one GOLD subchannel <br />
            - The courses are valid for 24 months, after which they must be
            recertified. <br />
          </p>
        </div>

        <div>
          <div className="span2">
            <span></span>
          </div>
          <h3 style={{ color: "#fff" }}> Status Changes</h3>
          <p>
            - If the 24 months have passed and the exams are not taken again,
            the certification is lost. <br />
            - If it is PLATINUM, for a month selling less than 4,000 
            licenses but sells more than 500, it becomes GOLD. <br />- If it is
            GOLD and in a month sells less than 2,000 licenses but sells
            500 or more, it becomes SILVER. If sells less than 500, it becomes BRONZE. <br />
            - If it is SILVER but in a month you stop selling 500 
            licenses and sells 500 or more, it becomes BRONZE. <br />
            
            
          </p>
        </div>
      </div>

      <div className="partners--container-content span2">
        <span></span>
        <div>
          <h3 style={{ color: "#fff" }}>
            {" "}
            Conditions to be Gloouds Learning Partner (GLP)
          </h3>
          <p>
            - Have an account registered in the Gloouds database <br />- Accept
            the general conditions (a PDF that can be visualized) <br />
            - The future instructor must be GCFS (Gloouds Certified Full Stak)
            and pass the GICP (Gloouds Instructor Certification Program) <br />
            - The courses will require an evaluation by the students. <br />
          </p>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}> Status changes </h3>
          <p>
            - If the 24 months have passed and the exams have not been taken
            again, the certification is lost. <br />- If the average evaluation
            by Q is less than 4.25/5, the certification as GLP will be lost.
          </p>
        </div>
      </div>

      <div className="partners--container-agreement">
        <h6>
          Also, must sign the &quot;Partnership Agreement&quot; which is a PDF
          that can be consulted.
        </h6>
        <h3>Global Price List</h3>
        <p>
          <a href="https://gloouds-resource-v2.s3.amazonaws.com/Public/GPL_220721.xlsx" target="_blank" rel="noreferrer"> Click here to download the Global Price List</a>
        </p>
        <h3>Our partners</h3>
        <div>
          <p>Find a partner in your country:</p>
          <div className="tableContainer">
            <div className="partnerContainer">
              <div className="partnerLogo">
                <a
                  href="https://www.sportsdatacampus.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <img src={SDCLogo} width="100"></img>
                </a>{" "}
              </div>
              <div className="partnerDescription">
                <p style={{ lineHeight: 1 }}>
                  <font size="4">
                    Sports Data Campus es el Campus de referencia, a nivel
                    mundial, en lo que a la impartición de programas de
                    Formación Superior (Másteres, Expertos y Diplomas
                    Universitarios) especializados en Big Data y Analítica
                    Avanzada aplicada al Deporte se refiere. Con una moderna
                    metodología propia, permite, a sus alumnos, compaginar,
                    perfectamente, su vida laboral y personal con su formación
                    de posgrado. Con más de 1.000 estudiantes formados en sus
                    distintos Másteres y con muchos de estos estudiante
                    trabajando en los mejores clubes y en todas las grandes
                    ligas del mundo, Sports Data Campus, sigue fiel a su
                    compromiso de innovar y contribuir, desde el prisma del uso
                    y aprovechamiento del dato, al desarrollo y la mejora del
                    deporte, tanto en categorías profesionales, en las que
                    cuenta con acuerdos con los máximos exponentes de la
                    industria, competiciones y clubes, como en ligas
                    semiprofesionales o amateurs.
                  </font>
                </p>
              </div>

              <div className="partnerLogo">
                <a
                  href="https://www.linkedin.com/company/nexworldsports/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <img src={NXWLogo} width="100"></img>
                </a>
              </div>
              <div className="partnerDescription">
                <p style={{ lineHeight: 1 }}>
                  <font size="4">
                    Somos un equipo profesional con presencia estratégica en 4
                    continentes, nuestra experiencia nos permite conocer
                    necesidades latentes y detectar oportunidades. Nos enfocamos
                    en generar mejoras en la gestión de cada Federación, Club o
                    Academia, aportando asesoramiento y servicios, con una
                    mirada 360º, con el objetivo de colaborar en la consecución
                    de sus metas. Junto a partners y socios comerciales,
                    proponemos la utilización de herramientas e implementación
                    de soluciones innovadoras que potencien los cambios
                    necesarios en la gestión y adapten la misma a los
                    requerimiento de la actualidad y desafíos del futuro.
                  </font>
                </p>
              </div>
            </div>

            <div className="partnerContainer">
              <div className="partnerLogo">
                <a
                  href="https://www.gpexe.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <img src={GPEXELogo} width="100"></img>
                </a>{" "}
              </div>
              <div className="partnerDescription">
                <p style={{ lineHeight: 1 }}>
                  <font size="4">
                    Gpexe by Exelio is the best wearable tracking system for
                    professional sports teams. Our devices are chosen by the
                    majority of the Italian football SERIE A Teams and 200 clubs
                    and National Teams worldwide. Gpexe is a GPS system with a
                    fast set-up, user-friendly and all tools are provided to
                    learn how to analyse the performance with our model.
                  </font>
                </p>
              </div>

              <div className="partnerLogo">
                <a
                  href="https://clubaindependiente.com.ar/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <img src={CAILogo} width="100"></img>
                </a>{" "}
              </div>
              <div className="partnerDescription">
                <p style={{ lineHeight: 1 }}>
                  <font size="4">
                    El Club Atlético Independiente, conocido popularmente como
                    Independiente, o por su sigla CAI, es una entidad deportiva
                    de Argentina de la ciudad de Avellaneda, situado en el sur
                    del Gran Buenos Aires. Fue fundado el 1 de enero de 1904 por
                    unos jóvenes empleados independentistas del Club Maipú
                  </font>
                </p>
              </div>
            </div>

            <div className="partnerContainer">
              <div className="partnerLogo">
                <a
                  href="https://clubabanfield.org/inicio/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <img src={CABLogo} width="100"></img>
                </a>
              </div>
              <div className="partnerDescription">
                <p style={{ lineHeight: 1 }}>
                  <font size="4">
                    El Club Atlético Banfield es una entidad deportiva, con sede
                    en la localidad de Banfield, provincia de Buenos Aires. Fue
                    fundado el 21 de enero de 1896 por habitantes de esa ciudad,
                    mayoritariamente de orígenes británicos. Su principal
                    actividad es el fútbol profesional
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProgramConditions;
