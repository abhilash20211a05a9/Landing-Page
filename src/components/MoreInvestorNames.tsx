import PropTypes from "prop-types";

const MoreInvestorNames = ({
  className = "",
  x1293,
  dhruvKumar,
  angelInvestor,
}) => {
  return (
    <div
      className={`h-[14.181rem] flex flex-col items-end justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border gap-[0.65rem] text-center text-[1.419rem] text-black font-inter ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
        loading="lazy"
        alt=""
        src={x1293}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.562rem] pl-[2.125rem]">
        <div className="w-[9.125rem] relative inline-block">
          <p className="m-0">
            <b>{dhruvKumar}</b>
          </p>
          <p className="m-0 text-[1rem]">{angelInvestor}</p>
        </div>
      </div>
    </div>
  );
};

MoreInvestorNames.propTypes = {
  className: PropTypes.string,
  x1293: PropTypes.string,
  dhruvKumar: PropTypes.string,
  angelInvestor: PropTypes.string,
};

export default MoreInvestorNames;
