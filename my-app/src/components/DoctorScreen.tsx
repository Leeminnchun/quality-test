import React, { ReactNode } from "react";
import HexagonImage from "./HexagonImage";
type DoctorScreenProps = {
  picFirst: ReactNode;
  picSecond: ReactNode;
};
const DoctorScreen: React.FC<DoctorScreenProps> = ({ picFirst, picSecond }) => {
  return (
    <div className="relative w-full bg-[#0C99D6] text-white overflow-hidden">
    {/* Hexagon background layer */}
    <div className="absolute bottom-0 w-full h-1/2 bg-[#0668A3] clip-hexagon-large"></div>

    {/* Main content */}
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-12 max-w-5xl mx-auto">
      {/* Doctor Images */}
      <div className="relative w-full sm:w-1/2 h-[350px] sm:h-[500px]">
      <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-300 clip-hexagon-small"></div>
        <HexagonImage
          image={picFirst}
          className="left-0 top-0 sm:left-10 sm:top-10 z-10"
        />
        <HexagonImage
          image={picSecond}
          className="left-10 top-28 sm:left-24 sm:top-40 z-0"
        />
      </div>

      {/* Text content */}
      <div className="sm:ml-12 mt-6 sm:mt-0 text-center sm:text-left w-full sm:w-1/2">
        <p className="text-white text-base sm:text-lg leading-relaxed">
          Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản.
          Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.
        </p>

        <div className="mt-6">
          <p className="text-yellow-400 font-semibold text-lg">THU QUỲNH</p>
          <p className="text-sm">Bác sĩ</p>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    {/* plus */}
    <div className="absolute top-[120px] sm:top-[22px] right-[-2px] w-8 h-8">
        <div className="w-full h-1 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
        <div className="h-full w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
      </div>

    {/* Small Hexagon decor */}
    {/* <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-300 clip-hexagon-small"></div> */}
    <div className="absolute bottom-1/4 right-32 w-8 h-8 bg-blue-400 clip-hexagon-small"></div>
  </div>
  );
};

export default DoctorScreen;
