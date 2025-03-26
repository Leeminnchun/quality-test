import React, { ReactNode } from "react";
import clsx from "clsx";
const HexagonImage = ({
  image,
  className,
  hasBorder = false,
}: {
  image: ReactNode;
  className?: string;
  hasBorder?: boolean
}) => {
  return (
    <div
      className={clsx(
        "absolute w-[180px] h-[200px] sm:w-[220px] sm:h-[240px] bg-gray-300",
        "clip-hexagon overflow-hidden border-4 border-cyan-300",
        {'p-[6px] border-2 border-white': hasBorder},
        className
      )}
    >
      <div className="w-full h-full">{image}</div>
    </div>
  );
};

export default HexagonImage;
