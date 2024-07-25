import { useMemo } from "react";
import PropTypes from "prop-types";

const StatsContainers1 = ({
  className = "",
  k,
  foundersJoinedWishlist,
  propPadding,
  propGap,
}) => {
  const statsContainersStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`rounded-[21.98px] bg-gainsboro-400 flex flex-col items-start justify-start pt-[1.187rem] pb-[1.5rem] pr-[1.187rem] pl-[1.312rem] gap-[0.281rem] text-center text-[3.925rem] text-black font-inter border-[1.2px] border-solid border-black ${className}`}
      style={statsContainersStyle}
    >
      <div className="w-[12.513rem] h-[8.775rem] relative rounded-[21.98px] bg-gainsboro-400 box-border hidden border-[1.2px] border-solid border-black" />
      <b className="relative z-[1] mq450:text-[2.375rem] mq800:text-[3.125rem]">
        {k}
      </b>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0.687rem] text-[0.681rem]">
        <b className="relative z-[1]">{foundersJoinedWishlist}</b>
      </div>
    </div>
  );
};

StatsContainers1.propTypes = {
  className: PropTypes.string,
  k: PropTypes.string,
  foundersJoinedWishlist: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
};

export default StatsContainers1;
