import React from "react";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Contato />
      <Footer />
    </>
  );
};

export default Home;
