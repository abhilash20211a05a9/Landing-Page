import PropTypes from "prop-types";

const FeaturesContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[81.25rem] flex flex-row items-start justify-end py-[0rem] px-[0.25rem] box-border max-w-full text-justify text-[1.775rem] text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border gap-[6.375rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.937rem] box-border max-w-full">
          <b className="w-[76.188rem] relative inline-block shrink-0 max-w-full mq450:text-[1.438rem]">
            PedalCircle is an innovation hub by PedalStart for selected
            early-stage startups to accelerate the journey in 4 months and build
            them seed-stage investable. 
          </b>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[4.875rem] max-w-full text-[1.969rem]">
          <div className="w-[78.4rem] flex flex-row items-start justify-end py-[0rem] px-[0.25rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[3.875rem] max-w-full mq1125:flex-wrap">
              <div className="w-[36.188rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[36.188rem] max-w-full mq800:min-w-full mq1125:flex-1">
                <div className="self-stretch flex flex-row items-end justify-start gap-[0.812rem] max-w-full mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem]">
                    <img
                      className="w-[6.5rem] h-[6.5rem] relative object-cover"
                      alt=""
                      src="/24hourssupport-1-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 rounded-24xl bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-[1.75rem] px-[2.437rem] pb-[1.312rem] min-w-[15.25rem] max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]">
                    <div className="h-[8.688rem] w-[28.875rem] relative rounded-24xl bg-whitesmoke-100 box-border hidden max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]" />
                    <b className="w-[15.25rem] relative inline-block shrink-0 z-[1] mq450:text-[1.188rem] mq800:text-[1.563rem]">
                      24x7 Innovation hub
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-[2.187rem] min-w-[24.563rem] max-w-full mq450:min-w-full mq800:flex-wrap">
                <img
                  className="h-[6.938rem] w-[6.938rem] relative object-contain"
                  alt=""
                  src="/24hourssupport-4-1@2x.png"
                />
                <div className="flex-1 rounded-24xl bg-whitesmoke-100 box-border flex flex-row items-start justify-center pt-[1.875rem] px-[1.25rem] pb-[1.25rem] min-w-[18.5rem] max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]">
                  <b className="w-[18.5rem] relative inline-block shrink-0 mq450:text-[1.188rem] mq800:text-[1.563rem]">
                    Brainstorming with dedicated EIR
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[2.343rem] max-w-full text-left">
            <img
              className="h-[7.438rem] w-[7.438rem] relative object-contain"
              alt=""
              src="/24hourssupport-5-1@2x.png"
            />
            <div className="w-[30.375rem] rounded-24xl bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-[1.812rem] pb-[1.25rem] pr-[0.25rem] pl-[2.062rem] max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]">
              <div className="h-[8.688rem] w-[30.375rem] relative rounded-24xl bg-whitesmoke-100 box-border hidden max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]" />
              <b className="flex-1 relative inline-block max-w-full z-[1] mq450:text-[1.188rem] mq800:text-[1.563rem]">
                Upto $250k investment opportunity
              </b>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start gap-[1.437rem] min-w-[24.813rem] max-w-full text-[1.738rem] mq450:min-w-full mq800:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem]">
                <img
                  className="w-[7.063rem] h-[7.063rem] relative object-cover"
                  alt=""
                  src="/24hourssupport-2-1@2x.png"
                />
              </div>
              <div className="flex-1 rounded-24xl bg-whitesmoke-100 box-border flex flex-row items-start justify-start py-[1.687rem] pr-[0rem] pl-[1.312rem] min-w-[19.313rem] min-h-[8.688rem] max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px] mq800:min-h-[auto]">
                <div className="h-[8.688rem] w-[29.438rem] relative rounded-24xl bg-whitesmoke-100 box-border hidden max-w-full border-t-[1.4px] border-solid border-black border-r-[1.4px] border-b-[11.5px] border-l-[1.4px]" />
                <b className="flex-1 relative inline-block max-w-full z-[1] mq450:text-[1.375rem]">
                  Free access to shared resources for tech and marketing
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesContainer.propTypes = {
  className: PropTypes.string,
};

export default FeaturesContainer;
