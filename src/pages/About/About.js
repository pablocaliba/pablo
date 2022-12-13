import "./About.css";
// components
import TitlePage from "../../components/TitlePage/TitlePage";
// images
import player_about from "../../assets/About/player_about.png";
import avatar_1 from "../../assets/About/1.diego.png";
import avatar_2 from "../../assets/About/2.mariano.png";
import avatar_3 from "../../assets/About/3.marcela.png";
import avatar_4 from "../../assets/About/4.lucas.png";
import avatar_5 from "../../assets/About/5.hernan.png";
import avatar_6 from "../../assets/About/6.pablo.png";
import linkedinlogo from "../../assets/About/linkedin.png";

const Avatares = [
  {
    name: "Diego Muller",
    img: avatar_1,
    description: "CEO & Founder",
    subdescription: "Chief Excecutive Officer",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/mullerdiego"
  },
  {
    name: "Mariano Robledo",
    img: avatar_2,
    description: "CTO & Founder",
    subdescription: "Chief Techonology Officier",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/mariano-robledo-2b336096"
  },
  {
    name: "Marcela Fernandez",
    img: avatar_3,
    description: "CFO & Founder",
    subdescription: "Chief Financial Officier",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/marcela-fernandez-1a533840"
  },
  {
    name: "Lucas Bracamonte",
    img: avatar_4,
    description: "CTOTB",
    subdescription: "Chief Data Technolgy Officer Tech Business",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/lucas-bracamonte-a4982914b"
  },
  {
    name: "Hernan Portugal",
    img: avatar_5,
    description: "CDMO",
    subdescription: "Chief Digital Marketing Officer",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/hernanportugal"
  },
  {
    name: "Pablo Borra ",
    img: avatar_6,
    description: "CBDO",
    subdescription: "Chief Bussines Development Officer",
    linkedin: linkedinlogo,
    profile: "https://www.linkedin.com/in/pborra"
  },
];

const About = () => {
  return (
    <>
      <TitlePage title="About" />
      <div className="about--container-description-img">
        <span className="span about--span-0"></span>
        <div className="about--container-description">
          <h2> Mission </h2>
          <p>
            Gloouds wants to fulfill the dream of all young people who love
            soccer by empowering their education and values, and collaborates
            with clubs to generate new and better revenues through a safe,
            transparent, collaborative and dynamic ecosystem.
          </p>
          <h2>Vision</h2>
          <p>
            To ensure that the youth of the world have the opportunity to
            achieve their dreams through soccer and its values.
          </p>
        </div>
        <div className="about--container-img">
          <img src={player_about} alt="" />
        </div>
      </div>


      <div className="about--container-team">
        <h2>Team</h2>
        <span className="span about--span-1"></span>
        <div className="about--container-cards-team">
          {Avatares.map((avatar, i) => {
            return (
              <div key={i} className="about--cards-team">
                <img src={avatar.img} alt={avatar.name} />
                <h3>{avatar.name}</h3>
                <h4> <a href={avatar.profile} target="_blank" rel="noreferrer noopener"> Linkedin</a> </h4>
                <h4>{avatar.description}</h4>
                <p> {avatar.subdescription} </p>
              </div>
            );
          })}
        </div>
        <span className="span about--span-2"></span>
      </div>
    </>
  );
};
export default About;
