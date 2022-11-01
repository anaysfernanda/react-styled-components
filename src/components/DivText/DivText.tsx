import React from "react";
import { BoxTextStyled, TextStyled, TitStyled } from "./DivTextStyled";

interface DivTextProps {
  title: string;
  text: string;
}

const DivText: React.FC<DivTextProps> = ({ title, text }) => {
  return (
    <>
      <BoxTextStyled mode="dark">
        <TitStyled>{title}</TitStyled>
        <TextStyled>{text}</TextStyled>
      </BoxTextStyled>
    </>
  );
};

export default DivText;
