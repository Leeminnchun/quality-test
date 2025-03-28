import * as React from "react";
interface HexagonFullBgSvgProps extends React.SVGProps<SVGSVGElement> {}

const HexagonFullBgSvg = (props: HexagonFullBgSvgProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
    {...props}
  >
    <path
      d="M232 80.18v95.64a16 16 0 0 1-8.32 14l-88 48.17a15.88 15.88 0 0 1-15.36 0l-88-48.17a16 16 0 0 1-8.32-14V80.18a16 16 0 0 1 8.32-14l88-48.17a15.88 15.88 0 0 1 15.36 0l88 48.17a16 16 0 0 1 8.32 14Z"
      fill="rgba(3, 33, 132, 0.3)"
    />
  </svg>
);
export default HexagonFullBgSvg;
