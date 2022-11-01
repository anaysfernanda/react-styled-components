import styled from "styled-components";

interface BoxStyledProps {
  mode: "dark" | "light";
}

const BoxTextStyled = styled.div<BoxStyledProps>`
  background-color: ${(props) => props.theme.background[props.mode]};
  padding: 50px;
  height: 500px;
  width: 50vw;
`;

const TitStyled = styled.h2`
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TextStyled = styled.p`
  font-size: 20px;
`;

export { BoxTextStyled, TitStyled, TextStyled };
