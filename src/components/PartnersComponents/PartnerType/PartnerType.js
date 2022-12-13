import "./PartnerType.css";

const PartnerType = () => {
  return (
    <>
      <div className="partnerstype--desktop--container-chart direction-row">
        <div>
          <div className="triangulo-equilatero-bottom"> </div>
          <div className="partnerstype--chart-v-arrow">
            <p>Knowledge level </p>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="partnerstype--desktop--body-chart direction-row">
            <div className="partnerstype--box-types-container">
              <div className="partnerstype--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--container-box-type">
                <p>Bronze</p>
              </div>
            </div>

            <div className="partnerstype--box-types-container">
              <div className="partnerstype--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--container-box-type">
                <p>Silver</p>
              </div>
            </div>

            <div className="partnerstype--box-types-container">
              <div className="partnerstype--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--container-box-type">
                <p>Gold</p>
              </div>
            </div>

            <div className="partnerstype--box-types-container">
              <div>
                <div className="partnerstype--container-box-chart">
                  <h5> 1 </h5>
                  <p> GCAU Certified Person </p>
                  <h5> 1 </h5>
                  <p> GCAU Certified Person </p>
                  <h5> 1 </h5>
                  <p> GCAU Certified Person </p>
                  <h5> 1 </h5>
                  <p> GCAU Certified Person </p>
                  <p>
                    {" "}
                    Buys 500 licenses per <br /> month or 6.000 per year{" "}
                  </p>
                  <p> GCAU Certified Person </p>
                  <p>
                    {" "}
                    Gets 20% discount <br /> on GPL{" "}
                  </p>
                </div>
                <div className="partnerstype--container-box-type">
                  <p>Platinum</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="partnerstype--chart-h-arrow">
              <p> Technological and business skills</p>
            </div>
            <div className="triangulo-chart-h"> </div>
          </div>
        </div>
      </div>

      {/* -----------------MOBILE---------------- */}

      <div className="partnerstype--mb--container-chart">
        {/* CONTAINER CHART */}
        <div className="direction-row">
          <div>
            <div className="partnerstype--mb--triangle-bottom"> </div>
            <div className="partnerstype--mb--vertical-arrow">
              <p>Knowledge level </p>
            </div>
          </div>
          <div className="partnerstype--mb--body-chart">
            <div className="partnertype--mb--chart box-1">
              <p>Bronze</p>
            </div>
            <div className="partnertype--mb--chart box-2">
              <p>Silver</p>
            </div>
            <div className="partnertype--mb--chart box-3">
              <p>Gold</p>
            </div>
            <div className="partnertype--mb--chart box-4">
              <p>Platinum</p>
            </div>
          </div>
        </div>
        {/* CONTAINER ARROW */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "transparent",
            }}
          >
            <div className="partnerstype--mb--horizontal-arrow"></div>
            <div className="partnerstype--mb--horizontal-triangle"> </div>
          </div>
          <p className="partnerstype--mb--horizontal-arrow-text">
            {" "}
            Technological and business skills
          </p>
        </div>
        <div className="direction-row partnerstype--mb--types">
          <div className="direction-column">
            <div className="partnerstype--mb--box-types-container">
              <div className="partnerstype--mb--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--mb--container-box-type title-1">
                <p>Bronze</p>
              </div>
            </div>

            <div className="partnerstype--mb--box-types-container">
              <div className="partnerstype--mb--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--mb--container-box-type title-2">
                <p>Gold</p>
              </div>
            </div>
          </div>

          <div className="direction-column">
            <div className="partnerstype--mb--box-types-container">
              <div className="partnerstype--mb--container-box-chart ">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--mb--container-box-type title-4">
                <p>Silver</p>
              </div>
            </div>

            <div className="partnerstype--mb--box-types-container">
              <div className="partnerstype--mb--container-box-chart">
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <h5> 1 </h5>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Buys 500 licenses per <br /> month or 6.000 per year{" "}
                </p>
                <p> GCAU Certified Person </p>
                <p>
                  {" "}
                  Gets 20% discount <br /> on GPL{" "}
                </p>
              </div>
              <div className="partnerstype--mb--container-box-type  title-3">
                <p>Platinum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerType;
