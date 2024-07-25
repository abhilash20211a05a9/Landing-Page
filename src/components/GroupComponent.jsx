import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  whoCanApplyForPedalCircle,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-between pt-[1.25rem] pb-[1.187rem] pr-[2.625rem] pl-[3.25rem] box-border relative max-w-full gap-[1.25rem] z-[1] text-center text-[1.406rem] text-black font-montserrat mq800:flex-wrap mq1350:pl-[1.625rem] mq1350:pr-[1.313rem] mq1350:box-border ${className}`}
      style={groupDivStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[-5px_-5px_10px_rgba(0,_0,_0,_0.25),_5px_5px_10px_rgba(0,_0,_0,_0.25)] rounded-26xl-5 bg-lightgray box-border border-[1px] border-solid border-dimgray-200" />
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem] box-border max-w-full">
        <b className="relative leading-[1.75rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
          {whoCanApplyForPedalCircle}
        </b>
      </div>
      <b className="w-[2.75rem] relative text-[2.631rem] leading-[3.25rem] flex font-sf-compact-display text-gray-400 items-center justify-center shrink-0 z-[1] mq450:text-[1.563rem] mq450:leading-[1.938rem] mq800:text-[2.125rem] mq800:leading-[2.563rem]">
        􀆈
      </b>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  whoCanApplyForPedalCircle: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default GroupComponent;
