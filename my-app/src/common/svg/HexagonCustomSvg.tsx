import React from "react";

const HexagonCustomSvg = ({
  size = 200,
  color = "blue",
  borderRadius = 15,
  opacity = 0,
  className
}:{
  size?: number;
  color?: string;
  borderRadius?: number;
  opacity?: number;
  className?: string
}) => {
  const points = `
    ${size * 0.5},0 
    ${size},${size * 0.25} 
    ${size},${size * 0.75} 
    ${size * 0.5},${size} 
    0,${size * 0.75} 
    0,${size * 0.25}
  `;

  return (
    <div className={className}>
      <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="hexagonClip">
        <polygon points={points} rx={borderRadius} ry={borderRadius} />
      </clipPath>
      <rect
        width="100%"
        height="100%"
        fill={color}
        clipPath="url(#hexagonClip)"
        rx={borderRadius}
        ry={borderRadius}
        opacity={opacity}
      />
    </svg>
    </div>
  );
};

export default HexagonCustomSvg;
