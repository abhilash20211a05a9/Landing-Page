import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[86.625rem] flex flex-row items-start justify-start py-[0rem] px-[3.187rem] box-border max-w-full text-left text-[1.45rem] text-white font-inter mq1350:pl-[1.563rem] mq1350:pr-[1.563rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap">
        <div className="w-[42.25rem] flex flex-col items-start justify-start gap-[1.312rem] min-w-[42.25rem] max-w-full mq1125:flex-1 mq1125:min-w-full">
          <img
            className="w-[19.063rem] h-[6.625rem] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/screenshot-20240523-at-1157-3@2x.png"
          />
          <b className="self-stretch relative leading-[121.26%] z-[1] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
            PedalCircle is an innovation hub by PedalStart for selected
            early-stage startups to accelerate the journey in 4 months and build
            them seed-stage investable. 
          </b>
        </div>
        <div className="w-[21.375rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[21.375rem] max-w-full text-[1.481rem] mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.675rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[2.687rem]">
              <b className="relative leading-[1.813rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                Contact Us
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-[1.238rem] font-sf-compact-rounded mq450:flex-wrap">
              <div className="w-[1.688rem] flex flex-col items-start justify-start pt-[0.075rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2.562rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.187rem]">
                      <div className="relative leading-[121.26%] inline-block min-w-[1.375rem] z-[1]">
                        􀌿
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[121.26%] z-[1]">
                      􀣪
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.312rem]">
                    <div className="flex-1 relative leading-[121.26%] z-[1]">
                      􀎪
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.256rem] min-w-[12.125rem] text-[1.331rem] font-inter">
                <b className="relative leading-[1.625rem] whitespace-nowrap z-[1] mq450:text-[1.063rem] mq450:leading-[1.313rem]">
                  +91 9650346002
                </b>
                <div className="relative text-[1.269rem] leading-[1.563rem] whitespace-nowrap z-[1] mq450:text-[1rem] mq450:leading-[1.25rem]">
                  connect@pedalstart.com
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem] text-[1.088rem]">
                  <div className="relative leading-[1.375rem] z-[1]">
                    SpringHouse Coworking, Grand
                  </div>
                  <div className="h-[2.625rem] relative leading-[121.26%] inline-block z-[1]">
                    <p className="m-0">Mall, Sikandarpur, Gurgaon, Haryana</p>
                    <p className="m-0">122004, IN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
