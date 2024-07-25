import { useMemo } from "react";
import PropTypes from "prop-types";

const ThirdPair = ({
  className = "",
  x1293,
  alokKohli,
  pepsico,
  propHeight,
  propGap,
  propFlex,
  propMinWidth,
}) => {
  const thirdPairStyle = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propGap, propFlex, propMinWidth]);

  return (
    <div
      className={`h-[14.125rem] flex flex-col items-start justify-start gap-[0.593rem] text-center text-[1.419rem] text-black font-inter ${className}`}
      style={thirdPairStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={x1293}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.937rem] pl-[2.875rem]">
        <div className="relative">
          <p className="m-0">
            <b>{alokKohli}</b>
          </p>
          <p className="m-0 text-[1rem]">{pepsico}</p>
        </div>
      </div>
    </div>
  );
};

ThirdPair.propTypes = {
  className: PropTypes.string,
  x1293: PropTypes.string,
  alokKohli: PropTypes.string,
  pepsico: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ThirdPair;
