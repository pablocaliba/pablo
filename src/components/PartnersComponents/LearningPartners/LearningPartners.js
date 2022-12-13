import "./LearningPartners.css";

// components
import BoxLearningPartners from "../BoxLearningPartners/BoxLearningPartners";

const contentLearningPartners = [
  {
    id: "1",
    text_1: "GCPU ",
    text_1_2: " (Platform Use)",
    text_2: "Training in the use of the platform",
    text_3: "Global Academy UCAM",
  },
  {
    id: "2",
    text_1: "GCAU",
    text_1_2: " (Advanced User)",
    text_2: (
      <p>
        Training in the use of the platform <br />
        GPS Training <br />
        Video analysis <br />
        Sports scouting
      </p>
    ),
    text_3: "Global Academy",
  },
  {
    id: "3",
    text_1: "GCSM",
    text_1_2: "(Sport Management)",
    text_2: (
      <p>
        Training in the use of the platform <br />
        Sports Data Processing <br />
        Sports marketing <br />
      </p>
    ),
    text_3: "UCAM  Vacant",
  },
  {
    id: "4",
    text_1: "GCNT",
    text_1_2: "(New technologies)",
    text_2: (
      <p>
        Training in the use of the platform <br />
        Sports Marketing
        <br />
        NFT and Second sources of income
        <br />
        Sports Management
      </p>
    ),
    text_3: "Vacant",
  },
];

const LearningPartners = () => {
  return (
    <div className="learningPartners--container">
      <div className="learningPartners--box-container">
        {contentLearningPartners.map((item) => {
          return (
            <div key={item.id}>
              <BoxLearningPartners
                title={item.text_1}
                title2={item.text_1_2}
                label={item.text_2}
                label2={item.text_3}
              />
            </div>
          );
        })}
      </div>
      <div className="learningPartners--4-box-container">
        <div className="learningPartners--4-box">
          <span>1</span>
          <div>
            <p>
              Person as GCFS (Full Stack) that will guarantee data integrity and
              veracity. It will also audit the partners of the Learning Program.
            </p>
            <p>Must certify all the courses.</p>
          </div>
        </div>
        <h2>Auditor</h2>
      </div>
    </div>
  );
};

export default LearningPartners;
