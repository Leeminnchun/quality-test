import React from "react";

const HexagonCustom = () => {
  const width = window.innerWidth; // Lấy kích thước viewport
  const height = width * 1.133; // Tính height theo tỉ lệ

  return (
    <div className="hex absolute top-0 z-0"></div>
  );
};

export default HexagonCustom;