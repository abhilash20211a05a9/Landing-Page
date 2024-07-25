import ThirdPair from "./ThirdPair";
import MoreInvestorNames from "./MoreInvestorNames";
import PropTypes from "prop-types";

const Logos = ({ className = "" }) => {
  return (
    <div
      className={`w-[88.063rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[1.419rem] text-black font-inter ${className}`}
    >
      <div className="w-[65.063rem] flex flex-col items-start justify-start gap-[3.831rem] max-w-full mq800:gap-[0.938rem] mq1125:gap-[1.938rem]">
        <div className="self-stretch grid flex-row items-start justify-start gap-[4.625rem] grid-cols-[repeat(4,_minmax(153px,_1fr))] text-[0.881rem] mq450:grid-cols-[minmax(153px,_1fr)] mq800:gap-[1.125rem] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(153px,_265px))] mq1125:gap-[2.313rem]">
          <div className="h-[13.625rem] flex flex-col items-end justify-start gap-[1.093rem]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/71536x1293@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.25rem] pl-[3.437rem]">
              <div className="relative">
                <p className="m-0">
                  <b>Vikas Lakhani</b>
                </p>
                <p className="m-0 text-[0.619rem]">InstaOffice</p>
              </div>
            </div>
          </div>
          <ThirdPair
            x1293="/81536x1293@2x.png"
            alokKohli="Alok Kohli"
            pepsico="Pepsico"
          />
          <ThirdPair
            x1293="/91536x1293@2x.png"
            alokKohli="M Ramakrishnan"
            pepsico="Investor"
            propHeight="14.125rem"
            propGap="0.593rem"
            propFlex="unset"
            propMinWidth="unset"
          />
          <ThirdPair
            x1293="/101536x1293@2x.png"
            alokKohli="Sandeep Nailwal"
            pepsico="Polygon"
            propHeight="14.125rem"
            propGap="0.593rem"
            propFlex="unset"
            propMinWidth="unset"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4.625rem] mq800:gap-[1.125rem] mq1125:gap-[2.313rem]">
          <ThirdPair
            x1293="/111536x1293@2x.png"
            alokKohli="Abhinav Kumar"
            pepsico="Paytm"
            propHeight="unset"
            propGap="unset"
            propFlex="1"
            propMinWidth="11.75rem"
          />
          <ThirdPair
            x1293="/121536x1293@2x.png"
            alokKohli="Nikhil Thomas"
            pepsico="Udaan"
            propHeight="unset"
            propGap="unset"
            propFlex="1"
            propMinWidth="11.75rem"
          />
          <ThirdPair
            x1293="/51536x1293@2x.png"
            alokKohli="Varun Miglani"
            pepsico="Angel Investor"
            propHeight="unset"
            propGap="unset"
            propFlex="1"
            propMinWidth="11.75rem"
          />
          <div className="flex-1 flex flex-col items-end justify-start gap-[0.625rem] min-w-[11.75rem] max-w-[12.75rem]">
            <img
              className="self-stretch h-[10.719rem] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/41536x1293@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.25rem] pl-[2.312rem]">
              <div className="relative">
                <p className="m-0">
                  <b>Neerav Jain</b>
                </p>
                <p className="m-0 text-[1rem]">Angel Investor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[4.293rem] grid-cols-[repeat(4,_minmax(160px,_1fr))] mq450:grid-cols-[minmax(160px,_1fr)] mq800:gap-[1.063rem] mq1125:gap-[2.125rem] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(160px,_277px))]">
          <MoreInvestorNames
            x1293="/31536x1293@2x.png"
            dhruvKumar="Dhruv Kumar"
            angelInvestor="Angel Investor"
          />
          <MoreInvestorNames
            x1293="/171536x1293@2x.png"
            dhruvKumar="Priyesh Jaiswal"
            angelInvestor="Flipkart"
          />
          <ThirdPair
            x1293="/mentorsinvestors1536x1293@2x.png"
            alokKohli="Rishav Agarwal"
            pepsico="Picxele"
            propHeight="14.181rem"
            propGap="0.65rem"
            propFlex="unset"
            propMinWidth="unset"
          />
          <div className="flex flex-col items-end justify-start gap-[0.65rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.187rem] pl-[0.312rem]">
              <img
                className="h-[10.719rem] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/2411536x1293@2x.png"
              />
            </div>
            <div className="self-stretch relative">
              <p className="m-0">
                <b>Mandeep Manocha</b>
              </p>
              <p className="m-0 text-[1rem]">Cashify</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
};

export default Logos;
