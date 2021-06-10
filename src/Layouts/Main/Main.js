import React from "react";
import BrandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../images/icon-detailed-records.svg";
import FullyCustomiseIcon from "../../images/icon-fully-customizable.svg";

export default function Main() {
  return (
    <main className="main">
      <div className="main__text">
        <h2 className="main__text-h2 u-mb-small">Advanced Statistics</h2>
        <p className="main__text-p u-mb-large">
          Track how your links are performing across the web with our
          <br />
          advanced statistics dashboard.
        </p>
      </div>
      <div className="main__cards">
        <div className="main__card main__card-1">
          <div className="main__card-circle">
            <img
              src={BrandRecognitionIcon}
              className="main__card-image u-mb-small"
            />
          </div>
          <h3 className=" main__card__text-h3 u-mb-small">Brand Recognition</h3>
          <p className="main__card__text-p">
            Boost your brand recognition with each click. <br /> Generic links
            don’t mean a thing. <br /> Branded links help instil confidence in
            your content.
          </p>
        </div>

        <div className="main__card main__card-2">
          <div className="main__card-circle">
            <img
              src={DetailedRecordsIcon}
              className="main__card-image u-mb-small"
            />
          </div>
          <h3 className="main__card__text-h3 u-mb-small">Detailed Records</h3>
          <p className="main__card__text-p">
            Gain insights into who is clicking your links. <br /> Knowing when
            and where people engage with your content helps inform better
            decisions.
          </p>
        </div>

        <div className="main__card main__card-3">
          <div className="main__card-circle">
            <img
              src={FullyCustomiseIcon}
              className="main__card-image u-mb-small"
            />
          </div>
          <h3 className="main__card__text-h3 u-mb-small">Fully Customizable</h3>
          <p className="main__card__text-p">
            Improve brand awareness and content discoverability through <br />
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </main>
  );
}
