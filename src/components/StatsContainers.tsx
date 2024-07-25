import { useMemo } from "react";
import PropTypes from "prop-types";

const StatsContainers = ({
  className = "",
  k,
  hrsOfFounderBarnstorming,
  propPadding,
  propGap,
}) => {
  const statsContainers1Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`rounded-[21.98px] bg-gainsboro-400 flex flex-col items-start justify-start pt-[1.187rem] pb-[1.5rem] pr-[1.312rem] pl-[1.437rem] gap-[0.281rem] text-center text-[3.925rem] text-black font-inter border-[1.2px] border-solid border-black ${className}`}
      style={statsContainers1Style}
    >
      <div className="w-[12.513rem] h-[8.775rem] relative rounded-[21.98px] bg-gainsboro-400 box-border hidden border-[1.2px] border-solid border-black" />
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[0.937rem]">
        <b className="relative inline-block min-w-[7.563rem] z-[1] mq450:text-[2.375rem] mq800:text-[3.125rem]">
          {k}
        </b>
      </div>
      <b className="relative text-[0.681rem] z-[1]">
        {hrsOfFounderBarnstorming}
      </b>
    </div>
  );
};

StatsContainers.propTypes = {
  className: PropTypes.string,
  k: PropTypes.string,
  hrsOfFounderBarnstorming: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
};

export default StatsContainers;
