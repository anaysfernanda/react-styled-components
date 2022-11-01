import React from "react";
import Cards from "./Cards/Cards";

const Section1: React.FC = () => {
  return (
    <div className="dflex">
      <Cards
        title="Somente para desktop"
        subtitle="Vamos aprender como utilizar um framework"
        icon="./images/desktop.png"
      />
      <Cards
        title="Criado com componentes"
        subtitle="Fácil aproveitamento"
        icon="./images/layers.png"
      />
      <Cards
        title="Fácil aproveitamento"
        subtitle="Estamos no caminho"
        icon="./images/check-circle.png"
      />
    </div>
  );
};

export default Section1;
