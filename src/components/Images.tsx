import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

export const AaharseaarogyaIm = () => {
  return (
    <StaticImage
      src="../images/aaharseaarogya/ku6.png"
      alt="Aahar Se Aarogya"
      placeholder="blurred"
    />
  );
};

export const MilletsLogo = () => {
  return (
    <div className="block m-auto text-center">
      <StaticImage
        src="../images/millets/logo.png"
        alt="KVM Millets logo"
        placeholder="blurred"
        width={400}
        height={400}
      />
    </div>
  );
};
