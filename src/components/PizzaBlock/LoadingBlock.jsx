import React from "react";
import ContentLoader from "react-content-loader";
function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="153" r="131" />
      <rect x="5" y="303" rx="0" ry="0" width="255" height="29" />
      <rect x="7" y="350" rx="0" ry="0" width="254" height="68" />
      <rect x="8" y="425" rx="0" ry="0" width="82" height="28" />
      <rect x="135" y="424" rx="13" ry="13" width="125" height="31" />
    </ContentLoader>
  );
}

export default LoadingBlock;
