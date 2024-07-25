import StatsContainers1 from "./StatsContainers1";
import StatsContainers from "./StatsContainers";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-end py-[0rem] pr-[4.687rem] pl-[4.75rem] box-border max-w-full text-center text-[3.925rem] text-black font-inter ${className}`}
    >
      <div className="w-[72.644rem] flex flex-row flex-wrap items-start justify-start gap-[2.137rem_2.456rem] min-h-[19.688rem] max-w-full">
        <StatsContainers1
          k="10K+"
          foundersJoinedWishlist="Founders Joined Wishlist"
        />
        <StatsContainers1
          k="1k+"
          foundersJoinedWishlist="Joined Community"
          propPadding="1.187rem 2.812rem 1.5rem 2.75rem"
          propGap="0.281rem"
        />
        <StatsContainers
          k="4k+"
          hrsOfFounderBarnstorming="Hrs of founder Barnstorming "
        />
        <StatsContainers
          k="1k+"
          hrsOfFounderBarnstorming="Hr of Mentor Discussion "
          propPadding="1.187rem 2.125rem 1.5rem"
          propGap="0.281rem"
        />
        <StatsContainers1
          k="400+"
          foundersJoinedWishlist="Hrs of Mentor Brainstorming"
          propPadding="1.187rem 0.75rem 1.5rem 0.812rem"
          propGap="0.281rem"
        />
        <StatsContainers
          k="10"
          hrsOfFounderBarnstorming="Startup Raised Funds"
          propPadding="1.187rem 2.562rem 1.437rem"
          propGap="0.287rem"
        />
        <StatsContainers1
          k="50+"
          foundersJoinedWishlist="Successful Founders"
          propPadding="1.187rem 2.187rem 1.5rem"
          propGap="0.287rem"
        />
        <StatsContainers
          k="20+"
          hrsOfFounderBarnstorming="Micro VC Angel Network"
          propPadding="1.187rem 2rem 1.5rem 2.125rem"
          propGap="0.287rem"
        />
        <StatsContainers1
          k="100+"
          foundersJoinedWishlist="Active Angel  Investor "
          propPadding="1.187rem 1.125rem 1.437rem"
          propGap="0.287rem"
        />
        <StatsContainers1
          k="18+"
          foundersJoinedWishlist="Ecosystem Partners"
          propPadding="1.187rem 2.562rem 1.5rem"
          propGap="0.287rem"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
