import "./Partners.css";
// images
import chart from "../../assets/Partners/Chart2.png";
// components
import BoxPartnershipProgram from "../../components/PartnersComponents/BoxPartnershipProgram/BoxPartnershipProgram";
import LearningPartners from "../../components/PartnersComponents/LearningPartners/LearningPartners";
import ProgramConditions from "../../components/PartnersComponents/ProgramConditions/ProgramConditions";
import TitlePage from "../../components/TitlePage/TitlePage";

const contentPertnershipProgram = [
  {
    id: "1",
    title: "Growth potential",
    text: "Gloouds has thousands of potential customers every month around the world, so the role of partners is essential to offer and distribute their products, giving a great advantage of implementing and configuring the platform according to customer needs, being a fully customized process.",
  },
  {
    id: "2",
    title: "Innovation",
    text: "As Gloouds develops more and new products like NFTs, Partners 2.0, Digital Marketing, etc., the partner will have priority to offer them to customers, thus increasing their business.",
  },
  {
    id: "3",
    title: "Customer Focus",
    text: (
      <div>
        The client benefits because an official partner: <br />
        • It has a direct relationship with Gloouds to be able to escalate
        problems. <br />• It has access to training sessions and up-to-date
        training.
      </div>
    ),
  },
  {
    id: "4",
    title: "Recognition",
    text: (
      <div>
        The member will be in direct contact with Gloouds, therefore, any
        incident, query or communication will be dealt with directly and any
        news will be notified. <br />
        In addition, you will gain visibility and recognition by being listed as
        an official partner on the Gloouds Partner Portal. <br />
      </div>
    ),
  },
];

const Partners = () => {
  return (
    <div className="partners--container">
      <TitlePage title="Partners" />
      <span className="partners--span-1"></span>
      <h2>Gloouds Partnership Program</h2>
      {contentPertnershipProgram.map((item) => (
        <div key={item.id}>
          <BoxPartnershipProgram
            title={item.title}
            text={item.text}
            myid={item.id}
          />
        </div>
      ))}
      <div className="partners--container-partner-type">
        <h2>Partner Type</h2>
        <img src={chart} alt="" />
      </div>

      <div className="partners--container-learning-partners">
        <h2> Gloouds Learning Partners </h2>
        <LearningPartners />
      </div>

      <h2>Program conditions</h2>
      <div className="partners--container-conditions">
        <ProgramConditions />
      </div>
    </div>
  );
};
export default Partners;
