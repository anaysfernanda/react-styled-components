import React from "react";
import { BoxImgStyled } from "./DivImgStyled";

interface DivImgProps {
  background: string;
}

const DivImg: React.FC<DivImgProps> = ({ background }) => {
  return (
    <>
      <BoxImgStyled src={background} />
    </>
  );
};

export default DivImg;
