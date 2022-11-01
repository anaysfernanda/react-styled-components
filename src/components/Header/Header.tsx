import React from "react";
import { ImgStyled, TextStyled } from "./HeaderStyled";

const Header: React.FC = () => {
  return (
    <>
      <ImgStyled>
        <TextStyled>Minha primeira página com React</TextStyled>
      </ImgStyled>
    </>
  );
};

export default Header;
