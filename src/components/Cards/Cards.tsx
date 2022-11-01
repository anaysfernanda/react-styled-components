import React from "react";
import { DivStyled, SubtitleStyled, TitleStyled } from "./CardsStyled";

interface CardsProps {
  title: string;
  subtitle: string;
  icon: string;
}

const Cards: React.FC<CardsProps> = ({ title, subtitle, icon }) => {
  return (
    <>
      <DivStyled>
        <img src={icon} />
        <TitleStyled>{title}</TitleStyled>
        <SubtitleStyled>{subtitle}</SubtitleStyled>
      </DivStyled>
    </>
  );
};

export default Cards;
