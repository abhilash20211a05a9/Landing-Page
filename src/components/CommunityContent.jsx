import PropTypes from "prop-types";

const CommunityContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[2.187rem] max-w-full text-justify text-[3.994rem] text-black font-inter ${className}`}
    >
      <div className="w-[81.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[2.625rem] max-w-full">
          <div className="w-[54.75rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div className="bg-aqua flex flex-row items-start justify-start py-[1.625rem] px-[2.75rem] box-border whitespace-nowrap max-w-full">
              <div className="h-[8.063rem] w-[28.5rem] relative bg-aqua hidden max-w-full" />
              <b className="relative z-[1]">Who are we</b>
            </div>
          </div>
          <b className="relative text-[2.913rem] mq450:text-[1.75rem] mq800:text-[2.313rem]">
            Startup Founder’s Community Platform
          </b>
        </div>
      </div>
      <b className="self-stretch relative text-[1.638rem] tracking-[-0.04em] leading-[121.42%] text-gray-500 whitespace-pre-wrap text-center mq450:text-[1.313rem] mq450:leading-[1.563rem]">
        We are founder’s community and accelerators, for a early-stage startups,
        we are enabling them with - practical experience and execution, and
        funds from the people of startup ecosystem, like - entrepreneurs,
        Successful and Angel investors.
      </b>
    </div>
  );
};

CommunityContent.propTypes = {
  className: PropTypes.string,
};

export default CommunityContent;
