import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[1.375rem] left-[3.188rem] rounded-xl bg-gray-100 w-[82.188rem] flex flex-row items-start justify-between pt-[0.312rem] pb-[0.25rem] pr-[2rem] pl-[1.5rem] box-border gap-[1.25rem] max-w-full text-center text-[1.244rem] text-gray-200 font-inter ${className}`}
    >
      <div className="h-[5.375rem] w-[82.188rem] relative rounded-xl bg-gray-100 hidden max-w-full" />
      <img
        className="h-[4.813rem] w-[15.5rem] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/screenshot-20240523-at-1157-2@2x.png"
      />
      <div className="w-[36.75rem] flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.937rem] max-w-full">
          <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border max-w-full mq1125:hidden">
            <nav className="m-0 self-stretch h-[1.5rem] relative text-center text-[1.244rem] text-white font-inter">
              <a className="[text-decoration:none] absolute top-[0rem] left-[7.75rem] font-bold text-[inherit] inline-block min-w-[3.875rem] z-[1]">
                Lorem
              </a>
              <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] font-bold text-[inherit] inline-block min-w-[3.875rem] z-[1]">
                Lorem
              </a>
              <a className="[text-decoration:none] absolute top-[0rem] left-[15.5rem] font-bold text-[inherit] inline-block min-w-[3.875rem] z-[1]">
                Lorem
              </a>
              <a className="[text-decoration:none] absolute top-[0rem] left-[23.25rem] font-bold text-[inherit] inline-block min-w-[3.875rem] z-[1]">
                Lorem
              </a>
            </nav>
          </nav>
          <div className="rounded-lg bg-white flex flex-row items-start justify-start pt-[0.687rem] pb-[0.75rem] pr-[1.875rem] pl-[1.937rem] z-[1]">
            <div className="h-[2.938rem] w-[7.688rem] relative rounded-lg bg-white hidden" />
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[3.875rem] z-[2]">
              Lorem
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
