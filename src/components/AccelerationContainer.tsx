import PropTypes from "prop-types";

const AccelerationContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[16.687rem] box-border gap-[1.375rem] max-w-full text-left text-[4.188rem] text-black font-sf-compact-display mq1125:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3.625rem] max-w-full">
          <div className="w-[41.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
            <h1 className="m-0 h-[10rem] flex-1 relative text-inherit leading-[0%] font-bold font-inherit inline-block max-w-full mq450:text-[2.5rem] mq800:text-[3.375rem]">
              <p className="m-0">Accelerating Growth</p>
              <p className="m-0">Driving Success</p>
            </h1>
          </div>
          <div className="w-[42.625rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.187rem] pr-[1.25rem] pl-[0rem] box-border gap-[4.812rem] max-w-full text-justify text-[1.5rem] text-gray-500 font-sf-pro-display">
            <h1 className="m-0 self-stretch h-[7.25rem] relative text-inherit leading-[1.688rem] font-normal font-inherit inline-block min-h-[7.25rem] mq450:text-[1.188rem]">
              PedalCircle is an offline acceleration cohort by PedalStart,
              giving handpicked startups access to 24x7 offline innovation hub,
              mentorship from Industry experts and upto $250k investment
              opportunity.
            </h1>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] text-center text-[1.25rem] text-gray-100 font-inter">
              <div className="rounded-[13.26px] flex flex-row items-start justify-start py-[0.937rem] pr-[3.25rem] pl-[3.312rem] border-[0.7px] border-solid border-black">
                <div className="h-[3.5rem] w-[18.1rem] relative rounded-[13.26px] box-border hidden border-[0.7px] border-solid border-black" />
                <b className="relative z-[1] mq450:text-[1rem]">{`Start your Journey `}</b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-[3.25rem] text-white font-inter">
            <div className="flex-1 rounded-11xl bg-gray-100 flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch w-[49.688rem] relative rounded-11xl bg-gray-100 hidden max-w-full" />
              <div className="h-[12.438rem] flex-1 overflow-hidden flex flex-row items-start justify-start pt-[3.125rem] pb-[0rem] pr-[2.125rem] pl-[2.25rem] box-border relative max-w-full z-[1] mq800:h-auto">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-11xl bg-gray-100" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[5.437rem] max-w-full shrink-0 z-[1]">
                  <div className="w-[44.563rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
                    <img
                      className="h-[7rem] w-[7rem] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/growth-1@2x.png"
                    />
                    <h1 className="m-0 w-[31.938rem] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.938rem] mq800:text-[2.625rem]">
                      <p className="m-0">{`Ready to Grow Your `}</p>
                      <p className="m-0">Venture?</p>
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4.687rem] max-w-full text-[2.813rem] mq800:flex-wrap">
                    <img
                      className="h-[7rem] w-[7rem] relative object-cover min-h-[7rem]"
                      alt=""
                      src="/growth-1-1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[21.875rem] max-w-full mq450:min-w-full">
                      <h1 className="m-0 self-stretch h-[6.75rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1.688rem] mq800:text-[2.25rem]">
                        <p className="m-0">Accelerate Your Venture</p>
                        <p className="m-0">with PedalCircle.</p>
                      </h1>
                    </div>
                  </div>
                  <div className="w-[44.563rem] flex flex-col items-start justify-start gap-[6.25rem] max-w-full text-[3.688rem]">
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
                      <img
                        className="h-[7rem] w-[7rem] relative object-contain"
                        alt=""
                        src="/growth-1-2@2x.png"
                      />
                      <h1 className="m-0 h-[10.813rem] w-[31.938rem] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-[2.188rem] mq800:text-[2.938rem]">
                        <p className="m-0">Potential funding up to $250k.</p>
                      </h1>
                    </div>
                    <div className="w-[37.938rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[3.313rem] mq800:flex-wrap">
                      <img
                        className="h-[7rem] w-[7rem] relative object-contain"
                        alt=""
                        src="/growth-1-3@2x.png"
                      />
                      <h1 className="m-0 h-[12rem] w-[25.313rem] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[2rem] mq800:text-[2.625rem]">
                        <p className="m-0">{`Only promising `}</p>
                        <p className="m-0">startups</p>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[31rem] flex flex-col items-end justify-start gap-[3.125rem] min-w-[31rem] max-w-full text-[1.581rem] text-white font-inter mq800:min-w-full mq1125:flex-1">
        <div className="self-stretch h-[38.5rem] relative max-w-full">
          <div className="absolute top-[0rem] left-[0.019rem] rounded-11xl bg-gray-100 box-border w-full h-[35.194rem] overflow-hidden flex flex-col items-start justify-start pt-[0.768rem] px-[0.812rem] pb-[2.256rem] gap-[0.706rem] max-w-full border-t-[0.7px] border-solid border-gray-100 border-r-[0.7px] border-b-[4.4px] border-l-[0.7px]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-[1.587rem] px-[1.312rem] pb-[1.562rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[26.27px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/7b3a0054-3@2x.png"
              />
              <div className="h-[3.231rem] w-[3.231rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full z-[1]" />
                <img
                  className="absolute top-[0.156rem] left-[0.169rem] w-[2.881rem] h-[2.881rem] object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.562rem]">
              <b className="relative mq450:text-[1.25rem]">
                <p className="m-0">{`TRAIN ON YOUR `}</p>
                <p className="m-0">OWN TIME</p>
              </b>
            </div>
            <div className="w-[1.475rem] h-[1.475rem] relative bg-gainsboro-300 hidden" />
          </div>
          <div className="absolute top-[31.875rem] left-[12.644rem] w-[6.625rem] flex flex-row items-start justify-start">
            <div className="h-[6.625rem] flex-1 relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[4]" />
              <div className="absolute top-[2.125rem] left-[2.313rem] w-[2.25rem] h-[2.938rem] z-[5] flex items-center justify-center">
                <img
                  className="w-full h-full z-[5] object-contain absolute left-[0.125rem] top-[0.063rem] [transform:scale(1.289)]"
                  alt=""
                  src="/support-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="m-0 self-stretch h-[5.438rem] relative text-[1.5rem] text-gray-500 text-justify inline-block box-border pl-[1.5rem] font-sf-pro-display mq450:text-[1.188rem]">
          <span>{`Join our outcome-driven offline program where startups receive expert support and access to `}</span>
          <b>PedalStart's</b>
          <span> shared resourceS.</span>
        </h1>
      </div>
    </div>
  );
};

AccelerationContainer.propTypes = {
  className: PropTypes.string,
};

export default AccelerationContainer;
