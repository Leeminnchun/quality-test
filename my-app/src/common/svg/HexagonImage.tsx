import * as React from "react";

const HexagonImage = ({ imageUrl, className }: { imageUrl: string, className?: string }) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {imageUrl && (
      <image
        x="0"
        y="0"
        width="100"
        height="100"
        href={imageUrl}
        clipPath="url(#hexagon-clip)"
      />
    )}
    <path
      d="M42.29 32.25v-16.5a4 4 0 0 0-2-3.464L26 4.036a4 4 0 0 0-4 0l-14.29 8.25a4 4 0 0 0-2 3.464v16.5a4 4 0 0 0 2 3.464L22 43.964a4 4 0 0 0 4 0l14.29-8.25a4 4 0 0 0 2-3.464"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default HexagonImage;
