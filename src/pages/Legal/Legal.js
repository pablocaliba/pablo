import "./Legal.css";
import TitlePage from "../../components/TitlePage/TitlePage";

const cardsLegales = [
  {
    id: "1",
    title: "Condiciones generales de uso de la plataforma",
    languaje: "Spanish",
    type:"pdf",
    content: "Términos y condiciones de acceso y uso de módulos y funcionalidades, comportamiento de los usuarios, limite de responsabilidad de Gloouds entre otros.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/01.Legalv3.pdf"
  },
  {
    id: "2",
    title: "General conditions of use",
    languaje: "English",
    type:"pdf",
    content: "Terms and conditions of use and access, modules and functionalities description, properly behavior of users, scope of Gloouds responsibility and general personal data privacy disclaimer, among others.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/01.Legalv3_EN.pdf"
  },
  {
    id: "3",
    title: "Política de privacidad",
    languaje: "Spanish",
    type:"pdf",
    content: "Tratamiento de los datos personales, derechos de los usuarios, política de protección de datos de Gloouds.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/02.SegDeDatos.pdf"
  },
  {
    id: "4",
    title: "Data Privacy Policy",
    languaje: "English",
    type:"pdf",
    content: "Treatment of personal data, user rights, Gloouds data protection policy.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/02.SegDeDatos_EN.pdf"
  },
  {
    id: "5",
    title: "Condiciones generales del programa de partnership",
    languaje: "Spanish",
    type:"pdf",
    content: "Descripción general del programa de Partnership, límites de responsabilidad, condiciones de facturación y pagos, impuestos, etc.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/03.CondificionesGeneralesProgramaDePartnership.pdf"
  },
  {
    id: "6",
    title: "General conditions of the partnership program",
    languaje: "English",
    type:"pdf",
    content: "General description of the Partnership program, liability limits, billing and payment conditions, taxes, etc.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/03.CondificionesGeneralesProgramaDePartnership_EN.pdf"
  },
  {
    id: "7",
    title: "Condiciones para la comercialización de activos digitales",
    languaje: "Spanish",
    type:"pdf",
    content: "Términos y condiciones para la condiciones para la comercialización de activos digitales:  derechos de imagen de los clubes, licencias de contenido, derecho de autor, limitaciones de responsabilidad, etc.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/04.CondicionesDeComercializacionDeActivosDigitales.pdf"
  },
  {
    id: "8",
    title: "Commercialization of Digital Assets",
    languaje: "English",
    type:"pdf",
    content: "Terms and conditions of Digital Assets Commercialization: image rights, content licenses, copyright policy, Limitation of liability, etc.",
    link:"https://gloouds-resource-v2.s3.amazonaws.com/Public/04.CondicionesDeComercializacionDeActivosDigitales_EN.pdf"
  },
];

const Legal = () => {
  return (
  <>
  <div>
    <TitlePage title="Legales"/>
    <div className="legal--description">
        <p>
        In this section you will find all the documentation related to the legal and regulatory aspects, 
        terms and conditions to be part of the Gloouds community and for the use of its associated tools. 
        </p>
    </div>

    <div className="legales--container-box">
        {cardsLegales.map((card) => {
          return (
            <div key={card.id} className="legales--box">
              <a href={card.link} target="_blank" rel="noreferrer">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
              <div className="legales--subcard">
                <div><p>Languaje: {card.languaje}</p></div>
                <div><p>File Type: {card.type}</p></div>
              </div></a>
            </div>
          );
        })},
      </div>
  </div>
  </>
  );
};
export default Legal;