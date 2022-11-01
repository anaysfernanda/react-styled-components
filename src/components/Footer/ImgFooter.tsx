import React from "react";
import { ImgIconStyled } from "./FooterStyled";

interface ImgFooterProps {
  imagem: string;
}

const ImgFooter: React.FC<ImgFooterProps> = ({ imagem }) => {
  return (
    <>
      <div style={{ padding: "5px" }}>
        <ImgIconStyled src={imagem} />
      </div>
    </>
  );
};

export default ImgFooter;
