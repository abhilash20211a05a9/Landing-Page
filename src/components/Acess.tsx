import { useMemo } from "react";
import PropTypes from "prop-types";

const Acess = ({
  className = "",
  access,
  gainExclusiveAccessToOurI,
  hoursSupport1,
  propFlex,
  propPadding,
  propGap,
}) => {
  const acessStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      gap: propGap,
    };
  }, [propFlex, propPadding, propGap]);

  return (
    <div
      className={`flex-[0.9812] flex flex-col items-end justify-start pt-[3.125rem] px-[2.062rem] pb-[1.506rem] box-border relative gap-[6.125rem] min-w-[17.813rem] max-w-full text-left text-[1.806rem] text-black font-inter mq450:flex-1 ${className}`}
      style={acessStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[37.05px] bg-white" />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.437rem] pl-[1.062rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.312rem]">
          <b className="relative z-[1] mq450:text-[1.438rem]">{access}</b>
          <div className="self-stretch relative text-[0.688rem] text-gray-500 z-[1]">
            {gainExclusiveAccessToOurI}
          </div>
        </div>
      </div>
      <div className="w-[4.5rem] h-[4.5rem] relative z-[1]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-300 w-full h-full" />
        <img
          className="absolute top-[0.75rem] left-[1.063rem] w-[2.75rem] h-[2.75rem] object-contain z-[1]"
          alt=""
          src={hoursSupport1}
        />
      </div>
    </div>
  );
};

Acess.propTypes = {
  className: PropTypes.string,
  access: PropTypes.string,
  gainExclusiveAccessToOurI: PropTypes.string,
  hoursSupport1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
};

export default Acess;
