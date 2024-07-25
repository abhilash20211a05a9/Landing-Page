import PropTypes from "prop-types";

const Portfolio = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start [row-gap:20px] max-w-full text-left text-[3.75rem] text-black font-inter mq1350:flex-wrap mq1350:justify-center ${className}`}
    >
      <div className="w-[31.563rem] bg-gainsboro-100 flex flex-col items-start justify-start pt-[3.75rem] px-[1.187rem] pb-[9.625rem] box-border shrink-0 max-w-full z-[1]">
        <img
          className="w-[31.563rem] h-[26.688rem] relative hidden max-w-full z-[1]"
          alt=""
          src="/rectangle-53.svg"
        />
        <b className="h-[12.375rem] relative inline-block max-w-full z-[2] mq450:text-[2.25rem] mq800:text-[3rem]">
          <p className="m-0">{`Our `}</p>
          <p className="m-0 text-[6rem]"> Portfolio</p>
        </b>
        <div className="w-[28rem] h-[8.188rem] relative bg-aqua max-w-full z-[1] mt-[-7.25rem]" />
      </div>
      <div className="w-[192.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7rem] box-border min-h-[19.313rem] max-w-[215%] shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.031rem] box-border shrink-0 max-w-full">
          <div className="ml-[-0.007rem] w-[392.906rem] flex flex-row items-end justify-between shrink-0 max-w-[204%] gap-[1.25rem]">
            <div className="h-[7.831rem] w-[11.225rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[3.363rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/colored-primary-logo-1@2x.png"
              />
            </div>
            <img
              className="self-stretch w-[12.644rem] relative max-h-full object-cover min-h-[12.313rem]"
              loading="lazy"
              alt=""
              src="/guugly-wuugly-logo-10x10-inch-white@2x.png"
            />
            <div className="h-[8.969rem] w-[9.038rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[5.631rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/surgycall@2x.png"
              />
            </div>
            <div className="h-[8.106rem] w-[10.919rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[3.894rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/copy-of-divycard-7--7-cm-50--50-cm@2x.png"
              />
            </div>
            <div className="h-[9.981rem] w-[13.175rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.268rem] box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/portfolio-4@2x.png"
              />
            </div>
            <div className="h-[8.95rem] w-[13.219rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[5.669rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/portfolio-5@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.75rem]">
              <img
                className="w-[9.044rem] h-[8.8rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/apclub-logo-coral-apr-2024-1-4@2x.png"
              />
            </div>
            <div className="h-[9.244rem] w-[14.994rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[6.163rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/logo-finalized-png@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.025rem]">
              <img
                className="w-[10.544rem] h-[10.256rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/procial-logo-2@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.431rem]">
              <img
                className="w-[7.644rem] h-[7.438rem] relative object-cover"
                alt=""
                src="/whatsapp-image-20240529-at-258-2@2x.png"
              />
            </div>
            <div className="h-[9.4rem] w-[6.113rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[6.494rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/yaanmanlogoblack-2@2x.png"
              />
            </div>
            <div className="h-[7.831rem] w-[11.225rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[3.363rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/colored-primary-logo-1-1@2x.png"
              />
            </div>
            <img
              className="self-stretch w-[12.644rem] relative max-h-full object-cover min-h-[12.313rem]"
              alt=""
              src="/guugly-wuugly-logo-10x10-inch-white-1@2x.png"
            />
            <div className="h-[8.969rem] w-[9.038rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[5.631rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/surgycall-1@2x.png"
              />
            </div>
            <div className="h-[8.106rem] w-[10.919rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[3.894rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/copy-of-divycard-7--7-cm-50--50-cm-1@2x.png"
              />
            </div>
            <div className="h-[9.981rem] w-[13.175rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.268rem] box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/portfolio-7@2x.png"
              />
            </div>
            <div className="h-[8.95rem] w-[13.219rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[5.669rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/portfolio-6@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.75rem]">
              <img
                className="w-[9.044rem] h-[8.8rem] relative object-cover"
                alt=""
                src="/apclub-logo-coral-apr-2024-1-5@2x.png"
              />
            </div>
            <div className="h-[9.244rem] w-[14.994rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[6.163rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/logo-finalized-png-1@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.025rem]">
              <img
                className="w-[10.544rem] h-[10.256rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/procial-logo-3@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.431rem]">
              <img
                className="w-[7.644rem] h-[7.438rem] relative object-cover"
                alt=""
                src="/whatsapp-image-20240529-at-258-3@2x.png"
              />
            </div>
            <div className="h-[9.4rem] w-[6.113rem] flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[6.494rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/yaanmanlogoblack-2-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
};

export default Portfolio;
