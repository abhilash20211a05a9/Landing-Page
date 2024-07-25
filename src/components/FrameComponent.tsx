import Acess from "./Acess";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full text-center text-[6.15rem] text-black font-inter ${className}`}
    >
      <div className="w-[72.338rem] flex flex-col items-start justify-start gap-[16.937rem] max-w-full">
        <div className="w-[65.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="bg-aqua flex flex-row items-start justify-start py-[0.312rem] px-[2.562rem] box-border max-w-full">
            <div className="h-[8.063rem] w-[34.125rem] relative bg-aqua hidden max-w-full" />
            <b className="relative z-[1] mq450:text-[1.875rem] mq800:text-[3.063rem]">
              Offerings
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-[1.806rem]">
          <div className="self-stretch h-[41.575rem] flex flex-col items-start justify-start pt-[20rem] px-[0rem] pb-[1.193rem] box-border gap-[0.243rem] shrink-0 max-w-full z-[1] mq1125:h-auto">
            <div className="mt-[-20.625rem] self-stretch flex flex-row items-start justify-start gap-[0.562rem] max-w-full mq1125:flex-wrap">
              <Acess
                access="24/7 Access"
                gainExclusiveAccessToOurI="Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources"
                hoursSupport1="/24hourssupport-1@2x.png"
              />
              <div className="flex-[0.9937] flex flex-col items-end justify-start pt-[3.125rem] px-[1.937rem] pb-[1.506rem] box-border relative gap-[5.25rem] min-w-[17.813rem] max-w-full mq450:flex-1">
                <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[37.05px] bg-white" />
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.5rem] pl-[0.375rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.312rem]">
                    <b className="relative z-[1] mq450:text-[1.438rem]">
                      Expert Mentorship
                    </b>
                    <div className="self-stretch relative text-[0.688rem] text-gray-500 z-[1]">
                      Connect with former mentors and founders and domain
                      experts who offer valuable guidance and insights curated
                      to your start-up journey, helping you navigate challenges
                      and seize opportunities effectively.
                    </div>
                  </div>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] relative z-[1]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full"
                    alt=""
                    src="/group-26.svg"
                  />
                  <img
                    className="absolute top-[0.688rem] left-[1rem] w-[2.75rem] h-[2.75rem] object-contain z-[1]"
                    alt=""
                    src="/24hourssupport-2@2x.png"
                  />
                </div>
              </div>
              <Acess
                access="Team Building "
                gainExclusiveAccessToOurI="Find potential partners within the cohort, building a strong team for collaborations and partnerships that can elevate your ideas"
                hoursSupport1="/24hourssupport-3@2x.png"
                propFlex="1"
                propPadding="3.125rem 1.875rem 1.506rem"
                propGap="6.125rem"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.562rem] max-w-full mq1125:flex-wrap">
              <Acess
                access="Founder Ecosystem"
                gainExclusiveAccessToOurI="Join the ecosystem of fellow founders, creating opportunities for collaboration, knowledge sharing, and collective growth, as you learn from each other's experiences and perspectives."
                hoursSupport1="/24hourssupport-4@2x.png"
                propFlex="0.9812"
                propPadding="3.125rem 2.062rem 1.506rem"
                propGap="4.625rem"
              />
              <div className="flex-[0.9937] flex flex-col items-end justify-start pt-[3.125rem] px-[1.937rem] pb-[1.506rem] box-border relative gap-[3.75rem] min-w-[17.813rem] max-w-full mq450:flex-1">
                <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[37.05px] bg-white" />
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.5rem] pl-[0.375rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.937rem]">
                    <b className="relative z-[1] mq450:text-[1.438rem]">
                      Investor Networking
                    </b>
                    <div className="self-stretch relative text-[0.688rem] text-gray-500 z-[1]">
                      Engage with a diverse range of investors, from venture
                      capitalists to angel investors, gaining insights into
                      their investment criteria and thought processes. This
                      interaction will help define initial metrics and refining
                      the pitch
                    </div>
                  </div>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] relative z-[1]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-300 w-full h-full" />
                  <img
                    className="absolute top-[0.813rem] left-[0.938rem] w-[2.75rem] h-[2.75rem] object-contain z-[1]"
                    alt=""
                    src="/24hourssupport-5@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start pt-[3.125rem] px-[1.875rem] pb-[1.506rem] box-border relative gap-[6.375rem] min-w-[17.813rem] max-w-full">
                <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[37.05px] bg-white" />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
                  <div className="w-[16.375rem] flex flex-col items-start justify-start gap-[0.937rem]">
                    <b className="relative z-[1] mq450:text-[1.438rem]">
                      Access to Funding
                    </b>
                    <div className="self-stretch relative text-[0.688rem] text-gray-500 z-[1]">
                      Opportunity to secure pre-seed/seed investments of up to
                      $250,000 from the PedalStart network
                    </div>
                  </div>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] relative z-[1]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-300 w-full h-full" />
                  <img
                    className="absolute top-[0.813rem] left-[1rem] w-[2.75rem] h-[2.75rem] object-contain z-[1]"
                    alt=""
                    src="/24hourssupport-6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.062rem] box-border max-w-full mt-[-7.2rem]">
            <div className="h-[30rem] flex-1 relative shrink-0 max-w-full">
              <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-whitesmoke-200 box-border w-full h-full border-[1px] border-solid border-dimgray-100" />
              <img
                className="absolute top-[18.375rem] left-[3.563rem] w-[7.938rem] h-[7.938rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
              <img
                className="absolute top-[20.813rem] left-[16.438rem] w-[9.563rem] h-[4.019rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
              <img
                className="absolute top-[18.875rem] left-[30.938rem] w-[7.938rem] h-[7.938rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className="absolute top-[20rem] left-[43.875rem] w-[4.813rem] h-[4.813rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <img
                className="absolute top-[19.313rem] left-[53.563rem] w-[7.063rem] h-[7.063rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
