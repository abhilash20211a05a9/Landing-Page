import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-[7.437rem] pb-[17.125rem] pr-[6.75rem] pl-[5.937rem] box-border relative gap-[4.375rem] max-w-full text-center text-[2.063rem] text-black font-montserrat mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[2.188rem] mq800:pl-[2.938rem] mq800:pr-[3.375rem] mq800:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-whitesmoke-100" />
      <div className="w-[76.563rem] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[4.813rem] relative text-inherit leading-[2.563rem] font-bold font-inherit flex items-center justify-center shrink-0 min-w-[4.813rem] z-[1] mq450:text-[1.25rem] mq450:leading-[1.5rem] mq800:text-[1.625rem] mq800:leading-[2rem]">
          FAQ
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.812rem] max-w-full text-[1.406rem]">
        <div className="self-stretch flex flex-row items-end justify-between pt-[1.25rem] pb-[1.187rem] pr-[2.437rem] pl-[2.937rem] box-border relative max-w-full gap-[1.25rem] z-[2] mq800:flex-wrap mq800:justify-center mq1350:pl-[1.438rem] mq1350:box-border">
          <div className="h-[1.5rem] w-[70.375rem] absolute !m-[0] bottom-[1.125rem] left-[3.125rem] bg-darkgray z-[1]" />
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[-5px_-5px_10px_rgba(0,_0,_0,_0.25),_5px_5px_10px_rgba(0,_0,_0,_0.25)] rounded-26xl-5 bg-lightgray box-border border-[1px] border-solid border-dimgray-200" />
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem] box-border max-w-full">
            <b className="relative leading-[1.75rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              How do I apply for PedalCircle?
            </b>
          </div>
          <b className="w-[2.75rem] relative text-[2.631rem] leading-[3.25rem] flex font-sf-compact-display text-gray-400 items-center justify-center shrink-0 z-[1] mq450:text-[1.563rem] mq450:leading-[1.938rem] mq800:text-[2.125rem] mq800:leading-[2.563rem]">
            􀆈
          </b>
        </div>
        <GroupComponent whoCanApplyForPedalCircle="Who can apply for PedalCircle?" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
          <GroupComponent
            whoCanApplyForPedalCircle="How long is the PedalCircle program?"
            propPadding="1.25rem 2.812rem 1.187rem 3.062rem"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.687rem] box-border gap-[1.812rem] max-w-full">
            <GroupComponent
              whoCanApplyForPedalCircle="What is the innovation hub?"
              propPadding="1.25rem 2.812rem 1.187rem 3.125rem"
            />
            <GroupComponent
              whoCanApplyForPedalCircle="How can PedalCircle help my startup grow?"
              propPadding="1.25rem 2.812rem 1.187rem 2.937rem"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
            <GroupComponent
              whoCanApplyForPedalCircle="Is there a specific industry focus for PedalCircle?"
              propPadding="1.25rem 2.812rem 1.187rem 3.25rem"
            />
            <GroupComponent
              whoCanApplyForPedalCircle="What happens after the program ends?"
              propPadding="1.25rem 2.812rem 1.187rem 3rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
