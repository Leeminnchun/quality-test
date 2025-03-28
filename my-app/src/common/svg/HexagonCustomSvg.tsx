import clsx from "clsx";

const HexagonCustomSvg = ({ imageUrl, className, hasBorder }: { imageUrl?: string, className?: string, hasBorder?: boolean }) => {
  return (
    <svg viewBox="0 0 100 100" className={clsx('hexagon-svg object-cover', className)}>
    <defs>
      <clipPath id="hexagon-clip" clipPathUnits="userSpaceOnUse">
        {hasBorder && <path
          d="M 50,2 L 94,25 L 94,75 L 50,98 L 6,75 L 6,25 Z"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="round"
          fill="none"
        />}
      </clipPath>
    </defs>
    <image
      x="0"
      y="0"
      width="100"
      height="100"
      href={imageUrl}
      clipPath="url(#hexagon-clip)"
      className="object-cover"
    />
   {hasBorder && <path
      d="M 50,2 L 94,25 L 94,75 L 50,98 L 6,75 L 6,25 Z"
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
      fill="none"
    />}
  </svg>
  );
};

export default HexagonCustomSvg;
