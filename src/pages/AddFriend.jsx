import Content from "../components/Content";
import Logos from "../components/Logos";
import Portfolio from "../components/Portfolio";
import CommunityContent from "../components/CommunityContent";
import FrameComponent2 from "../components/FrameComponent2";
import Component from "../components/Component";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import SelectionCriteria from "../components/SelectionCriteria";
import AccelerationContainer from "../components/AccelerationContainer";
import FeaturesContainer from "../components/FeaturesContainer";

const AddFriend = () => {
  return (
    <div className="w-full h-[1040.438rem] relative bg-whitesmoke-100 overflow-hidden leading-[normal] tracking-[normal] mq1125:h-auto mq1125:min-h-[16647]">
      <div className="absolute top-[469.125rem] left-[53.75rem] [filter:blur(500px)] rounded-[50%] bg-cornflowerblue w-[23.25rem] h-[19.875rem]" />
      <div className="absolute top-[89.063rem] left-[26.563rem] bg-aqua w-[37.688rem] h-[8.063rem]" />
      <div className="absolute top-[680rem] left-[13.438rem] bg-aqua w-[28.625rem] h-[8.063rem]" />
      <div className="absolute top-[680rem] left-[47.25rem] bg-aqua w-[31rem] h-[8.063rem]" />
      <div className="absolute top-[476.175rem] left-[6.75rem] bg-aqua w-[31.913rem] h-[8.388rem]" />
      <img
        className="absolute top-[1013.188rem] left-[0rem] w-[90rem] h-[27.25rem]"
        alt=""
        src="/rectangle-44.svg"
      />
      <section className="absolute top-[675.25rem] left-[calc(50%_-_479px)] font-bold font-inter text-black text-center z-[1] text-[3.1rem] mq450:text-[1.813rem] mq800:text-[2.438rem]">
        <p className="m-0">{`We're backed by incredible `}</p>
        <p className="m-0 text-[6.331rem]">{`mentors & investors`}</p>
      </section>
      <Content />
      <section className="absolute top-[699.063rem] left-[0rem] w-full flex flex-col items-end justify-start gap-[28.937rem] max-w-full mq450:gap-[7.25rem] mq800:gap-[14.438rem]">
        <Logos />
        <Portfolio />
      </section>
      <section className="absolute top-[204.625rem] left-[3.938rem] w-[82.125rem] flex flex-col items-end justify-start gap-[9.937rem] max-w-full">
        <CommunityContent />
        <FrameComponent2 />
      </section>
      <section className="absolute top-[930.125rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq800:gap-[1.188rem]">
        <Component />
        <FrameComponent1 />
      </section>
      <section className="absolute top-[324.313rem] left-[1.813rem] w-[86.375rem] flex flex-col items-start justify-start gap-[54.75rem] max-w-full">
        <FrameComponent />
        <SelectionCriteria />
      </section>
      <section className="absolute top-[8.563rem] left-[3.188rem] w-[82.188rem] flex flex-col items-end justify-start gap-[9.187rem] max-w-full text-center text-[4rem] text-black font-inter">
        <AccelerationContainer />
        <div className="w-[80.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <b className="h-[12.813rem] w-[34.438rem] relative inline-block z-[1] mq450:text-[2.375rem] mq800:text-[3.188rem]">
            <p className="m-0">{`About `}</p>
            <p className="m-0 text-[6.15rem]">PedalCircle</p>
          </b>
        </div>
        <FeaturesContainer />
      </section>
    </div>
  );
};

export default AddFriend;
