import React, { ReactNode } from "react";
import HexagonCustomSvg from "../common/svg/HexagonCustomSvg";
import HexagonCustom from "../common/hexagon/HexagonCustom";
import HexagonFullBgSvg from "../common/svg/HexagonFullBgSvg";
import HexagonImage from "../common/svg/HexagonImage";
type DoctorScreenProps = {
  picFirst: string;
  picSecond: string;
};
const DoctorScreen: React.FC<DoctorScreenProps> = ({ picFirst, picSecond }) => {
  return (
    <>
      <div className="flex items-center relative  overflow-hidden bg-blue-500 text-white w-full h-[100px] min-h-[500px]">
        {/* Hexagon background layer */}

        {/* <div className="absolute top-[calc(100vw/10)] w-screen h-[100vw] bg-[#0668A3] clip-hexagon-large rounded-[15px] z-0"></div> */}
 {/* <div className="hexagon-bg"></div> */}

 {/* <HexagonCustomSvg imageUrl="https://via.placeholder.com/200" /> */}
 <div className="absolute w-screen">
 <HexagonFullBgSvg />
 </div>


        {/* Layout maine */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start z-40">
          {/* Layer picture */}
          <div className="w-full lg:w-1/2 h-[400px]">
            <HexagonCustomSvg
              imageUrl={picFirst}
              className="absolute left-0 top-0 sm:left-10 sm:top-10 z-50"
              hasBorder
            />
            <HexagonCustomSvg
              imageUrl={picSecond}
              className="absolute left-10 top-28 sm:left-24 sm:top-40 z-0"
            />
          </div>

          {/* Quote text */}
          <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2 text-center lg:text-left z-30">
            <p className="text-base lg:text-lg leading-relaxed">
              Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá
              đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và
              giản dị.
            </p>

            {/* Name */}
            <div className="mt-6">
              <p className="text-yellow-300 font-semibold text-lg">THU QUỲNH</p>
              <p className="text-sm">Bác sĩ</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* plus */}
        <div className="absolute top-[120px] sm:top-[22px] right-[-2px] w-8 h-8 z-20">
          <div className="w-full h-1 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
          <div className="h-full w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Small Hexagon decor */}
        {/* <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-300 clip-hexagon-small"></div> */}
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-300 clip-hexagon-small"></div>
        <div className="absolute bottom-1/4 right-32 w-8 h-8 bg-blue-400 clip-hexagon-small z-20"></div>
      </div>
    </>
  );
};

export default DoctorScreen;
