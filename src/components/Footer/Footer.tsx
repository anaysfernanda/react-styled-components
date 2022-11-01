import React from "react";
import { DivFooterStyled, DivIconStyled, DivLinkStyled } from "./FooterStyled";
import ImgFooter from "./ImgFooter";
import LinkFooter from "./Link";

const Footer: React.FC = () => {
  return (
    <>
      <DivFooterStyled>
        <DivLinkStyled>
          <LinkFooter name="Sobre" direction="#"></LinkFooter>
          <LinkFooter name="Contato" direction="#"></LinkFooter>
          <LinkFooter name="Termos de Uso" direction="#"></LinkFooter>
          <LinkFooter name="Política de Privacidade" direction="#"></LinkFooter>
        </DivLinkStyled>
        <DivIconStyled>
          <ImgFooter imagem="./images/facebook.png" />
          <ImgFooter imagem="./images/twitter.png" />
          <ImgFooter imagem="./images/instagram.png" />
        </DivIconStyled>
      </DivFooterStyled>
    </>
  );
};

export default Footer;
